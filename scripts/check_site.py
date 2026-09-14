#!/usr/bin/env python3
"""Check an already-built Jekyll site using Python's standard library only.

Usage: bundle exec jekyll build && python3 scripts/check_site.py _site
External destinations are not fetched. This never publishes or changes files.
"""
from __future__ import annotations
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import urlsplit, unquote

class Page(HTMLParser):
    def __init__(self, html: str):
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.links: list[str] = []
        self.missing_alts = 0
        self.feed(html)
    def handle_starttag(self, tag: str, attrs: list[tuple[str,str|None]]) -> None:
        a = dict(attrs)
        if a.get('id'): self.ids.append(a['id'])
        if tag == 'img' and 'alt' not in a: self.missing_alts += 1
        if tag in ('a','link') and a.get('href'): self.links.append(a['href'])
        if tag in ('img','script','iframe') and a.get('src'): self.links.append(a['src'])
        if tag in ('img','source') and a.get('srcset'):
            self.links.extend(x.strip().split()[0] for x in a['srcset'].split(',') if x.strip())
    handle_startendtag = handle_starttag

def main() -> int:
    root = Path(sys.argv[1] if len(sys.argv)>1 else '_site').resolve()
    if not (root/'index.html').is_file():
        print(f'No built homepage at {root}/index.html. Run Jekyll first.',file=sys.stderr); return 2
    pages = {p:Page(p.read_text(encoding='utf-8')) for p in root.rglob('*.html')}
    errors: list[str] = []
    links_checked = 0
    for path,page in pages.items():
        for ident,count in Counter(page.ids).items():
            if count > 1: errors.append(f'{path.relative_to(root)}: duplicate ID {ident}')
        if page.missing_alts: errors.append(f'{path.relative_to(root)}: image without alt text')
        for href in page.links:
            u=urlsplit(href)
            if u.scheme or u.netloc or href.startswith('data:'): continue
            if not u.path: target=path
            else:
                target=(root/u.path.lstrip('/') if u.path.startswith('/') else path.parent/u.path).resolve()
                if target.is_dir(): target=target/'index.html'
            links_checked += 1
            if not target.exists():
                errors.append(f'{path.relative_to(root)}: missing {href}'); continue
            if u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:
                errors.append(f'{path.relative_to(root)}: missing anchor {href}')
    if errors:
        print('\n'.join(errors),file=sys.stderr); return 1
    print(f'Passed: {len(pages)} HTML pages, {links_checked} local links/assets/anchors; no duplicate IDs or missing image alt text.')
    return 0

if __name__=='__main__': raise SystemExit(main())

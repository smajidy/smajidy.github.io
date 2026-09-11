# Shayan Majidy — personal website

Jekyll source for the GitHub Pages site. This is the approved minimalist design,
with the 2.25-second opening and the small decorative footer wave. No wave
favicon is configured. The two newest gallery photos are TQC26 and QEC26.

## Editing

- `_pages/about.md`: homepage text, positions, book and publications (HTML below YAML front matter).
- `_pages/oot-and-aboot.md`: gallery, newest first; each figure has a caption and a date.
- `_data/navigation.yml`: the two navigation links.
- `assets/css/main.css`: plain CSS for the entire design, including mobile/print layouts.
- `assets/js/site-intro.js`: opening animation, session/replay/reduced-motion handling.
- `_includes/site-footer.html`: the decorative footer wave.
- `images/`: photographs and book cover. `CV.pdf` is at the repository root.

There is no Sass build or JavaScript framework requirement for the presentation.
Jekyll is still used for layouts, metadata, page URLs, redirects, feed and sitemap.
The existing Google Fonts link is retained; no font files are bundled.

## Publishing

Replace repository contents with this folder's contents, preserving `.git` and
reconciling any edits made since the supplied snapshot. Delete replaced/obsolete
files as well as copying new files; do not simply merge the folders. In particular,
`assets/css/main.scss` must be removed because its output would collide with the new
`assets/css/main.css`. Commit, push, and check the GitHub Pages deployment.

The old `_sass/`, greedy-navigation bundle and scripts include are no longer needed.
The two-link navigation works without JavaScript. Click Home at the top to replay
an opening, or use a fresh private window to see first-visit behaviour.

## Caption date

The QEC26 talk date is June 11, 2026, as listed in the official programme:
https://qec-conference.org/2026/schedule/
The supplied draft said May 11; that month has been corrected. The TQC26 date is
September 2, 2026, as supplied.

## Validation boundary

The package is checked using local Chromium fixtures built from its actual page
markup, CSS and JavaScript. This is not a full Jekyll build or a live deployment
test. The required Ruby/Jekyll dependencies were not available in the build
workspace. Keep your backup branch and verify the GitHub Pages build after upload.

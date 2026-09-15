# Shayan Majidy — personal website

Jekyll source for the GitHub Pages website at https://smajidy.github.io/.

## Content map

| File | Purpose |
| --- | --- |
| `_pages/about.md` | Introduction, research, full textbook/outreach feature, then background (timeline, recent talks and honours). |
| `_pages/teaching.md` | Separate Teaching page: independent course, mentoring and educational development, with links to the homepage book and film. |
| `_data/publications.yml` | The single source of truth for research-paper titles, authors, publication status, years, citations and paper resources. |
| `_pages/publications.md` | Continuous reverse-chronological bibliography and the separate textbook citation. |
| `_pages/oot-and-aboot.md` | Personal gallery captions and image placement. |
| `_data/images.yml` | Optimised display-image variants and intrinsic image dimensions. |
| `_data/navigation.yml` | Main navigation labels and destinations. |
| `_config.yml` | Identity, social-profile links, share image and build settings. |
| `assets/css/main.css` | Shared responsive styling. |
| `assets/js/site-intro.js` | The opening animation: original choreography compressed to 1.75 seconds. |
| `assets/js/site-navigation.js` | Active homepage sections and separate-page links; the textbook/outreach feature maps to Home. |
| `CV.pdf` | The downloadable CV. |

The site retains the 860 px desktop column, original typeface declarations and navy palette, 1 px profile-photo border, 2 pt textbook-cover border, sticky navigation and original opening-animation choreography (now 1.75 seconds). Display images use WebP derivatives; the originals remain in `images/` unchanged.

## Local development and validation

With Ruby, Bundler and access to RubyGems:

```sh
bundle install
bundle exec jekyll serve
```

Open the address printed by Jekyll. For a production build and local-link check:

```sh
JEKYLL_ENV=production bundle exec jekyll build --trace
python3 scripts/check_site.py _site
```

`check_site.py` uses only the Python standard library. It checks local links, assets, fragment destinations, duplicate HTML IDs and image alternative-text attributes. It does not validate external websites, image quality or factual claims.

`.github/workflows/check-site.yml` performs these build/check steps on pull requests and manual runs. It has read-only repository permissions and **does not deploy, push, or change the site's existing GitHub Pages configuration**. Use this check before merging. Dependencies must be available in the build environment.

The September 2026 detailed-edit package was reviewed using source-derived HTML and Chromium, not a successful local Jekyll build: the editing environment lacked the GitHub Pages/Jekyll gems and could not download them. The read-only workflow supplies the remaining native-build check. The external standalone preview and screenshots are review aids, not deployment files; keep them out of this source directory.

## Add or update a paper

Edit `_data/publications.yml`, not the rendered HTML. Each paper has a permanent `id`, an integer `year` and `order`, `status` (`published` or `preprint`), `title`, full `authors`, and `arxiv_id`. For a published paper also supply `journal_url`, `citation` and `venue_short`.

- Use the journal citation year for a published article; use the initial posting year for an unpublished preprint. An optional `first_posted`/`revised` pair distinguishes a preprint revision from a new paper.
- Higher `order` values appear first within a year. The template sorts newest year first but displays one continuous list, without year headings or gaps. Years remain in each citation. Zero-height anchors preserve old `#year-YYYY` links.
- Keep the existing `id` when publication details change: it is the stable `/publications/#paper-id` destination.
- Write mathematical title markup only in optional `title_html`, while keeping `title` as plain text for accessible labels.
- List all authors. For very long collaborations, optional `authors_compact` supplies the visible short list; the full `authors` array appears in an accessible native disclosure.
- Optional `resources` is an array of `label`/`url` pairs, e.g. an existing explanation or recorded talk. Do not publish private draft URLs or confidential material.

Homepage paper links read the same bibliography through `research-paper-link.html`. Use `status=true` for every research-area link, including quantum thermodynamics, so each link has one parenthesised status or venue and year: `(preprint, 2026)` or `(Nature, 2026)`.

```liquid
{% include research-paper-link.html id="phantom-codes" label="Phantom codes" status=true %}
```

Explanation and recorded-talk links are intentionally omitted beside research-area paper links for now. Source-only TODO comments in `_pages/about.md` record revisiting them in a clearer format and adding further selected QEC and algorithms work. The resource metadata and helper remain available for future use; the complete Publications list and its resource links, and the recordings in Selected talks, are unchanged. Curating homepage examples does not remove papers from the bibliography.

The Home/Research narrative uses three equally styled themes in this order:
1. Quantum error correction.
2. Quantum algorithms and architectures (combined).
3. Quantum dynamics and thermodynamics.

The homepage introduction uses the same order. The third theme is an integrated
part of the programme, not earlier or archived work. Its selected links are the
Nature Communications dynamics paper and the Nature Reviews Physics Perspective
only. The combined algorithms-and-architectures group links the Nature paper and
Building Quantum Computers; the full textbook feature remains on the homepage under Textbook &
outreach. Keep the same parenthesised venue/year convention for the book link.

Canonical fragments are `#quantum-error-correction`,
`#quantum-algorithms-and-architectures`, and
`#quantum-dynamics-and-thermodynamics`. Zero-height aliases preserve
`#quantum-algorithms`, `#quantum-architectures`, and `#earlier-research` without
retaining their old presentation.

When a preprint is published, update its existing record rather than adding a duplicate. Keep the corresponding CV citation consistent separately.

## Other content maintenance

Research descriptions distinguish completed results from current directions. Attribute individual roles only when established, not inferred from author order. The approved Nature collaboration wording and connected research narrative are grounded in the owner-supplied Faculty Research Statement V6 (Waterloo). Keep completed work distinct from cooling, state-preparation and other prospective directions. The private research statement itself is not included in the public repository.

Keep Selected recent talks after the education/career timeline and before Selected honours in Background & CV, not in Research. Keep it short and accurately labelled as invited or contributed. Recording links are optional. Repeated titles are retained rather than rewritten to suggest different research. The entry labelled “PQTC 2026, Princeton” is an upcoming invited talk on 22 October; remove the upcoming qualifier after delivery. Keep event and location labels separate, including “YQI Seminar, Yale”. The gallery and full CV can retain older appearances omitted from the homepage selection.

Selected honours show award years; the career timeline shows funding periods. All honours use one consistent two-line structure: the official linked award name first in dark type, followed by a plain-language award type and awarding body in muted type. Do not invent new official titles or add selective prestige claims. IQC's award is described as a graduate research award because its published eligibility is not restricted to doctoral students.

To adjust animation speed, change `duration` (milliseconds) in `assets/js/site-intro.js`. Leave `timelineDuration` and all choreography keyframes unchanged so every phase speeds up uniformly. Keep reduced-motion, immediate user-interruption, navigation and replay behaviour intact. Refresh the script cache token in `_includes/site-intro.html` after changes.

Teaching and mentoring copy uses the owner-supplied September 2026 account. It identifies independent fourth-year instruction, the 4.8/5 evaluation with its 97% response rate, six students supported into IQC internships, textbook piloting in five Waterloo courses, 84 exercises, and graduate mentoring at Maryland. Keep student support distinct from claims of causing PhD enrolment. Do not convert anticipated departmental adoption into an established result. Unentangled is a former organisation and is described in the past tense. Use “Mikhail D. Lukin” in the homepage biography; retain author initials in citations. A public syllabus or representative assignment can be linked once a suitable file and permission are available. No fabricated example or empty download placeholder is included.

## Images

`_includes/responsive-image.html` renders the selected record from `_data/images.yml` with `srcset`, `sizes`, intrinsic dimensions, alternative text and loading hints. The homepage portrait is eager/high-priority; lower-page images are lazy-loaded.

When adding an image, keep the original, create appropriately sized display derivatives without enlarging beyond its native dimensions, add its manifest record, and use the include. Match the `sizes` expression to the actual layout. Do not replace the original with a compressed derivative or discard its content unintentionally.

The favicon reuses the site's existing wave artwork; the share image uses the existing portrait. No third-party font files are bundled. The site continues to request its original Google Fonts, with existing system-font fallbacks.

## Heading hierarchy

On screens at least 1000 px wide, major homepage headings and their section rules extend 32 px to the left of the text column. Body text and image widths are unchanged. On narrower screens the headings stay aligned with the body; do not indent mobile text or introduce horizontal scrolling. Research begins directly with its publication-access links and research areas, without a generic overview sentence.

## Teaching page and homepage features

The main menu order is Home, Research, Background & CV, Teaching, Publications,
Oot and Aboot. Teaching is the separate `/teaching/` page, with a normal
current-page marker. Do not restore `/#teaching` as its menu destination.

The homepage section “Textbook & outreach” retains the complete book description,
authors, publisher, pilot/exercise details, contents/resources links, cover, and
Unentangled description, film and credit. Course design, mentoring and educational
development appear on Teaching, without duplicating the long feature. Both pages
link to each other. Preserve `/#textbook` and `/#outreach`; the legacy `/#teaching`
fragment lands beside the retained feature and its link to the full Teaching page.
`data-nav-home` ensures the non-tabbed feature highlights Home, not Research.

The 1.75-second opening, selected research, timeline, talks, complete bibliography,
CV, gallery and source image files are unchanged by this page split. Preview files
are external review aids, not public-site source files.

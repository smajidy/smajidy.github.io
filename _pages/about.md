---
permalink: /
title: ""
seo_title: "Shayan Majidy"
excerpt: "Quantum computing theorist connecting quantum error correction, algorithms and architectures, and quantum dynamics and thermodynamics for scientific discovery."
redirect_from:
  - /about/
  - /about.html
---

<header class="profile">{% include responsive-image.html id="profile" alt="Shayan Majidy" class="profile-photo" width=128 height=128 sizes="(max-width: 640px) 96px, 128px" loading="eager" fetchpriority="high" %}
<div class="profile-copy">
<h1 data-intro-title="">Shayan Majidy</h1>
<p class="profile-alias">I also go by Shay.</p>
<p class="profile-email"><a href="mailto:smajidy@fas.harvard.edu">smajidy@fas.harvard.edu</a></p></div>
</header>
<div class="introduction">
<p>I am a quantum computing theorist working towards reliable quantum computers for scientific discovery. My research connects quantum error correction, the joint design of quantum algorithms and architectures, and quantum dynamics and thermodynamics—from understanding how quantum information behaves in physical systems to protecting it and putting it to use.</p>
<p>I'm a <a href="https://banting.fellowships-bourses.gc.ca/en/home-accueil.html">Banting Postdoctoral Fellow</a> at Harvard University, working with Mikhail D. Lukin and Michael Gullans, and the lead author of <a href="https://www.cambridge.org/highereducation/books/building-quantum-computers/6A73C509D3E0F5F0A566A11F6A566A90#overview"><em>Building Quantum Computers</em></a> (Cambridge University Press).</p>
</div>
<section aria-labelledby="research-heading" class="major-section" id="research" tabindex="-1">
<h2 class="section-heading" id="research-heading">Research</h2>
<p class="section-links" id="publications"><a href="{{ '/publications/' | relative_url }}">Browse publications</a><span aria-hidden="true">·</span><a href="https://scholar.google.ca/citations?user=rLyCWhoAAAAJ&amp;hl=en">Google Scholar</a></p>
{% comment %}
Research-link presentation: keep each selected-work link paired only with its
publication status/venue and year. TODO: Reconsider explanations and recorded
talks in a clearer, paper-specific format in a future revision, rather than
placing them beside these research-area links. The existing resources metadata
is retained in _data/publications.yml. Selected recent talks now follows the
career/education timeline in Background & CV, before Selected honours.
Research themes are equally prominent, in the approved order below. The dynamics
and thermodynamics theme is part of the coherent programme, not an archive.
{% endcomment %}
<div class="research-topic" id="quantum-error-correction">
<h3>Quantum error correction</h3>
<p>What is the minimum cost of protecting and manipulating logical quantum information? I work broadly on reducing the overhead of quantum error correction, from the design of codes and logical operations to syndrome extraction and fault-tolerant architectures. One direction is a gate-first approach to code design: rather than choosing a code and accepting the logical operations it supports, I design codes around the computations they must perform. Our <em>phantom codes</em> illustrate one extreme, implementing in-block entangling gates through classically tracked relabellings, without applying physical gates.</p>
<div class="research-links" aria-label="Selected quantum error correction work">
{% include research-paper-link.html id="phantom-codes" label="Phantom codes" status=true %}
</div>
{% comment %}
TODO: Add further representative QEC results here when ready to feature.
Homepage highlights are curated separately from the complete Publications list.
{% endcomment %}
</div>
<div class="research-topic" id="quantum-algorithms-and-architectures">
<span class="research-anchor" id="quantum-algorithms" aria-hidden="true"></span><span class="research-anchor" id="quantum-architectures" aria-hidden="true"></span>
<h3>Quantum algorithms and architectures</h3>
<p>How should algorithms, error correction, and hardware be designed together? I study quantum computation as a co-design problem, developing algorithms and fault-tolerant protocols around the capabilities and constraints of the hardware that will run them. This perspective grew from my role as lead author of <em>Building Quantum Computers</em> and shapes my work on quantum simulation, cooling, and state preparation. For example, I helped design a teleportation-based neutral-atom architecture that exploits non-local connectivity and parallel control to remove entropy while processing logical information.</p>
<div class="research-links" aria-label="Selected quantum algorithms and architectures work">
<span class="evidence-link"><a href="https://www.cambridge.org/highereducation/books/building-quantum-computers/6A73C509D3E0F5F0A566A11F6A566A90#overview"><em>Building Quantum Computers</em></a> <span class="link-context">(Cambridge University Press, 2024)</span></span>
{% include research-paper-link.html id="neutral-atom-architecture" label="Fault-tolerant neutral-atom architecture" status=true %}
</div>
{% comment %}
TODO: Add selected quantum-algorithms work here when ready to feature.
Keep the complete Publications list unchanged when curating homepage highlights.
The empty spans above preserve existing links to the formerly separate themes.
{% endcomment %}
</div>
<div class="research-topic" id="quantum-dynamics-and-thermodynamics">
<span class="research-anchor" id="earlier-research" aria-hidden="true"></span>
<h3>Quantum dynamics and thermodynamics</h3>
<p>How do microscopic dynamics govern quantum information loss? I investigate the mechanisms governing entropy production, seeking physical structures that suppress or amplify decoherence. One important setting is dynamics constrained by conservation laws, where symmetries can fundamentally reshape thermalization. During my PhD, I helped establish noncommuting-charge physics as a distinct subfield, showing that noncommuting conserved quantities can enhance entanglement, generate critical phases in monitored quantum circuits, and remove dynamical structures that inhibit thermalization.</p>
<div class="research-links" aria-label="Selected quantum dynamics and thermodynamics work">
{% include research-paper-link.html id="nonstationary-dynamics" label="Effect on thermalization" status=true %}
{% include research-paper-link.html id="noncommuting-charges-perspective" label="Perspective" status=true %}
</div>
{% comment %}
Keep only the Nature Communications paper and Nature Reviews Physics Perspective
in this selected-work group. The other papers remain in the full bibliography.
The earlier-research fragment is retained solely for old inbound links.
{% endcomment %}
</div>



</section><section aria-labelledby="textbook-outreach-heading" class="major-section textbook-outreach-section" id="textbook-and-outreach" data-nav-home tabindex="-1">
<h2 class="section-heading" id="textbook-outreach-heading">Textbook &amp; outreach</h2>
{% comment %}
The full textbook feature and Unentangled film intentionally remain on Home.
The independent course, mentoring and educational-development record now lives
at /teaching/. Keep the book's complete description, adoption context and links here.
The #teaching fragment remains a legacy anchor beside a link to the new page.
{% endcomment %}
<span class="research-anchor" id="teaching" aria-hidden="true"></span>
<div class="book-feature" id="textbook">
<div class="book-copy">
<h3 class="book-section-heading">Textbook</h3>
<h4><a href="https://www.cambridge.org/highereducation/books/building-quantum-computers/6A73C509D3E0F5F0A566A11F6A566A90#overview">Building Quantum Computers:<br class="desktop-break"/> A Practical Introduction</a></h4>
<p class="book-authors"><strong>S. Majidy</strong>, C. Wilson, and R. Laflamme</p>
<p class="book-venue">Cambridge University Press (2024)</p>
<p class="book-context">Written for advanced undergraduates and beginning graduate students, the book compares physical implementations through shared concepts and notation. Writing it developed the cross-platform perspective that informs my work on hardware-aware architectures and scientific applications.</p>
{% comment %}
International teaching use is supported by course reading lists, including:
https://insti.physics.sunysb.edu/~twei/Courses/Fall2025/PHY568/
https://physics.carleton.ca/sites/default/files/content-files/202530_14.pdf
These establish teaching use, not a worldwide consensus that this is "the standard"
textbook. Use the narrower public wording below unless stronger adoption evidence
is available. This source note is not rendered in the public site.
{% endcomment %}
<p class="book-context">The book is used in university teaching internationally as an introduction to quantum computing hardware.</p>
<p class="book-resources"><a href="https://www.cambridge.org/highereducation/books/building-quantum-computers/6A73C509D3E0F5F0A566A11F6A566A90#contents">Contents</a> <span aria-hidden="true">·</span> <a href="https://www.cambridge.org/highereducation/books/building-quantum-computers/6A73C509D3E0F5F0A566A11F6A566A90/resources/">Teaching resources</a></p></div>
<a aria-label="Building Quantum Computers at Cambridge University Press" class="book-image-link" href="https://www.cambridge.org/highereducation/books/building-quantum-computers/6A73C509D3E0F5F0A566A11F6A566A90#overview">{% include responsive-image.html id="cover" alt="Building Quantum Computers book cover" sizes="(max-width: 359px) 76px, (max-width: 640px) 88px, 240px" %}</a>
</div>
<div class="teaching-topic outreach-topic" id="outreach">
<h3>Outreach</h3>
<p>Through Unentangled, my non-profit, I worked to broaden access to science by bringing current research into high-school classrooms. The programme was built on the idea that more people should benefit not only from scientific knowledge, but from the tools science provides for reasoning, questioning, and solving problems. At its peak, Unentangled served more than 1,000 students annually with a team of 10 volunteers.</p>
<figure class="outreach-film">
<div class="outreach-video">
<iframe src="https://player.vimeo.com/video/316304696?dnt=1&amp;autoplay=0" width="960" height="540" title="Unentangled — One Community documentary by Ward 1 Studios" loading="lazy" allow="fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</figure>
</div>
<p class="teaching-page-link"><a href="{{ '/teaching/' | relative_url }}">More on teaching and mentoring <span aria-hidden="true">&rarr;</span></a></p>
</section><section aria-labelledby="background-heading" class="major-section" id="background" tabindex="-1">
<h2 class="section-heading" id="background-heading">Background &amp; CV</h2>
<p class="cv-access"><a href="{{ '/CV.pdf' | relative_url }}">Curriculum vitae (PDF)</a></p>
<ol class="positions">
<li class="position">
<div class="position-date">2024–2026</div>
<div>
<h3>Postdoctoral Fellow, Harvard</h3>
<dl class="position-details">
<div class="detail">
<dt>Advisers:</dt>
<dd>Mikhail D. Lukin<br/>Michael Gullans</dd>
</div>
<div class="detail">
<dt>Funding:</dt>
<dd><a href="https://banting.fellowships-bourses.gc.ca/en/home-accueil.html">Banting Fellowship</a>, 2024–2026</dd>
</div>
</dl>
</div>
</li>
<li class="position">
<div class="position-date">2019–2024</div>
<div>
<h3>Ph.D. in Physics, University of Waterloo</h3>
<dl class="position-details">
<div class="detail">
<dt>Advisers:</dt>
<dd>Raymond Laflamme<br/>Nicole Yunger Halpern</dd>
</div>
<div class="detail">
<dt>Funding:</dt>
<dd><a href="https://vanier.gc.ca/en/home-accueil.html">Vanier Scholarship</a>, 2021–2024</dd>
</div>
</dl>
</div>
</li>
<li class="position">
<div class="position-date">2018–2019</div>
<div>
<h3>M.Sc. in Physics, University of Waterloo</h3>
<dl class="position-details">
<div class="detail">
<dt>Advisers:</dt>
<dd>Raymond Laflamme</dd>
</div>
</dl>
</div>
</li>
<li class="position">
<div class="position-date">2011–2015</div>
<div>
<h3>B.Sc. in Theoretical Physics, University of Guelph</h3>
</div>
</li>
</ol>
<section class="selected-talks" id="selected-talks" aria-labelledby="talks-heading">
<h3 id="talks-heading">Selected recent talks</h3>
<ol class="talk-list">
{% comment %}
Princeton: title and 22 October date are in the bundled CV, p. 2. The official
PQTC 2026 page lists Shayan among the invited speakers; the posted agenda also
places the talk on 22 October. Remove "(upcoming)" after the presentation.
Source: https://quantum.princeton.edu/pqtc2026 (checked 14 September 2026).
{% endcomment %}
<li class="talk">
<time class="talk-date" datetime="2026-10-22">22 Oct 2026</time>
<div class="talk-copy"><h4>Achieving the limits of automorphism gates</h4><p class="talk-meta"><a href="https://quantum.princeton.edu/pqtc2026">PQTC 2026</a>, Princeton <span aria-hidden="true">·</span> Invited talk</p></div>
</li>
<li class="talk">
<time class="talk-date" datetime="2026-09-02">2 Sep 2026</time>
<div class="talk-copy"><h4>Entangling logical qubits without physical operations</h4><p class="talk-meta"><a href="https://tqc-conference.org/2026/schedule/">TQC 2026</a>, Sherbrooke <span aria-hidden="true">·</span> Contributed talk</p></div>
</li>
<li class="talk">
<time class="talk-date" datetime="2026-06-11">11 Jun 2026</time>
<div class="talk-copy"><h4>Entangling logical qubits without physical operations</h4><p class="talk-meta"><a href="https://qec-conference.org/2026/accepted-papers/">QEC 2026</a>, Santa Barbara <span aria-hidden="true">·</span> Contributed talk</p></div>
</li>
<li class="talk">
<time class="talk-date" datetime="2025-10-03">3 Oct 2025</time>
<div class="talk-copy"><h4>Architectural mechanisms of a universal fault-tolerant quantum computer</h4><p class="talk-meta"><a href="https://www.physics.utoronto.ca/research/quantum-optics/cqiqc-seminars/cqiqc-seminar-on-3-october-2025/">CQIQC</a>, University of Toronto <span aria-hidden="true">·</span> Invited seminar <span aria-hidden="true">·</span> <a href="https://www.youtube.com/watch?v=zCgcY0ejYmo" aria-label="Watch the CQIQC architecture seminar recording">Watch talk</a></p></div>
</li>
<li class="talk">
<time class="talk-date" datetime="2024-01-16">16 Jan 2024</time>
<div class="talk-copy"><h4>Noncommuting charges can increase entanglement and induce critical dynamics</h4><p class="talk-meta"><a href="https://quantuminstitute.yale.edu/event/yqi-talk-shayan-majidy-waterloo-university">YQI Seminar</a>, Yale <span aria-hidden="true">·</span> Invited seminar</p></div>
</li>

</ol>
<p class="talks-more"><a href="{{ '/CV.pdf' | relative_url }}#page=2">More talks in my CV</a></p>
</section>

<section class="selected-honours" aria-labelledby="honours-heading" id="selected-honours">
<h3 id="honours-heading">Selected honours</h3>
{% comment %}
Each honour uses the same two-line structure: official linked award name first
in dark type, then award type + awarding body beneath it in muted type. These are descriptions, not invented award titles.
IQC's award is for graduate research, rather than a doctoral-only competition:
https://uwaterloo.ca/institute-for-quantum-computing/graduate-studies/scholarships-and-awards
Award years are retained; funding periods remain in the career timeline.
{% endcomment %}
<ul class="honours-list">
<li><span class="honour-date">2025</span><div class="honour-copy"><a class="honour-name" href="https://uwaterloo.ca/institute-for-quantum-computing/news/institute-quantum-computing-grad-receives-prestigious">W.B. Pearson Medal</a><span class="honour-summary">Doctoral research award, Faculty of Science, University of Waterloo</span></div></li>
<li><span class="honour-date">2024</span><div class="honour-copy"><a class="honour-name" href="https://banting.fellowships-bourses.gc.ca/en/home-accueil.html">Banting Postdoctoral Fellowship</a><span class="honour-summary">National postdoctoral fellowship, Government of Canada</span></div></li>
<li><span class="honour-date">2024</span><div class="honour-copy"><a class="honour-name" href="https://annualreport.2024.perimeterinstitute.ca/training/phd-students/">John Brodie Memorial Award</a><span class="honour-summary">Doctoral research award, Perimeter Institute</span></div></li>
<li><span class="honour-date">2022</span><div class="honour-copy"><a class="honour-name" href="https://uwaterloo.ca/institute-for-quantum-computing/news/iqc-achievement-award-recipient-shayan-majidy-shares">IQC Achievement Award</a><span class="honour-summary">Graduate research award, Institute for Quantum Computing</span></div></li>
<li><span class="honour-date">2021</span><div class="honour-copy"><a class="honour-name" href="https://vanier.gc.ca/en/home-accueil.html">Vanier Canada Graduate Scholarship</a><span class="honour-summary">National doctoral scholarship, Government of Canada</span></div></li>
</ul>
</section>
</section>

---
permalink: /publications/
title: "Publications"
excerpt: "Research papers and preprints by Shayan Majidy in quantum error correction, algorithms, architectures and quantum thermodynamics."
---

<section class="publications-section publication-page" id="publication-list">
<div class="publications-intro"><p>Research papers and preprints. <a href="https://scholar.google.ca/citations?user=rLyCWhoAAAAJ&amp;hl=en">Google Scholar</a> <span aria-hidden="true">·</span> <a href="{{ '/#research' | relative_url }}">Research overview</a></p></div>
{% comment %}
Keep the established descending year/order sort, but render one continuous list.
Year headings and inter-year gaps are intentionally absent. Legacy year fragments
remain zero-height anchors inside the first paper of each year.
{% endcomment %}
{% assign year_groups = site.data.publications | group_by: 'year' | sort: 'name' | reverse %}
<ol class="publication-list continuous-publications" aria-label="Research papers and preprints, newest first">
{% for group in year_groups %}
{% assign papers = group.items | sort: 'order' | reverse %}
{% for paper in papers %}
{% assign year_anchor = nil %}{% if forloop.first %}{% assign year_anchor = group.name %}{% endif %}
{% include publication-entry.html paper=paper year_anchor=year_anchor %}
{% endfor %}
{% endfor %}
</ol>
<div class="publication-group textbook-citation" id="book-publication">
<h2 class="group-label">Textbook</h2>
<p class="textbook-title"><a href="https://www.cambridge.org/highereducation/books/building-quantum-computers/6A73C509D3E0F5F0A566A11F6A566A90#overview">Building Quantum Computers: A Practical Introduction</a></p>
<p class="publication-authors"><strong>S. Majidy</strong>, C. Wilson, and R. Laflamme</p>
<p class="publication-venue">Cambridge University Press (2024)</p>
</div>
</section>

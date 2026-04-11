---
permalink: /
title: ""
excerpt: "About Me"
author_profile: false
navbar: false
redirect_from: 
  - /about/
  - /about.html
---

<div style="display: flex; align-items: flex-start; gap: 24px; margin-bottom: 1.5em;">
  <img src="/images/profile.png" alt="Shayan Majidy" style="width: 140px; border-radius: 50%;" />
  <div>
    <h1 style="margin: 0 0 0.15em 0; font-size: 1.8em;">Shayan (Shay) Majidy</h1>
    <p style="margin: 0 0 0.4em 0; color: #666; font-style: italic;">shah-YAHN mah-JEE-dee</p>
    <p style="margin: 0; font-size: 0.95em;">
      <a href="mailto:smajidy@fas.harvard.edu">email</a> /
      <a href="https://arxiv.org/search/?query=shayan+majidy&searchtype=all&abstracts=show&order=-announced_date_first&size=50">arxiv</a> /
      <a href="https://scholar.google.ca/citations?user=rLyCWhoAAAAJ&hl=en">google scholar</a> /
      <a href="/CV.pdf">cv</a>
    </p>
  </div>
</div>

I'm a [Banting Postdoctoral Fellow](https://banting.fellowships-bourses.gc.ca/en/home-accueil.html) at Harvard University, working with Misha Lukin and Michael Gullans. I'm interested in quantum error correction and fault-tolerant applications, thermalization and dynamics of quantum many-body systems, and the intersection of AI and quantum computing. I completed my PhD at the University of Waterloo as a [Vanier Scholar](https://vanier.gc.ca/en/home-accueil.html), supervised by Raymond Laflamme and Nicole Yunger Halpern.

During my PhD, I co-wrote the textbook [Building Quantum Computers](https://www.amazon.com/Building-Quantum-Computers-Practical-Introduction/dp/1009417010) as lead author, published by Cambridge University Press. My PhD work was recognized with top honours from the Science department at Waterloo ([WB Pearson Medal](https://uwaterloo.ca/current-graduate-students/catalogs/graduate-funding-and-awards-database/wb-pearson-medal)), the Institute for Quantum Computing ([IQC Achievement Award](https://uwaterloo.ca/current-graduate-students/catalogs/graduate-funding-and-awards-database/iqc-achievement-award)), and the Perimeter Institute ([John Brodie Memorial Award](https://annualreport.2024.perimeterinstitute.ca/training/phd-students/#:~:text=PhD%20students%20Shayan%20Majidy%20and%20Shengqi%20Sang%20awarded%20Brodie%20Memorial%20Prize)).

Research interests
======

*Quantum error correction*—Most efforts to reduce error-correction overhead focus on maximizing how many logical qubits you can store — but a qubit you can store and not operate on is not very useful. My recent work starts from the other end: fix the gates you need, then find the best codes that support them. This led to phantom codes, which can implement any CNOT circuit in-block with zero overhead and perfect fidelity.

*Fault-tolerant quantum architectures*—Algorithms, error-correcting codes, and hardware must be co-designed, as choices at one level shape what is achievable at the others. My work develops fault-tolerant architectures—efficiently mapping applications to hardware and designing schemes to achieve universality and reduce the overhead of logical gates—with a recent focus on neutral-atom platforms.

*AI and quantum computing*—I'm interested in both directions of the AI–quantum interface: using machine learning to discover error-correcting codes with and to decode syndromes in real time, and designing elementary machine learning primitives that run natively on quantum hardware to understand where quantum resources offer a genuine computational advantage for learning tasks.

*Quantum thermodynamics*—A standard assumption in physics is that conserved quantities commute, yet charges need not — a fact central to quantum theory. During my PhD, I helped establish noncommuting-charge physics as a distinct subfield, showing that noncommuting charges can increase entanglement, remove non-stationary dynamics in many-body systems, and induce critical phases in monitored quantum circuits. I co-authored a Perspective on this emerging field in *Nature Reviews Physics*.

Education & academic positions
======

<table class="cv-table">
  <tr>
    <td>2024–2027</td>
    <td>
      <a href="https://banting.fellowships-bourses.gc.ca/en/home-accueil.html">Banting Postdoctoral Fellow</a>, Department of Physics, Harvard University<br>
      <span style="display: inline-table;"><span style="display: table-cell; white-space: nowrap;">Faculty Advisors:&ensp;</span><span style="display: table-cell;">Misha Lukin, Joshua and Beth Friedman University Professor<br>Michael Gullans, NIST Physicist &amp; QuICS Fellow</span></span>
    </td>
  </tr>
  <tr>
    <td>2019–2024</td>
    <td>
      Ph.D. in Physics, University of Waterloo<br>
      <table class="cv-table" style="margin: 0;"><tr><td style="white-space: nowrap; vertical-align: top; padding: 0 0.4em 0 0;">Faculty Advisors:</td><td style="vertical-align: top; padding: 0;">Raymond Laflamme, late Mike and Ophelia Lazaridis &#8220;John von Neumann&#8221; Chair in Quantum Information<br>Nicole Yunger Halpern, NIST Physicist &amp; QuICS Fellow</td></tr><tr><td style="white-space: nowrap; vertical-align: top; padding: 0 0.4em 0 0;">Funding:</td><td style="vertical-align: top; padding: 0;"><a href="https://vanier.gc.ca/en/home-accueil.html">Vanier Scholarship</a>, 2021–2024</td></tr></table>
    </td>
  </tr>
  <tr>
    <td>2018–2019</td>
    <td>
      M.Sc. in Physics, University of Waterloo<br>
      <span style="display: inline-table;"><span style="display: table-cell; white-space: nowrap;">Faculty Advisors:&ensp;</span><span style="display: table-cell;">Raymond Laflamme, late Mike and Ophelia Lazaridis &#8220;John von Neumann&#8221; Chair in Quantum Information</span></span>
    </td>
  </tr>
  <tr>
    <td>2011–2015</td>
    <td>
      B.Sc. in Theoretical Physics, University of Guelph
    </td>
  </tr>
</table>

Selected publications
======
See [Google Scholar](https://scholar.google.ca/citations?user=rLyCWhoAAAAJ&hl=en) for a full list including preprints.

**Textbook**

<img src="/images/Cover.png" alt="Building Quantum Computers" style="float:right; width:28%; padding-left: 12px; padding-bottom:8px" />
**S. Majidy**, C. Wilson, and R. Laflamme,
_Building Quantum Computers: A Practical Introduction._
[Cambridge University Press](https://www.cambridge.org/highereducation/books/building-quantum-computers/6A73C509D3E0F5F0A566A11F6A566A90#overview) (2024).

**Journal articles**

1. D. Bluvstein, A. Geim, ..., **S. Majidy**, ..., and M.D. Lukin, _A fault-tolerant neutral-atom architecture for universal quantum computation._ [Nature 649, 39–46 (2026).](https://www.nature.com/articles/s41586-025-09848-5)
1. **S. Majidy**, D. Hangleiter, and M. Gullans, _Scalable and fault-tolerant preparation of encoded k-uniform states._ [Phys. Rev. A 112, 042409 (2025).](https://journals.aps.org/pra/abstract/10.1103/cl23-c3jg)
1. **S. Majidy**, _Noncommuting charges can remove non-stationary quantum many-body dynamics._ [Nat. Comm. 15, 8246 (2024).](https://www.nature.com/articles/s41467-024-52588-9)
1. **S. Majidy**, W.F. Braasch Jr., A. Lasek, T. Upadhyaya, A. Kalev, and N. Yunger Halpern, _Noncommuting conserved charges in quantum thermodynamics and beyond._ [Nat. Rev. Phys. 5, 689–698 (2023).](https://www.nature.com/articles/s42254-023-00641-9)
1. **S. Majidy**, U. Agrawal, S. Gopalakrishnan, A. Potter, R. Vasseur, and N. Yunger Halpern, _Critical phase and spin sharpening in SU(2)-symmetric monitored quantum circuits._ [Phys. Rev. B 108, 054307 (2023).](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.108.054307)
1. **S. Majidy**, _A unification of the coding theory and OAQEC perspective on hybrid codes._ [Int. J. Theor. Phys. 62.8: 177 (2023).](https://link.springer.com/article/10.1007/s10773-023-05439-0)
1. **S. Majidy**, A. Lasek, D.A. Huse, and N. Yunger Halpern, _Non-Abelian symmetry can increase entanglement entropy._ [Phys. Rev. B 107, 045102 (2023).](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.045102)
1. N. Yunger Halpern and **S. Majidy**, _How to build Hamiltonians that transport noncommuting charges in quantum thermodynamics._ [npj Quantum Information 8, 10 (2022).](https://www.nature.com/articles/s41534-022-00516-4)
1. **S. Majidy**, J.J. Halliwell, and R. Laflamme, _Detecting violations of macrorealism when the original Leggett-Garg inequalities are satisfied._ [Phys. Rev. A 103, 062212 (2021).](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.103.062212)
1. **S. Majidy**, H. Katiyar, G. Anikeeva, J. Halliwell, and R. Laflamme, _Exploration of an augmented set of Leggett-Garg inequalities using a noninvasive continuous-in-time velocity measurement._ [Phys. Rev. A 100, 042325 (2019).](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.100.042325)

**Preprints**

1. J.M. Koh, A. Gong, ..., M.D. Lukin, and **S. Majidy**, _Entangling logical qubits without physical operations._ [arXiv:2601.20927 (2026).](https://arxiv.org/abs/2601.20927)
1. M. Bilokur, S. Gopalakrishnan, and **S. Majidy**, _Thermodynamic limitations on fault-tolerant quantum computing._ [arXiv:2411.12805 (2024).](https://arxiv.org/abs/2411.12805)
1. **S. Majidy**, _Addressing misconceptions in university physics: A review and experiences from quantum physics educators._ [arXiv:2405.20923 (2025).](https://arxiv.org/abs/2405.20923)

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

I'm a [Banting Postdoctoral Fellow](https://banting.fellowships-bourses.gc.ca/en/home-accueil.html) at Harvard University, working with [Misha Lukin](https://lukin.physics.harvard.edu/) and [Michael Gullans](https://rqs.umd.edu/research/research-groups/gullans-research-group). My work seeks to realize the scientific potential of quantum computing by overcoming two key challenges: scaling quantum processors to larger, more reliable systems, and identifying tasks where quantum devices clearly outperform classical methods.

During my PhD, I co-wrote the textbook [Building Quantum Computers](https://www.amazon.com/Building-Quantum-Computers-Practical-Introduction/dp/1009417010) as lead author, published by Cambridge University Press. My PhD work was recognized with top honours from the Science department at Waterloo ([WB Pearson Medal](https://uwaterloo.ca/current-graduate-students/catalogs/graduate-funding-and-awards-database/wb-pearson-medal)), the Institute for Quantum Computing ([IQC Achievement Award](https://uwaterloo.ca/current-graduate-students/catalogs/graduate-funding-and-awards-database/iqc-achievement-award)), and the Perimeter Institute ([John Brodie Memorial Award](https://annualreport.2024.perimeterinstitute.ca/training/phd-students/#:~:text=PhD%20students%20Shayan%20Majidy%20and%20Shengqi%20Sang%20awarded%20Brodie%20Memorial%20Prize)).

Research interests
======

Quantum computation is not defined at a single level of abstraction. It is carried by noisy physical systems, encoded into logical degrees of freedom via error-correcting codes, and deployed within hardware architectures to address concrete applications. My research works across these layers.

**Quantum error correction.** Quantum computers must run deep circuits despite decoherence, and quantum error correction (QEC) is the only known mechanism for achieving this—but existing approaches impose prohibitive overheads. My research reduces this cost. By adopting a gate-first design perspective—fixing a target set of operations and then identifying which codes realize them with minimal overhead—I introduced phantom codes, a family of codes whose internal structure allows zero-overhead logical entangling gates with perfect fidelity. In noisy simulations, these codes achieve one-to-two-order-of-magnitude improvements in logical fidelity over the surface code on workloads with dense entangling structure.

**Fault-tolerant quantum architectures.** The constraints imposed by algorithms, QEC codes, and hardware must be addressed jointly, since choices at one level shape what is achievable at the others. This perspective informed my design of a neutral-atom fault-tolerant architecture, published in *Nature*, where I was the first-listed theory author. In this scheme, deep circuits are enabled by sustained entropy removal at the physical layer through repeated teleportation, while universality is achieved by integrating multiple logical-layer gate constructions.

**Quantum thermodynamics & noncommuting charges.** A standard assumption in physics is that conserved quantities commute. Yet charges need not commute—a fact central to quantum uncertainty relations. During my PhD, I helped establish noncommuting-charge physics as a distinct subfield, showing that noncommuting charges can increase entanglement entropy, remove non-stationary dynamics in many-body systems, and induce critical phases in monitored quantum circuits. This work culminated in a lead-authored review in *Nature Reviews Physics*. Understanding the microscopic mechanisms governing entropy production and information flow continues to inform my work on error correction and fault tolerance.

Education & academic positions
======

<table class="cv-table">
  <tr>
    <td>2024–2027</td>
    <td>
      <a href="https://banting.fellowships-bourses.gc.ca/en/home-accueil.html"><strong>Banting Postdoctoral Fellow</strong></a>, Department of Physics, Harvard University<br>
      <span style="display: inline-table;"><span style="display: table-cell; white-space: nowrap;">Faculty Advisors:&ensp;</span><span style="display: table-cell;">Misha Lukin, Joshua and Beth Friedman University Professor<br>Michael Gullans, NIST Physicist &amp; QuICS Fellow</span></span>
    </td>
  </tr>
  <tr>
    <td>2019–2024</td>
    <td>
      <strong>Ph.D. in Physics</strong>, University of Waterloo<br>
      <span style="display: inline-table;"><span style="display: table-cell; white-space: nowrap;">Faculty Advisors:&ensp;</span><span style="display: table-cell;">Raymond Laflamme, late Mike and Ophelia Lazaridis &#8220;John von Neumann&#8221; Chair in Quantum Information<br>Nicole Yunger Halpern, NIST Physicist &amp; QuICS Fellow</span></span><br>
      Funding: <a href="https://vanier.gc.ca/en/home-accueil.html">Vanier Scholarship</a>, 2021–2024
    </td>
  </tr>
  <tr>
    <td>2018–2019</td>
    <td>
      <strong>M.Sc. in Physics</strong>, University of Waterloo<br>
      <span style="display: inline-table;"><span style="display: table-cell; white-space: nowrap;">Faculty Advisors:&ensp;</span><span style="display: table-cell;">Raymond Laflamme, late Mike and Ophelia Lazaridis &#8220;John von Neumann&#8221; Chair in Quantum Information</span></span>
    </td>
  </tr>
  <tr>
    <td>2011–2015</td>
    <td>
      <strong>B.Sc. in Theoretical Physics</strong>, University of Guelph
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

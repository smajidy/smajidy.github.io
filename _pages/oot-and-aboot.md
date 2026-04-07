---
permalink: /oot-and-aboot/
title: "Oot and Aboot"
author_profile: true
---

Hover over the photos for context.

<!-- Add the gallery below -->
<div class="gallery">
    <div class="gallery-item">
        <img src="/images/Brodie.jpeg" alt="Image 1">
        <div class="caption">Recieving the John Brodie (May 21, 2024) </div>
    </div>
    <div class="gallery-item">
        <img src="/images/Yale.jpeg" alt="Image 1">
        <div class="caption">YQI Talk, Yale (Jam 16, 2024) </div>
    </div>
    <div class="gallery-item">
        <img src="/images/Quirks.jpeg" alt="Image 3">
        <div class="caption"> I was on CBC Radio's Quirks and Quarks (Dec 30, 2023)</div>
    </div>
    <div class="gallery-item">
        <img src="/images/Princeton.jpeg" alt="Image 3">
        <div class="caption"> From my semester as a visiting student in Sarang's group, Princeton (Sep 14, 2023)</div>
    </div>
    <div class="gallery-item">
        <img src="/images/Dinner.jpeg" alt="Image 3">
        <div class="caption"> Dinner with Raymond Laflamme and John Preskill (Aug 1, 2023)</div>
    </div>
    <div class="gallery-item">
        <img src="/images/RayBDay.jpeg" alt="Image 3">
        <div class="caption"> I had the pleasure of organizing Ray's birthday conference, University of Waterloo (July 17, 2023)</div>
    </div>
    <div class="gallery-item">
        <img src="/images/RQS.jpeg" alt="Image 3">
        <div class="caption"> RQS annual workshop, University of Maryland (June 22, 2023)</div>
    </div>
    <div class="gallery-item">
        <img src="/images/IQl.jpeg" alt="Image 2">
        <div class="caption"> InfoQ Seminar, Institut Quantique (Mar 28, 2023) </div>
    </div>
    <div class="gallery-item">
        <img src="/images/Stanford.jpeg" alt="Image 3">
        <div class="caption"> Visiting Xiaoliang Qi's Group, Stanford (Feb 24, 2023)</div>
    </div>
    <div class="gallery-item">
        <img src="/images/Berkeley.jpeg" alt="Image 3">
        <div class="caption"> After my Redwood seminar, Berkeley (Feb 22, 2023)</div>
    </div>
    <div class="gallery-item">
        <img src="/images/UofT.jpeg" alt="Image 3">
        <div class="caption"> CQIQC seminar, University of Toronto (Feb 3, 2023)</div>
    </div>
    <div class="gallery-item">
        <img src="/images/Telluride.jpeg" alt="Image 3">
        <div class="caption"> Post talk hike, Telluride (July 22, 2022)</div>
    </div>
    <div class="gallery-item">
        <img src="/images/RQS1.jpeg" alt="Image 3">
        <div class="caption"> RQS seminar, University of Maryland (Aug 2, 2022)</div>
    </div>
    <!-- Add more gallery items as needed -->
</div>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(100px, auto);
        gap: 15px;
        align-items: start;
        padding: 20px;
    }
    .gallery-item {
        position: relative;
        display: block;
    }
    .gallery-item img {
        width: 100%;
        height: auto;
        display: block;
    }
    .caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        text-align: center;
        padding: 10px 0;
        font-size: 16px;
        display: none;
    }
    .gallery-item:hover .caption {
        display: block;
    }

    @media (max-width: 600px) {
        .gallery {
            grid-template-columns: 1fr;
        }
    }
</style>

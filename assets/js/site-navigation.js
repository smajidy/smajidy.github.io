/*
 * Current-section navigation. Uses the same navy/underline style as page links.
 * Native anchors, browser history, keyboard focus and the intro stay untouched.
 * No framework, polling, URL changes on scroll, or new animation.
 */
(function () {
  'use strict';
  var root = document.documentElement;
  var nav = document.querySelector('.site-nav');
  var header = document.querySelector('.masthead');
  if (!nav || !header) return;
  var home = nav.querySelector('[data-intro-home]');
  var links = Array.prototype.slice.call(nav.querySelectorAll('a'));
  var sections = [];
  nav.querySelectorAll('[data-nav-section]').forEach(function (link) {
    var target = document.getElementById(link.getAttribute('data-nav-section'));
    if (target) sections.push({ link: link, target: target });
  });
  // Other pages keep their server-rendered current-page marker, even without JS.
  if (!home || !sections.length) return;
  var pending = false;
  var requestedSection = null;
  var nextFrame = window.requestAnimationFrame || function (fn) { return window.setTimeout(fn, 16); };

  function markCurrent(selected) {
    links.forEach(function (link) {
      if (link === selected) {
        var value = link === home ? 'page' : 'location';
        if (link.getAttribute('aria-current') !== value) link.setAttribute('aria-current', value);
      } else if (link.hasAttribute('aria-current')) {
        link.removeAttribute('aria-current');
      }
    });
  }

  function update() {
    pending = false;
    if (!root.classList.contains('page-home')) return;
    var selected = home;
    var headerBottom = header.getBoundingClientRect().bottom;
    // Use the same reading edge as native fragment scrolling: the pinned bar
    // plus each section's existing scroll margin. Allow two pixels for rounding.
    sections.forEach(function (section) {
      if (!section.target.getClientRects().length) return;
      var margin = parseFloat(window.getComputedStyle(section.target).scrollMarginTop) || 0;
      if (section.target.getBoundingClientRect().top <= headerBottom + margin + 2) {
        selected = section.link;
      }
    });
    // A short final section might not reach that edge on a very tall screen.
    var scroller = document.scrollingElement || root;
    var last = sections[sections.length - 1];
    if (scroller.scrollTop > 2 &&
        scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop <= 3 &&
        last.target.getClientRects().length &&
        last.target.getBoundingClientRect().top < window.innerHeight) {
      selected = last.link;
    }
    // Honour explicit jumps even on a screen tall enough to show the whole
    // last part of the page, where both Teaching and Background clamp to bottom.
    if (requestedSection) {
      var target = requestedSection.section.target;
      var gap = parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
      var desired = target.getBoundingClientRect().top + scroller.scrollTop - headerBottom - gap;
      var limit = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
      desired = Math.max(0, Math.min(limit, desired));
      if (Math.abs(scroller.scrollTop - desired) <= 3) {
        selected = requestedSection.section.link;
        requestedSection.reached = true;
      } else if (requestedSection.reached) {
        requestedSection = null;
      }
    }
    markCurrent(selected);
  }

  function schedule() {
    if (pending) return;
    pending = true;
    nextFrame(update);
  }

  function requestSection(id) {
    requestedSection = null;
    sections.forEach(function (section) {
      if (section.target.id === id) requestedSection = { section: section, reached: false };
    });
    schedule();
  }
  function readHash() {
    var id = window.location.hash.slice(1);
    try { id = decodeURIComponent(id); } catch (error) { /* Ignore malformed escapes. */ }
    requestSection(id);
  }
  function releaseRequest() { requestedSection = null; schedule(); }
  nav.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-nav-section]');
    if (!link || event.defaultPrevented || event.button !== 0 ||
        event.ctrlKey || event.metaKey || event.altKey || event.shiftKey ||
        link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    requestSection(link.getAttribute('data-nav-section'));
  });
  // Scrolling is never locked. Input returns priority to the section in view.
  window.addEventListener('wheel', releaseRequest, { passive: true });
  window.addEventListener('touchmove', releaseRequest, { passive: true });
  window.addEventListener('keydown', function (event) {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].indexOf(event.key) !== -1) releaseRequest();
  });
  window.addEventListener('hashchange', readHash);

  // At most one small geometry check per frame; no work is scheduled when idle.
  document.addEventListener('scroll', schedule, { passive: true });
  ['resize', 'load', 'pageshow', 'popstate'].forEach(function (eventName) {
    window.addEventListener(eventName, schedule);
  });
  if (window.ResizeObserver) {
    var observer = new ResizeObserver(schedule);
    observer.observe(header);
    var main = document.getElementById('main');
    if (main) observer.observe(main);
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
  // The standalone preview also refreshes after changing its visible page.
  window.SiteNavigation = { refresh: schedule };
  readHash();
  update();
}());

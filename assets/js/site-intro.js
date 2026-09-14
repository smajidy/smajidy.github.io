/*
 * Shayan Majidy — collapse opening. No library, canvas, video, or font dependency.
 * A 1.75-second opening, with the original movement and easing preserved.
 * Choreography uses a 2250-unit timeline, uniformly compressed into 1750 ms.
 * Timeline: draw (0–390), ripple/settle (390–1200), name (1185–1575),
 * dock (1575–1980), reveal (1920–2250). Change duration to adjust speed only.
 * All drawing stops and temporary DOM/styles are removed at the end.
 */
(function () {
  'use strict';
  var state = window.SiteIntro;
  if (!state) return;
  var root = document.documentElement;
  var motion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  var active = false;
  var frame = null;
  var duration = 1750;
  var timelineDuration = 2250;

  function clamp(n) { return Math.max(0, Math.min(1, n)); }
  function progress(t, a, b) { return clamp((t - a) / (b - a)); }
  function smooth(n) { return n * n * (3 - 2 * n); }
  function out(n) { return 1 - Math.pow(1 - n, 3); }
  function mix(a, b, n) { return a + (b - a) * n; }
  function colour(value) {
    var parts = value.match(/[\d.]+/g);
    return parts ? parts.slice(0, 3).map(Number) : [43, 43, 43];
  }
  function finish() {
    active = false;
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = null;
    state.reset();
  }

  function play() {
    if (active || !state.isHome || !motion || motion.matches ||
        !window.requestAnimationFrame || document.hidden || window.scrollY > 2) {
      if (!active) state.reset();
      return false;
    }
    var target = document.querySelector('[data-intro-title]') ||
      document.querySelector('#main .page__content h1');
    var masthead = document.querySelector('.masthead');
    if (!target || !masthead) { state.reset(); return false; }

    try {
      window.clearTimeout(state.timer);
      try { sessionStorage.setItem(state.key, '1'); } catch (error) { /* optional */ }
      root.classList.add('site-intro-seen', 'site-intro-playing');
      root.classList.remove('site-intro-pending');
      var headingStyle = window.getComputedStyle(target);
      // Match the site's navy heading colour, not the charcoal body text.
      var lineStartColour = colour(headingStyle.color);
      // Read the border before the temporary transparent-border rule is applied.
      root.classList.remove('site-intro-playing');
      var lineEndColour = colour(window.getComputedStyle(masthead).borderBottomColor);
      var lineEndWidth = parseFloat(window.getComputedStyle(masthead).borderBottomWidth) || 1;
      root.classList.add('site-intro-playing');
      root.style.setProperty('--site-intro-lift', '0px');
      var targetRect = target.getBoundingClientRect();
      root.style.removeProperty('--site-intro-lift');
      var width = root.clientWidth;
      var height = window.innerHeight;
      var baseline = height * 0.48;
      var lineWidth = Math.min(340, width * 0.70);
      var peakHeight = Math.min(56, lineWidth * 0.18, height * 0.14);

      var overlay = document.createElement('div');
      overlay.id = 'site-intro';
      overlay.setAttribute('aria-hidden', 'true');
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.setAttribute('focusable', 'false');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('stroke-linecap', 'round');
      svg.appendChild(path);
      overlay.appendChild(svg);

      var name = document.createElement('div');
      name.className = 'site-intro__name';
      var text = document.createElement('span');
      text.className = 'site-intro__text';
      text.textContent = target.textContent;
      // Copy the existing heading, including line breaks on a narrow screen.
      ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight',
        'letterSpacing', 'wordSpacing', 'textAlign', 'textTransform', 'color'].forEach(function (key) {
        name.style[key] = headingStyle[key];
      });
      name.style.width = targetRect.width + 'px';
      name.style.height = targetRect.height + 'px';
      name.style.opacity = '0';
      name.style.backgroundColor = window.getComputedStyle(root).backgroundColor;
      name.appendChild(text);
      overlay.appendChild(name);
      document.body.appendChild(overlay);
      target.classList.add('site-intro-target');

      var range = document.createRange();
      range.selectNodeContents(text);
      var textRect = range.getBoundingClientRect();
      var nameRect = name.getBoundingClientRect();
      var scale = Math.min(1.12, (width - 48) / Math.max(textRect.width, 1));
      var startX = (width - textRect.width * scale) / 2 - (textRect.left - nameRect.left) * scale;
      var startY = baseline - targetRect.height * scale - 18;
      var destinationY = masthead.getBoundingClientRect().bottom - lineEndWidth / 2;
      var start = null;
      var measuredForDock = false;
      active = true;
      state.wanted = false;
      state.timer = window.setTimeout(finish, duration + 350);

      function draw(timestamp) {
        if (!active) return;
        if (motion.matches) { finish(); return; }
        try {
          if (start === null) start = timestamp;
          var elapsed = timestamp - start;
          if (elapsed >= duration) { finish(); return; }
          var t = elapsed * timelineDuration / duration;
          // Remeasure after fonts have had time to arrive, without waiting for them.
          if (t >= 1575 && !measuredForDock) {
            root.style.setProperty('--site-intro-lift', '0px');
            targetRect = target.getBoundingClientRect();
            name.style.width = targetRect.width + 'px';
            name.style.height = targetRect.height + 'px';
            destinationY = masthead.getBoundingClientRect().bottom - lineEndWidth / 2;
            measuredForDock = true;
          }
          var dock = smooth(progress(t, 1575, 1980));
          var reveal = smooth(progress(t, 1920, timelineDuration));
          var label = out(progress(t, 1185, 1575));
          var length = mix(lineWidth * out(progress(t, 0, 390)), width, dock);
          var left = (width - length) / 2;
          var y = mix(baseline, destinationY, dock);
          var amplitude = 0;
          if (t >= 375 && t < 1035) amplitude = peakHeight * Math.sin(Math.PI * progress(t, 375, 1035));
          else if (t >= 1035 && t < 1200) amplitude = -2.6 * Math.sin(Math.PI * progress(t, 1035, 1200));
          var d = '';
          if (amplitude === 0) {
            d = 'M' + left.toFixed(2) + ',' + y.toFixed(2) + 'H' + (left + length).toFixed(2);
          } else {
            for (var i = 0; i <= 180; i++) {
              var u = i / 180;
              var x = 2 * u - 1;
              // Broader taper and an extra oscillation give clearly visible
              // crests on both sides, without changing the tall central peak.
              // The symmetric packet still joins the baseline with flat ends.
              var envelope = Math.exp(-1.2 * x * x) * Math.pow(Math.sin(Math.PI * u), 2);
              var phase = (4.8 - 0.4 * progress(t, 375, 1035)) * Math.PI * x;
              var waveY = y - amplitude * envelope * Math.cos(phase);
              d += (i ? 'L' : 'M') + (left + length * u).toFixed(2) + ',' + waveY.toFixed(2);
            }
          }
          path.setAttribute('d', d);
          path.setAttribute('stroke', 'rgb(' + lineStartColour.map(function (c, i) {
            return Math.round(mix(c, lineEndColour[i], dock));
          }).join(',') + ')');
          path.setAttribute('stroke-width', mix(1.25, lineEndWidth, dock));
          path.style.opacity = out(progress(t, 0, 180));
          name.style.opacity = label;
          name.style.transform = 'translate3d(' + mix(startX, targetRect.left, dock) + 'px,' +
            mix(startY, targetRect.top, dock) + 'px,0) scale(' + mix(scale, 1, dock) + ')';
          text.style.transform = 'translateY(' + ((1 - label) * 110) + '%)';
          root.style.setProperty('--site-intro-reveal', reveal);
          root.style.setProperty('--site-intro-lift', (12 * (1 - reveal)) + 'px');
          frame = window.requestAnimationFrame(draw);
        } catch (error) { finish(); }
      }
      frame = window.requestAnimationFrame(draw);
      return true;
    } catch (error) { finish(); return false; }
  }

  // Ordinary navigation never replays the opening. Home is the deliberate replay.
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-intro-home]');
    if (!link || event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
        link.hasAttribute('download') || (link.target && link.target !== '_self') ||
        !motion || motion.matches) return;
    if (state.isHome && !window.location.hash && window.scrollY <= 2) {
      if (play()) event.preventDefault();
    } else {
      try { sessionStorage.setItem(state.key + '-replay', '1'); } catch (error) { /* optional */ }
    }
  });

  // User intent wins immediately. No focus trap, scroll lock, or required wait.
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (eventName) {
    window.addEventListener(eventName, function () {
      if (active || state.wanted) finish();
    }, { capture: true, passive: true });
  });
  window.addEventListener('resize', function () { if (active) finish(); });
  window.addEventListener('pagehide', finish);
  window.addEventListener('pageshow', function (event) { if (event.persisted) finish(); });
  window.addEventListener('beforeprint', finish);
  document.addEventListener('visibilitychange', function () { if (document.hidden) finish(); });
  if (motion) {
    var motionChanged = function () { if (motion.matches) finish(); };
    if (motion.addEventListener) motion.addEventListener('change', motionChanged);
    else if (motion.addListener) motion.addListener(motionChanged);
  }
  state.replay = play;
  if (state.wanted) play();
}());

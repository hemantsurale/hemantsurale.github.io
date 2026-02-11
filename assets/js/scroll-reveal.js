/**
 * Scroll Reveal — Elegant entrance animations using Intersection Observer.
 * Elements with class "reveal" animate in when they enter the viewport.
 * Automatically applies to key page sections for a polished feel.
 */

(function () {
  'use strict';

  // Auto-tag key sections for reveal animation
  function tagElements() {
    var selectors = [
      '.profile',
      '.post-header',
      '.news',
      '.publications',
      '.projects .card',
      '.social',
      'article > h2',
      '.card.hoverable'
    ];

    var delay = 0;
    selectors.forEach(function (sel) {
      var els = document.querySelectorAll(sel);
      els.forEach(function (el) {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal');
          // Stagger delays for elements of the same type
          if (delay < 3) {
            el.classList.add('reveal-delay-' + (delay + 1));
          }
        }
      });
      delay++;
    });
  }

  // Observe and reveal
  function initReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately
      reveals.forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      tagElements();
      initReveal();
    });
  } else {
    tagElements();
    initReveal();
  }
})();

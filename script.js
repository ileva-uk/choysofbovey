/* Choys of Bovey — small, dependency-free interactions */
(function () {
  "use strict";

  var OPEN_HOUR = 17;   // 5:00 pm
  var CLOSE_HOUR = 21;  // 9:00 pm

  /* ── Live open / closed status ──────────────────── */
  function updateStatus() {
    var el = document.getElementById("status");
    if (!el) return;
    var textEl = el.querySelector(".status__text");
    var now = new Date();
    var h = now.getHours();
    var isOpen = h >= OPEN_HOUR && h < CLOSE_HOUR;

    if (isOpen) {
      var minsLeft = (CLOSE_HOUR - h) * 60 - now.getMinutes();
      el.setAttribute("data-status", "open");
      textEl.textContent = minsLeft <= 60
        ? "Open now · last orders soon"
        : "Open now · kitchen’s on till 9pm";
    } else {
      el.setAttribute("data-status", "closed");
      textEl.textContent = h < OPEN_HOUR
        ? "Opens this evening at 5pm"
        : "Closed now · back tomorrow at 5pm";
    }
  }

  /* ── Highlight today in the week list ───────────── */
  function markToday() {
    var week = document.getElementById("week");
    if (!week) return;
    // getDay(): 0 = Sunday. List order is Mon…Sun.
    var jsDay = new Date().getDay();
    var index = jsDay === 0 ? 6 : jsDay - 1;
    var items = week.children;
    if (items[index]) {
      items[index].classList.add("is-today");
      var time = items[index].querySelector(".week__time");
      if (time) time.textContent = "5:00 – 9:00 pm · today";
    }
  }

  /* ── Sticky-nav shadow on scroll ────────────────── */
  function stickyNav() {
    var nav = document.querySelector(".nav");
    if (!nav) return;
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── Scroll reveal ──────────────────────────────── */
  function reveals() {
    var items = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ── Footer year ────────────────────────────────── */
  function setYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  function init() {
    updateStatus();
    markToday();
    stickyNav();
    reveals();
    setYear();
    // refresh the live status every few minutes
    setInterval(updateStatus, 5 * 60 * 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

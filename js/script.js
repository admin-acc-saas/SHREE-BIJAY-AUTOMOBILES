/* ==========================================================================
   SHREE BIJAY AUTOMOBILES — site behaviour
   Vanilla JS only. No dependencies. Progressive enhancement.
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------ */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
      var label = toggle.querySelector(".nav-toggle__label");
      if (label) label.textContent = open ? "Close menu" : "Open menu";
    }

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      setOpen(!isOpen());
    });

    // Close after choosing a navigation item.
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    // Close when clicking outside the header.
    document.addEventListener("click", function (event) {
      if (!isOpen()) return;
      if (!event.target.closest(".site-header")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Reset state when resizing up to the desktop layout.
    var desktop = window.matchMedia("(min-width: 860px)");
    var onBreakpoint = function (event) {
      if (event.matches) setOpen(false);
    };
    if (desktop.addEventListener) desktop.addEventListener("change", onBreakpoint);
    else if (desktop.addListener) desktop.addListener(onBreakpoint);
  }

  /* ------------------------------------------------------------------
     Mark the current page in the navigation
     ------------------------------------------------------------------ */
  function initActiveLink() {
    var path = window.location.pathname.split("/").pop();
    if (!path) path = "index.html";

    var links = document.querySelectorAll(".site-nav a[href]");
    Array.prototype.forEach.call(links, function (link) {
      var target = link.getAttribute("href").split("#")[0].split("/").pop();
      if (target && target === path) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ------------------------------------------------------------------
     Back-to-top control
     ------------------------------------------------------------------ */
  function initToTop() {
    var button = document.querySelector(".to-top");
    if (!button) return;

    var update = function () {
      button.classList.toggle("is-visible", window.scrollY > 500);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    button.addEventListener("click", function () {
      var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });
  }

  function init() {
    initNav();
    initActiveLink();
    initToTop();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

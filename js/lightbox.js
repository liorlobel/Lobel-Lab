/*
 * Minimal self-contained lightbox for the gallery.
 * No external dependencies. Targets anchors with the .gallery-link class,
 * each wrapping a thumbnail and pointing at the full-size image via href.
 */
(function () {
  "use strict";

  function init() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll("a.gallery-link")
    );
    if (!links.length) return;

    var current = 0;

    // Build the overlay once and reuse it.
    var overlay = document.createElement("div");
    overlay.className = "lb-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<button class="lb-prev" aria-label="Previous">&#10094;</button>' +
      '<figure class="lb-figure">' +
      '<img class="lb-img" alt="">' +
      '<figcaption class="lb-caption"></figcaption>' +
      "</figure>" +
      '<button class="lb-next" aria-label="Next">&#10095;</button>' +
      '<div class="lb-counter"></div>';
    document.body.appendChild(overlay);

    var imgEl = overlay.querySelector(".lb-img");
    var captionEl = overlay.querySelector(".lb-caption");
    var counterEl = overlay.querySelector(".lb-counter");

    function show(index) {
      current = (index + links.length) % links.length;
      var link = links[current];
      imgEl.src = link.getAttribute("href");
      var caption = link.getAttribute("data-caption") || "";
      imgEl.alt = caption;
      captionEl.textContent = caption;
      captionEl.style.display = caption ? "" : "none";
      counterEl.textContent = current + 1 + " / " + links.length;
    }

    function open(index) {
      show(index);
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function close() {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      imgEl.src = "";
    }

    function next() {
      show(current + 1);
    }
    function prev() {
      show(current - 1);
    }

    links.forEach(function (link, i) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        open(i);
      });
    });

    overlay.querySelector(".lb-close").addEventListener("click", close);
    overlay.querySelector(".lb-next").addEventListener("click", next);
    overlay.querySelector(".lb-prev").addEventListener("click", prev);

    // Click on the backdrop (but not the image/buttons) closes.
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.classList.contains("lb-figure")) {
        close();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

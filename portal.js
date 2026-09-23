// Scale each 1280px-wide preview iframe down to fit its card.
(function () {
  var VIEWPORT_WIDTH = 1280;
  var thumbs = document.querySelectorAll(".thumb");

  function fit(thumb) {
    thumb.style.setProperty("--s", thumb.clientWidth / VIEWPORT_WIDTH);
  }

  if ("ResizeObserver" in window) {
    var ro = new ResizeObserver(function (entries) {
      entries.forEach(function (e) { fit(e.target); });
    });
    thumbs.forEach(function (t) { ro.observe(t); });
  } else {
    thumbs.forEach(fit);
    window.addEventListener("resize", function () { thumbs.forEach(fit); });
  }
})();

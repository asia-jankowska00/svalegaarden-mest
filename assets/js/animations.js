var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
// if requestAnimationFrame is not supported, runs the callback 60 times per second

// media query variables
var queryTablet = window.matchMedia(
  "(min-width: 421px) and (max-width: 780px)"
);
var queryMobile = window.matchMedia("(max-width: 420px)");

var elemsToShow = document.querySelectorAll(".show-on-scroll");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  if (queryMobile.matches) {
    return rect.top <= 650;
  } else if (queryTablet.matches) {
    return rect.top <= 600;
  } else {
    return rect.top <= 500;
  }
}

function loop() {
  elemsToShow.forEach(function (elem) {
    if (isElementInViewport(elem)) {
      elem.classList.remove("show-on-scroll");
      elem.classList.add("visible");
    }
  });
  scroll(loop);
}

loop();

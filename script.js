window.addEventListener("scroll", revealText);

function revealText() {
  var header = document.querySelector(".header");
  var position = header.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight / 5) {
    header.classList.add("header-visible");
  } else {
    header.classList.remove("header-visible");
  }
}

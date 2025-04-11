let bars = document.querySelector(".hamburger");
let ul = document.querySelector(".ul");
let navLinks = document.querySelectorAll(".nav-links");
let icon = document.querySelector("#    icon");

bars.onclick = function () {
  if (ul.classList.contains("active")) {
    ul.classList.remove("active");
    icon.classList.remove("fas fa-bars-staggered");
    icon.classList.add("fas fa-times");
  } else {
    ul.classList.add("active");
  }
};

navLinks.forEach((link) => {
  link.onclick = function () {
    ul.classList.remove("active");
  };
});

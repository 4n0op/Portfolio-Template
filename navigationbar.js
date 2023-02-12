const navbar = document.getElementById("navbar");
const burger = navbar.querySelector(".burger");
const links = navbar.querySelectorAll("a");

burger.addEventListener("click", () => {
  navbar.classList.toggle("navbar-collapse");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("navbar-collapse");
  });
});

window.onscroll = function() {
    var fixedBar = document.getElementById("fixed-bar");
    if (window.pageYOffset > 0) {
      fixedBar.style.display = "none";
    } else {
      fixedBar.style.display = "block";
    }
  };
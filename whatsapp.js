let upTop = document.querySelector(".upTop");
let nav = document.querySelector("nav");
let moodToggle = document.querySelector(".dark-light");
let searchToggle = document.querySelector(".search-toggle");
let sidebarOpen = document.querySelector(".sidebarOpen");
let siderbarClose = document.querySelector(".siderbarClose");
let home = document.querySelectorAll(".nav-links li a")[0];
let landing = document.querySelectorAll(".nav-links li a")[1];
let about = document.querySelectorAll(".nav-links li a")[2];
let portfolio = document.querySelectorAll(".nav-links li a")[3];
let skills = document.querySelectorAll(".nav-links li a")[4];
let contact = document.querySelectorAll(".nav-links li a")[5];
let scan = document.querySelector(".whatsAppApplication .container .scan");
let myinformation = document.querySelector(".myinformation");
let myP = document.querySelector(".myinformation .info h2 a");
let icon = document.querySelectorAll(".Business .box i");
home.onclick = function () {
  location.href = "#home";
};
landing.onclick = function () {
  location.href = "#services";
};
about.onclick = function () {
  location.href = "#about";
};
portfolio.onclick = function () {
  location.href = "#portfolio";
};
skills.onclick = function () {
  location.href = "#skills";
};
contact.onclick = function () {
  location.href = "/#contact";
};
let body = document.querySelector("body");
moodToggle.addEventListener("click", () => {
  moodToggle.classList.toggle("active");
  body.classList.toggle("dark");
  scan.classList.toggle("dark");
  icon.forEach((icon) => {
    icon.classList.toggle("dark");
  });
  myinformation.classList.toggle("dark");
  myP.classList.toggle("dark");
});

window.onscroll = function () {
  if (scrollY >= 200) {
    upTop.classList.add("right");
  } else {
    upTop.classList.remove("right");
  }
};
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
siderbarClose.addEventListener("click", () => {
  nav.classList.remove("active");
});

upTop.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
let upTop = document.querySelector(".upTop");
let nav = document.querySelector("nav");
let moodToggle = document.querySelector(".dark-light");
let searchToggle = document.querySelector(".search-toggle");
let sidebarOpen = document.querySelector(".sidebarOpen");
let siderbarClose = document.querySelector(".siderbarClose");
let myinformation = document.querySelector(".myinformation");
let myP = document.querySelector(".myinformation .info h2 a");
let icon = document.querySelectorAll(".Business .box i");

let body = document.querySelector("body");
moodToggle.addEventListener("click", () => {
  moodToggle.classList.toggle("active");
  body.classList.toggle("dark");
  icon.forEach((icon) => {
    icon.classList.toggle("dark")
  })
});

window.onscroll = function() {
  if (scrollY >= 200) {
    upTop.classList.add("right");
  } else {
    upTop.classList.remove("right");
  }
}
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
moodToggle.onclick = function() {
  myinformation.classList.toggle("dark")
  myP.classList.toggle("dark")
}
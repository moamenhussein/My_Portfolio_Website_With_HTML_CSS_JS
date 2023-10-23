let body = document.querySelector("body");
let nav = document.querySelector("nav");
let moodToggle = document.querySelector(".dark-light");
let searchToggle = document.querySelector(".search-toggle");
let sidebarOpen = document.querySelector(".sidebarOpen");
let siderbarClose = document.querySelector(".siderbarClose");
let upBtn = document.querySelector(".top");
let skills = document.querySelector(".skills");
let servises = document.querySelector(".servises");
let boxsServises = document.querySelectorAll(".servises .box");
let sectionExperience = document.querySelector(".servises");
let boxsNum = document.querySelectorAll(".experience .box .num");
let bout = document.querySelector(".bout");
let heading = document.querySelector(".aboutInformation h3");
let allInfo = document.querySelector(".container .aboutInformation p");
let allPAbout = document.querySelectorAll(".aboutMe p");
let education = document.querySelector(".education");
let imggraduate = document.querySelector(".imggraduate");
let allPEducation = document.querySelectorAll(".education p");
let headEducation = document.querySelector(".education h2");
let myinformation = document.querySelector(".myinformation");
let myP = document.querySelector(".myinformation .info h2 a");
let contactme = document.querySelector(".contactme");
let boxcontainer = document.querySelector(
  ".contactme .container .boxcontainer"
);
let boxform = document.querySelector(".contactme .container .boxform");

let icon = document.querySelectorAll(".Business .box i");
let whatsApp = document.querySelector(".whats");
let whatsApplication = document.querySelector(
  ".contactme .container .boxcontainer .boxes .box a .whatsApplicatio"
);
let myWhats = document.querySelector(".mywhats");

let started = false;
let boxsNumArray = Array.from(boxsNum);

moodToggle.addEventListener("click", () => {
  moodToggle.classList.toggle("active");
  body.classList.toggle("dark");
  skills.classList.toggle("dark");
  servises.classList.toggle("dark");
  bout.classList.toggle("dark");
  heading.classList.toggle("dark");
  allInfo.classList.toggle("dark");
  allPAbout.forEach((element) => {
    element.classList.toggle("dark");
  });
  education.classList.toggle("dark");
  imggraduate.classList.toggle("dark");
  allPEducation.forEach((el) => {
    el.classList.toggle("dark");
  });
  headEducation.classList.toggle("dark");
  icon.forEach((icon) => {
    icon.classList.toggle("dark");
  });
  myinformation.classList.toggle("dark");
  myP.classList.toggle("dark");
  contactme.classList.toggle("dark");
  boxcontainer.classList.toggle("dark");
  boxform.classList.toggle("dark");
});

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
siderbarClose.addEventListener("click", () => {
  nav.classList.remove("active");
});

boxsServises.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("done");
  });
});

window.onscroll = function () {
  {
    if (window.scrollY >= sectionExperience.offsetTop + 100) {
      if (started == false) {
        boxsNumArray.forEach((num) => {
          counter(num);
        });
      }
      started = true;
    }
  }
  if (scrollY >= 200) {
    upBtn.classList.add("right");
  } else {
    upBtn.classList.remove("right");
  }
};
function counter(el) {
  let prog = el.dataset.prog;
  let counter = setInterval(() => {
    el.innerHTML++;
    if (el.innerHTML == prog) {
      clearInterval(counter);
    }
  }, 1000 / prog);
}
upBtn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
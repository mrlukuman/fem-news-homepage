const hamburger = document.querySelector(".hamburger");
const navClose = document.querySelector(".nav-close");
const menuList = document.querySelector(".menu-list");
const body = document.querySelector("body");
const modal = document.querySelector("#modal");
const navList = document.querySelector(".nav-list");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navClose.classList.toggle("open");
  navClose.classList.toggle("close");
  modal.classList.toggle("overlay");
  navList.classList.toggle("menu-open");
  nav.classList.toggle("nav");
  body.classList.toggle("overflow-hidden");
});

navClose.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navClose.classList.toggle("open");
  navClose.classList.toggle("close");
  modal.classList.toggle("overlay");
  navList.classList.toggle("menu-open");
  nav.classList.toggle("nav");
  body.classList.toggle("overflow-hidden");
});

if (modal.classList.contains("overlay")) {
  modal.classList.toggle("close");
}

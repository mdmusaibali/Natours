"use strict";
const navButton = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");
const navCheck = document.querySelector(".navigation__checkbox");
navList.addEventListener("click", function (e) {
  if (!e.target.classList.contains("navigation__link")) return;
  e.target.addEventListener("click", function (ev) {
    ev.preventDefault;
  });
  var id = e.target.getAttribute("href");
  console.log(document.querySelector(id));
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  if ((navCheck.checked = true)) navCheck.checked = false;
});

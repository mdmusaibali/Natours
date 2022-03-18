"use strict";
const navButton = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");
const navCheck = document.querySelector(".navigation__checkbox");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
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

popup.addEventListener("click", function (e) {
  if (e.target.parentNode != document.body) return;
  window.location = "http://127.0.0.1:8080/#section__tours";
});

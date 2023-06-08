"use strict";

const modalEl = document.querySelector(".modal");
const moreInfoEl = document.querySelector(".more-info");
const overlayEl = document.querySelector(".overlay");

function ToggleModal() {
  modalEl.classList.toggle("hidden");
  overlayEl.classList.toggle("hidden");
}

moreInfoEl.addEventListener("click", function () {
  ToggleModal();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    ToggleModal();
  }
});

overlayEl.addEventListener("click", function () {
  ToggleModal();
});

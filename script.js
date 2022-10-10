"use strict";

const btns = document.querySelectorAll(".rating_btn");
const submit = document.querySelector(".sub_btn");
const removeCardRating = document.querySelector(".card-rating");
const showModel = document.getElementById("model");
const selectedRating = document.querySelector(".selected-rating");

const removeCard = function () {
  removeCardRating.classList.add("hidden");
};
submit.addEventListener("click", function () {
  removeCard();
  showFeedBack();
});
function showFeedBack() {
  showModel.removeAttribute("hidden");
}

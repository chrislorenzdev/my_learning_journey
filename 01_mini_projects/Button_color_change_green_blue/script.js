"use strict";

const btnColor = document.getElementById("btn-color");
const container = document.getElementById("container");
const wordColor = document.getElementById("wordColor");

btnColor.addEventListener("click", () => {
  btnColor.classList.toggle("btn-color-switch");
  if (container.style.backgroundColor === "rgba(1, 1, 195, 0.7)") {
    container.style.backgroundColor = "rgba(33, 164, 33, 0.776)";
    container.style.transition = ".8s";
    wordColor.textContent = "Blue";
    wordColor.style.color = "rgba(1, 1, 195, 0.7)";
  } else {
    container.style.backgroundColor = "rgba(1, 1, 195, 0.7)";
    container.style.transition = ".8s";
    wordColor.textContent = "Green";
    wordColor.style.color = "rgba(33, 164, 33, 0.776)";
  }
});

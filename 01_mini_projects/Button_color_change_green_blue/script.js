"use strict";

const btnColor = document.getElementById("btn-color");
const container = document.getElementById("container");
const wordColor = document.getElementById("wordColor");

btnColor.addEventListener("click", () => {
  if (container.style.backgroundColor === "rgb(0, 0, 255)") {
    container.style.backgroundColor = "rgb(0, 255, 0)";
    container.style.transition = ".8s";
    wordColor.textContent = "Blue";
    wordColor.style.color = "rgb(0, 123, 255)";
    wordColor.style.letterSpacing = "1.5px";
  } else {
    container.style.backgroundColor = "rgb(0, 0, 255)";
    container.style.transition = ".8s";
    wordColor.textContent = "Green";
    wordColor.style.color = "rgb(0, 255, 0)";
  }
});

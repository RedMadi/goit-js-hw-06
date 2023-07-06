function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const targetElement = document.querySelector("body");
const button = document.querySelector(".change-color");
const spanElement = targetElement.querySelector(".color");

button.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  targetElement.style.backgroundColor = getRandomHexColor();
  spanElement.textContent = getRandomHexColor();
}

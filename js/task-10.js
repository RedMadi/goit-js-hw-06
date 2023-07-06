function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberOfElements = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const targetElement = document.getElementById("boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxArray = [];
  amount = numberOfElements.value;
  let widthDiv = 20;
  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    widthDiv += 10;
    const box = `<div style="background-color: ${randomColor}; height: ${widthDiv}px; width: ${widthDiv}px;"></div>`;

    boxArray.push(box);
  }
  const boxArrayStr = boxArray.join("");
  targetElement.innerHTML = boxArrayStr;
}

function destroyBoxes() {
  targetElement.innerHTML = "";
  numberOfElements.value = "";
}

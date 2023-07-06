let counterValue = document.getElementById("value");
let counter = 0;
const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');

const onPlusClick = () => {
  counter += 1;
  counterValue.textContent = counter;
};
const onMinusClick = () => {
  counter -= 1;
  counterValue.textContent = counter;
};
buttonPlus.addEventListener("click", onPlusClick);
buttonMinus.addEventListener("click", onMinusClick);

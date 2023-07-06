const inputValue = document.getElementById("validation-input");
const requiredLength = Number(inputValue.getAttribute("data-length"));

inputValue.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputValue.classList.remove("valid", "invalid");
  if (requiredLength === event.currentTarget.value.length) {
    inputValue.classList.add("valid");
  } else {
    inputValue.classList.add("invalid");
  }
}

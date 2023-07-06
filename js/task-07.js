const targetElement = document.getElementById("font-size-control");
const textElement = document.getElementById("text");
targetElement.addEventListener("input", onInputEvent);

function onInputEvent() {
  textElement.style.fontSize = targetElement.value + "px";
}

const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
};
const defaultOutput = document.getElementById("name-output").textContent;
refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    refs.output.textContent = defaultOutput;
  } else {
    console.log(event.currentTarget.value);
    refs.output.textContent = event.currentTarget.value;
  }
}

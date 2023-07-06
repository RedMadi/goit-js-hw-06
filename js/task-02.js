const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const targetElement = document.getElementById("ingredients");
const listIngredients = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList.add("item");
  return listElement;
});
targetElement.append(...listIngredients);

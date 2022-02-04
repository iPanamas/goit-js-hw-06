const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientsList = ingredients.forEach((ingredient) => {
  const list = document.createElement("li");
  list.classList.add("item");
  ingredientsRef.append(list);
  list.textContent = ingredient;
});

console.log(ingredientsRef);

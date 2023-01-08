const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");
const veggies = ingredients.map((el) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = el;
  return item;
})
list.append(...veggies);
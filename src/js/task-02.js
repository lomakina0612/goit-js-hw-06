// Задание 2

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.

// const ingredients = [
// "Potatoes",
// "Mushrooms",
// "Garlic",
// "Tomatos",
// "Herbs",
// "Condiments",
// ];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsEl = document.querySelector("#ingredients");
const ingredientsEl = [];

ingredients.forEach((ingredient) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  ingredientsEl.push(ingredientEl);
})

ingredientsEl.forEach((ingredientEl) => {
  listOfIngredientsEl.append(ingredientEl);
})

// =: У другому та третьому завданнях елементи списку потрібно додати
// в DOM за одну операцію.Відтак, робити це під час роботи функціонального
// методу(на кожній окремій ітерації, всередині колбеку) некоректно.
// При цьому уважно читайте т / з: рішення завдань 2 та 3
// не повинні бути аналогічним
// – мають бути застосовані різні підходи та методи.

// Напиши скрипт, который для каждого элемента массива ingredients:

//     Создаст отдельный элемент <li>. Обзательно используй
//метод document.createElement().
//     Добавит название ингредиента как его текстовое содержимое.
//     Добавит элементу класс item.
//     После чего вставит все <li> за одну операцию
//в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liItem = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li;
});

document.querySelector("#ingredients").append(...liItem);

////////////////////вариант- 2
// const ingredientsList = document.querySelector("#ingredients");

// const liItem = ingredients
//   .map((ingredient) => {
//     return `<li class = "item">  ${ingredient}  </li>`;
//   })
//   .join("");

// ingredientsList.insertAdjacentHTML("afterbegin", liItem);
// console.log(ingredientsList);

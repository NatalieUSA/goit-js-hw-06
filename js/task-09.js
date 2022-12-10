// Напиши скрипт, который изменяет цвета фона
// элемента < body > через инлайн стиль при клике
// на button.change - color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector(".change-color").addEventListener("click", (event) => {
  let color = getRandomHexColor();
  document.querySelector(".color").textContent = color;
  document.querySelector("body").style.backgroundColor = color;
});

//------------------
// const changeColorBtn = document.querySelector(".change-color");
// console.log(changeColorBtn);
// const changeColorText = document.querySelector(".color");
// console.log(changeColorText);

// const changeBCGColor = document.querySelector("body");

// changeColorBtn.addEventListener("click", (event) => {
//   let color = getRandomHexColor();
//   changeColorText.textContent = color;
//   changeBCGColor.style.backgroundColor = color;
// });
//--------------------------------
// const changeColorBtn = document.querySelector(".change-color");
// console.log(changeColorBtn);
// const changeColorText = document.querySelector(".color");
// console.log(changeColorText);

// const changeBCGColor = document.querySelector("body");

// console.log(changeColorBtn);
// changeColorBtn.addEventListener("click", onChange);
// function onChange(event) {
//   console.log(event.currentTarget);
//   let color = getRandomHexColor();
//   //event.currentTarget.style.backgroundColor = color;
//   //changeColorText.style.color = color;
//   changeColorText.textContent = color;
//   changeBCGColor.style.backgroundColor = color;
// }

// //changeColorBtn.style.backgroundColor = getRandomHexColor();
// //changeColorText.style.color = getRandomHexColor();

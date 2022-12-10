// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка
//  будет меняться размер текста.

const inputSize = document.querySelector("#font-size-control");
console.log(inputSize);
const text = document.querySelector("#text");
console.log(text);

inputSize.addEventListener(
  "input",
  () => (text.style.fontSize = inputSize.value + "px")
);
// inputSize.addEventListener("input", onMovie);
// function onMovie(event) {
//   console.dir(event.target.value);
//   //   text.style.fontSize = inputSize.value + "px";
//   text.style.fontSize = `${event.target.value}px`;
// }

//=: Уважно визначайте та вказуйте події у завданні 5 - 7
//   (попри те, що у т / з є прямі підказки, помилок із цього приводу чимало).

//Напиши скрипт который, при наборе текста в инпуте
//input#name - input(событие input),
//   подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInput = document.querySelector("#name-input");
console.log(textInput);
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", onText);

function onText(event) {
  textOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    textOutput.textContent = "Anonymous";
  }
}

//style
textOutput.style.color = "deeppink";
textInput.style.color = "deeppink";
// const p = textInput.getAttribute("placeholder");
// console.log(p);
// p.style.color = "white";

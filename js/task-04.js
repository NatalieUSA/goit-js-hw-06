// Счетчик состоит из спана и кнопок, которые, при клике,
//     должны увеличивать и уменьшать его значение на единицу.
//     Создай переменную counterValue в которой будет храниться
//     текущее значение счетчика и инициализируй её значением 0.
//     Добавь слушатели кликов на кнопки, внутри которых увеличивай
//     или уменьшай значение счтетчика.
//     Обновляй интерфейс новым значением переменной counterValue.

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
//console.log(counterValue);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
//console.log(decrementBtn.dataset.action);

const incrementBtn = document.querySelector('button[data-action="increment"]');
//console.log(incrementBtn.dataset.action);

const valueCounter = document.querySelector("#value");
//console.log(valueCounter);

decrementBtn.addEventListener("click", decrementCLick);

function decrementCLick(evt) {
  counterValue.decrement();
  valueCounter.textContent = counterValue.value;
}

incrementBtn.addEventListener("click", incrementCLick);

function incrementCLick(evt) {
  counterValue.increment();
  valueCounter.textContent = counterValue.value;
}
//console.log(incrementBtn);
//console.dir(incrementBtn);

//style
incrementBtn.style.backgroundColor = "purple";
incrementBtn.style.color = "white";
incrementBtn.style.border = "none";
decrementBtn.style.backgroundColor = "deeppink";
decrementBtn.style.color = "white";
decrementBtn.style.border = "none";
valueCounter.style.color = "grey";
valueCounter.style.color = "grey";
valueCounter.style.fontSize = "20px";
valueCounter.style.margin = "20px";

// =: У завданні 6 бордер повинен набувати зеленого кольору,
//     коли кількість введених символів дорівнює значенню
//     атрибуту data - length(а не більше або менше).Тут же завважте,
//     що в скрипті ви маєте звертатися до значення відповідного атрибуту
//     програмним методом, а не просто вказати число 6. Також слідкуйте,
//     аби в інпута не було 2 - х конкуруючих класів(valid та invalid) одночасно.

//Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//проверяет его содержимое на правильное количество введённых символов.
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество символов, то border инпута становится
// зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS - классы valid и
// invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector("#validation-input");

const numberOfSymbol = textInput.getAttribute("data-length");

textInput.addEventListener("blur", onBlur);
function onBlur(event) {
  //const classList = textInput.classList;
  if (Number(event.target.value.length) == numberOfSymbol) {
    textInput.classList.add("valid");
    if (textInput.classList.contains("invalid")) {
      textInput.classList.remove("invalid");
    }
  } else {
    if (textInput.classList.contains("valid")) {
      textInput.classList.remove("valid");
    }
    textInput.classList.add("invalid");
  }
}

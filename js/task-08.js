//     Обработка отправки формы form.login - form должна быть по событию
// submit.
//     При отправке формы страница не должна перезагружаться.
//     Если в форме есть незаполненные поля, выводи alert с
//     предупреждением о том, что все поля должны быть заполнены.
//     Если пользователь заполнил все поля и отправил форму,
//     собери значения полей в обьект, где имя поля будет именем
// свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
//     Выведи обьект с введенными данными в консоль и очисти
//     значения полей формы методом reset.

//         submit
//     alert все поля должны быть заполнены
//     обери значения полей в обьект { имя поля будет именем
//     свойства
//      значение поля - значением свойства
// }
// свойство elements
// Выведи обьект с введенными данными в консоль
//  очисти
//     значения полей формы методом reset.

const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert(
      "МНЕ ПОКАЗАЛОСЬ ИЛИ ТЫ ПРОПУСТИЛ САМОЕ ВАЖНОЕ ПОЛЕ ДЛЯ ЗАПОЛНЕНИЯ? "
    );
  }

  const userDetail = { email: email.value, password: password.value };
  console.log(userDetail);

  event.target.reset();
});

// form.addEventListener("submit", onFillform);
// function onFillform(event) {
//   event.preventDefault();

//   const { email, password } = event.currentTarget.elements;
//   //   const {elements: { email, password }, } = event.currentTarget;
//   //console.log(email.value);
//   if (email.value === "" || password.value === "") {
//     return alert(
//       "МНЕ ПОКАЗАЛОСЬ ИЛИ ТЫ ПРОПУСТИЛ САМОЕ ВАЖНОЕ ПОЛЕ ДЛЯ ЗАПОЛНЕНИЯ? "
//     );
//   }
//   const userDetail = { email: email.value, password: password.value };
//   console.log(userDetail);

//   event.target.reset();
// }

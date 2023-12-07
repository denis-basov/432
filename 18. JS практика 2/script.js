// Работа со строками и переменными
/*
let fName = "Ivan";
let lName = "Ivanov";
let age = 11;
let hobby = "Play tennis";
let city = "Anapa";
let phone = "934-57-67-28";

let output = `
  <div class="user">
    <h2>Имя: ${fName}</h2>
    <h3>Фамииля: ${lName}</h3>
    <ul>
      <li>Возраст: ${age}</li>
      <li>Хобби: ${hobby}</li>
      <li>Город: ${city}</li>
      <li>Тедефон: ${phone}</li>
    </ul>
  </div>
`;
*/

// console.log(output);
// document.write(output);

// Работа с условиями
//1,2
let age = 77;

if (age >= 18) {
  console.log("Добро пожаловать");
} else {
  console.log("Доступ запрещен");
}

//3
// значения, полученные из БД
let loginDB = "admin";
let passwordDB = "123456";

// Получены значения от пользователя и записаны в переменные
let login = "admin";
let password = "123456";

// сравниваем логины
if (login == loginDB) {
  // если логин указан верно, проверяем пароль
  if (password == passwordDB) {
    // если пароль указан верно
    console.log("Добро пожаловать");
  } else {
    // если пароль указан неверно
    console.log("Пароль указан неверно");
  }
} else {
  // если логин указан неверно
  console.log("Логин указан неверно");
}



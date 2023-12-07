// Практическое задание №1 от 5 декабря 2023 года.

// 1. Создайте файл HTML, создайте файл script.js и прикрепите файл js к файлу html.

// 2. Создайте переменные, в которых сохраните имя, фамилию, возраст, хобби, город проживания человека.
let firstName = "Nikia";
let lastName = "KSM";
let age = 0;
let hobby = "Chess";
let city = "Moscow";

// 3. Выведите значения всех переменных в консоль.
//console.log(firstName, lastName, age, hobby, city); // выводим значение переменной в консоль

// 4. Прибавьте к возрасту человека 3 года и выведите измененное значение в консоль.
//console.log(age + 3);

// 5. Отнимите от возраста 5 лет и присвойте это значение в эту же переменную. Выведите значение в консоль.
//age = age - 5;
//console.log(age);

// Практическое задание №2 от 6 декабря 2023 года.

let ava = "JPG/nika2.jpg";
let avaWidth = 300;
let avaHeight = 350;
let zadan = "Значение каждой переменной должно быть в своем теге. </br></br>";
document.write(zadan);
let enter = " ";
document.write(enter);
zadan = "3. Выведите сформированную строку в консоль для проверки.";
let userKSM = `
<div class="user">
<img src="${ava}" alt="${firstName} ${lastName}" width="${avaWidth}" height="${avaHeight}"/>
<h2>
${firstName} ${lastName}
</h2>
<p> Возраст: ${age} года </p>
<p> Хобби: ${hobby} </p>
<p> Город: ${city} </p>
</div>`;
console.log(zadan);
zadan = "4. Выведите сформированную строку в документ. </br>";
document.write(zadan);

console.log(userKSM);
document.write(userKSM);

zadan = `"Работа с условиями </br></br>";
1. Создайте переменную с возрастом, присвойте произвольное значение. </br>
- Переменную возраст берём из первого задания. </br>
2. Проверьте значение переменной на границу в 18 лет. Если 18 и более, одно сообщение в консоль. Если менее, то другое. </br> </br>"
- Производится проверка до нуля, на нуль, от нуля до 18, на 18 и более 18. </br> </br>`;
document.write(zadan);
if (age > 0 && age < 18) {
  zadan = " - Малявка ";
  console.log(age, zadan);
  document.write(age, zadan, "</br>");
} else if (age == 18) {
  zadan = " Почти уже можно всё </br>";
  console.log(age, zadan);
  document.write(age, zadan);
} else if (age > 18) {
  zadan = " - Можно даже замуж </br>";
  console.log(age, zadan);
  document.write(age, zadan);
} else if (age == 0) {
  zadan = " - Ура мы появились на свет божий </br>";
  console.log(age, zadan);
  document.write(age, zadan);
} else if (age < 0) {
  zadan = " - Ещё пока только в проекте </br>";
  console.log(age, zadan);
  document.write(age, zadan, "</br>");
}
zadan = `3. В БД хранятся логин и пароль админа со значениями логин='admin', пароль='123456'. </br>
let loginDB = 'admin';</br>
let passwordDB = '123456';</br>
Получены значения от пользователя и записаны в переменные</br>
let login = 'admin';</br>
let password = '12345';</br>
Цель - проверить совпадают ли логин и пароль с теми, что храняться в БД. </br>
Если логин и пароль указаны верно, то в консоль одно сообщение, если нет, другое.</br> </br>`;
document.write(zadan);
// Задаём переменные
let login1 = "admin";
let password1 = "12345";
let loginBD = "admin";
let passwordBD = "123456";

if (login1 == loginBD && password1 == passwordBD) {
  zadan = "Угадали - ура";
  console.log(zadan);
  document.write(login1, "</br>");
  document.write(password1, "</br>");
  document.write(zadan, "</br>");
} else if (login1 != loginBD) {
  zadan = "Не правильно введён логин";
  console.log(zadan);
  document.write(login1, "</br>");
  document.write(password1, "</br>");
  document.write(zadan, "</br>");
} else if (login1 == loginBD && password1 != passwordBD) {
  zadan = "Плохой пароль";
  console.log(zadan);
  document.write(login1, "</br>");
  document.write(password1, "</br>");
  document.write(zadan, "</br>");
} else {
  zadan = "Бывает";
  console.log(zadan);
  document.write(login1, "</br>");
  document.write(password1, "</br>");
  document.write(zadan, "</br>");
}

// document.write(login, "</br>");
// document.write(password, "</br>");

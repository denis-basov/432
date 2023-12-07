// логинеский опертор И &&
/*
3>1 && 4<9
true
3>10 && 4<9
false
3>1 && 4<1
false
*/

// логинеский опертор ИЛИ ||
/*
4>1 || 5<9
true
4>10 || 5<9
true
4>1 || 50<9
true
4>10 || 50<9
false
*/

/*
let userName = "Ivan11";
//console.log(userName.length); // получение длины строки

// проверка на длину логина. должен быть 5 и более символов
if (userName.length >= 5) {
  console.log("Логин подходит");
} else {
  console.log("Логин слишком короткий");
}
*/

/*
let userName = "Ivan";

// проверка на длину логина. должен быть от 3 до 10 символов
if (userName.length >= 3 && userName.length <= 10) {
  console.log("Логин подходит");
} else {
  console.log("Логин должен быть от 3 до 10 символов");
}
*/

//3
/*
// значения, полученные из БД
let loginDB = "admin";
let passwordDB = "123456";

// Получены значения от пользователя и записаны в переменные
let login = "admin";
let password = "123456";

if (login == loginDB && password == passwordDB) {
  console.log("Добро пожаловать");
} else {
  console.log("Логин или пароль введены неверно");
}
*/

/*
// блочная область видимости
let age = 22;
let result = "";

if (age >= 18) {
  result = "Доступ разрешен";
}

console.log(result);*/

/**
 * тернарный оператор
 */
/*
let age = 18;

if (age >= 18) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

age >= 18 ? console.log("Доступ разрешен") : console.log("Доступ запрещен");
*/

/**
 * работа с деревом документа
 */
/*
//1
// получаю элемент по ID
let head2 = document.querySelector("#head-2");
let message = "Привет, сосед";

// записываю в содержимое тега значение переменной
head2.textContent = message;
*/

/*
//2
// получаем элемент по ID user-1
let user1 = document.querySelector("#user-1");

let avatar = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// формируем элемент и вставляем в документ
user1.innerHTML = `<img src="${avatar}" width="300" class="user-image-1">`;
*/

let avatar = "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let avatarWidth = 300;
let fName = "Иван";
let lName = "Иванов";
let age = 11;
let hobby = "Игра в теннис";
let city = "Анапа";
let phone = "934-57-67-28";
let isAdmin = false;

let userStr = `
    <div class="user">
        <img
        src="${avatar}"
        alt="${fName + " " + lName}"
        width="${avatarWidth}"
        />
        <h2>${fName} ${lName}</h2>
        <p>Возраст: ${age} лет</p>
        <p>Хобби: ${hobby}</p>
        <p>Город проживания: ${city}</p>
        <p class="user-phone">Телефон: <span>${phone}</span></p>
        <p>Админ: ${isAdmin ? "Да" : "Нет"}</p>
    </div>`;

document.write(userStr);

// 1. напишите метод, котрый выводит в консоль строку с именем и фамилией в объекте.
// 1
// let user = {
//   fName: "Иван",
//   lName: "Петров",
//   printUserInfo: function () {
//     console.log(`<p>Имя: ${user.fName}. Фамилия: ${user.lName}</p>`);
//   },
// };
// user.printUserInfo();

//2
// let user = {
//   fName: "Иван",
//   lName: "Петров",

//   getSummary: function () {
//     return `<p>Имя: ${user.fName}. Фамилия: ${user.lName}.</p>`;
//   },
// };
// console.log(user.getSummary());

/**
 * 2.
 *  -напишите метод, который считает возраст пользователя.
    -напишите метод, который формирует заголовок с информацией о пользователе и выводит ее в документ.
 */
//1
/*
let user = {
  fName: "Иван",
  lName: "Петров",
  birthYear: 2001,
  getAge: function () {
    //console.log(2023 - user.birthYear);
    return 2023 - user.birthYear;
  },
  getSummary: function () {
    document.write(`<h1>Имя: ${user.fName}. Фамилия: ${user.lName}. Возраст: ${user.getAge()}</h1>`);
  },
};
user.getSummary();
*/

//2
/*
let Year = new Date().getFullYear();
console.log(Year);

user = {
  fName: "Иван",
  lName: "Петров",
  birthYear: 2001,
  getAge: function (Year) {
    // расчет возраста
    return Year - user.birthYear;
  },
  getSummary: function () {
    return `<h1>Имя: ${user.fName}. Фамилия: ${user.lName}. Возраст: ${user.getAge(Year)}.</h1>`;
  },
};
let age = user.getAge(Year);
console.log(age);
age = user.getSummary();
console.log(age);
document.write(age);
*/

/**
 * 3.
 * 
 * -напишите метод, который формирует из массива categories строку
   -напишите метод, который формирует разметку из всех данных объекта
 * 
 */
/*
let post = {
  title: "Тайные наброски Микеланджело открыты в церкви во Флоренции",
  description: `Тайные наброски Микеланджело открыты в церкви во Флоренции
  Тайные наброски Микеланджело под церковью во Флоренции открыты для публики. Великий художник провел месяцы в камере под капеллами Медичи, чтобы избежать смертного приговора, вынесенного папой Климентом VII.`,
  addDate: "2023-11-01 10:21:00",
  categories: ["КУЛЬТУРА", "ИСТОРИЯ", "ПОЛИТИКА", "СПОРТ"],
  author: "АНДРЕЙ ЯШЛАВСКИЙ",
  views: 441,
  // метод для формирования из массива строки
  makeCatStr: function () {
    let catStr = "";
    post.categories.forEach(function (category) {
      catStr += category + " ";
    });
    return catStr;
  },
  // метод для формирования разметки и вывода в документ
  getSummary: function () {
    let output = `<div class="post">
      <h2>${post.title}</h2>
      <p>${post.description}</p>
      <p>Дата публикации: ${post.addDate}</p>
      <span>Автор: ${post.author}</span>
      <span>Кол-вол просмотров: ${post.views}</span>
      <p>Категории: ${post.makeCatStr()}</p>
      <p>Категории: ${post.categories.join(", ")}</p>
    </div>`;

    document.write(output);
    console.log(output);
    return output;
  },
};
//console.log(post.makeCatStr());
post.getSummary();
*/

/**
 * 4*.
 * -напишите метод, который формирует из массива с хобби строку
   -напишите метод, который формирует из объекта с адресом строку
   -напишите метод, который формирует из всего объекта и выводит в документ
 */
/*
let user = {
  avatar: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  avatarWidth: 300,
  fName: "Иван",
  lName: "Иванов",
  age: 11,
  hobbies: ["Игра в теннис", "Спать", "Есть"],
  address: {
    city: "Анапа",
    street: "Чайковского",
    house: 22,
  },
  phone: "934-57-67-28",
  isAdmin: false,
  // -напишите метод, который формирует из массива с хобби строку
  makeHobbyStr: function () {
    return user.hobbies.join(", ");
  },
  // -напишите метод, который формирует из объекта с адресом строку
  makeAddressSrt: function () {
    return `Город: ${user.address.city}. Улица: ${user.address.street}. Дом: ${user.address.house}.`;
  },
  // -напишите метод, который формирует из всего объекта строку и выводит в документ
  getSummary: function () {
    let str = `
      <div class="user">
        <img src="${user.avatar}" width="${user.avatarWidth}" alt="${user.fName + " " + user.lName}">
        <h2>${user.fName + " " + user.lName}</h2>
        <p>Возраст: ${user.age}</p>
        <p>Телефон: ${user.phone}</p>
        <p>Админ: ${user.isAdmin ? "Да" : "Нет"}</p>
        <p>Хобби: ${user.makeHobbyStr()}</p>
        <p>Адрес: ${user.makeAddressSrt()}</p>
      </div>
    `;
    document.write(str);
  },
};
user.getSummary();
*/

// # foreach

// 1. Выведите все значения массива в документ.
/*
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];

fruits.forEach(function (fruit) {
  document.write(`<p>${fruit}</p>`);
});
*/

// 2*. Выведите все значения массива в верхнем регистре в документ.
/*
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];

fruits.forEach(function (value) {
  document.write(`<p>${value.toUpperCase()}</p>`);
});
*/

/**
 * 3.
 */
/*
let cart = [
  {
    name: "Зубная щетка",
    price: 5,
    qty: 3,
  },
  {
    name: "Зубная паста",
    price: 10,
    qty: 5,
  },
  {
    name: "Зубная нить",
    price: 3,
    qty: 2,
  },
];
// - выведите в консоль все названия товаров
// cart.forEach(function (cartItem) {
//   console.log(cartItem.name);
// });

// -* посчитайте сумму товаров по корзине
// let cartTotal = 0;
// cart.forEach(function (cartItem) {
//   cartTotal += cartItem.price * cartItem.qty;
// });
// console.log(cartTotal);
*/

// sort

//1. отсортируйте массив по алфавиту от a до z
// const animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
// animals.sort();
// console.log(animals);

//2*. отсортируйте массив по увеличению цены товара.
/*
let cart = [
  {
    name: "Зубная щетка",
    price: 5,
  },
  {
    name: "Зубная паста",
    price: 10,
  },
  {
    name: "Зубная нить",
    price: 3,
  },
];
cart.sort(function (a, b) {
  return a.price - b.price;
});
console.log(cart);
*/
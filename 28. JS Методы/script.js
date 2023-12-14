/**
 * свойство - переменная в объекте
 * метод - функция в объекте
 */
/*
// текущий год
let currYear = new Date().getFullYear();

let student = {
  fName: "Иван",
  lName: "Петров",
  birthYear: 1999,
  exams: {
    math: 89,
    eng: 77,
    lit: 69,
  },
  getTotalScore: function () {
    return student.exams.math + student.exams.eng + student.exams.lit;
  },
  getAge: function (currentYear) {
    // расчет возраста
    return currentYear - student.birthYear;
  },
  getSummary: function () {
    return `<p>Имя: ${student.fName}. Фамилия: ${student.lName}. Возраст: ${student.getAge(currYear)}. Итоговый балл по экзаменам: ${student.getTotalScore()}</p>`;
  },
};

// let age = student.getAge(currYear);
// console.log(age);

document.write(student.getSummary());
*/

/*
let car = {
  img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  model: "SkyLine",
  maker: "Nissan",
  madeYear: 2023,
  power: 950,
  weight: 1100,
  // метод для формирования разметки об авто
  getFullInfo: function () {
    return `<div class="car">
        <img src="${car.img}" width="300" alt="${car.maker} ${car.model}">
        <h2>${car.maker} ${car.model}</h2>
        <p>Год производства: <span>${car.madeYear}</span></p>
        <p>Мощность: <span>${car.power} л.с</span></p>
        <p>Масса: <span>${car.weight} кг</span></p>
    </div>`;
  },
};

document.write(car.getFullInfo());
*/

/**
 * foreach - перебор массива
 */
/*
const animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
console.log(animals);

animals.forEach(function (animal, index) {
  console.log(`Элемент: ${animal}. Индекс: ${index}`);
});
*/

/*
let hobbies = ["Играть на флейте", "Есть капусту", "Гулять по воде"];

hobbies.forEach(function (hobby, i) {
  console.log(`Элемент: ${hobby}. Индекс: ${i}`);
});
*/

/**
 * sort - сортировка массивов
 */
//let numbers = [7, 3, 8, 2, 9, 11, 14, 21, 22, 113, 10, 239];
// console.log(numbers.sort());
// по возрастанию
// console.log(
//   numbers.sort(function (num1, num2) {
//     return num1 - num2;
//   })
// );

// по убыванию
// console.log(
//   numbers.sort(function (num1, num2) {
//     return num2 - num1;
//   })
// );

// const animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
// console.log(animals.sort());

// let age = 11;

// age = age + 1;
// age += 1;
// age++;
// age--;

// console.log(age);

// вывести в консоль числа от 0 до 5
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// вывести в консоль числа от 0 до 5
// БЕСКОНЕЧНЫЙ ЦИКЛ!!!!!
// for (let i = 0; i <= 5; i--) {
//   console.log(i);
// }

// вывести числа от 10 до 1
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// вывести числа от 10 до 1 c шагом 2
// for (let i = 10; i >= 1; i -= 2) {
//   console.log(i);
// }

// вывести числа от 0 до 100 c шагом 5
// for (let i = 0; i <= 100; i += 5) {
//   console.log(i);
// }

let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
//console.log(fruits);

// for (let i = 0; i < 6; i++) {
//   console.log(i, fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

let numbers = [6, 3, 5, 7, 9, 1, 4, 7, 3, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(i, numbers[i]);
// }

//console.log(numbers);
// получить сумму элементов массива
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   //console.log(`${sum} + ${numbers[i]} = ${sum + numbers[i]}`);
//   sum = sum + numbers[i];
//   //sum += numbers[i];
// }
// console.log(sum);

const animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

/*
// поиск элемента в массиве (ищем элемент со значением "duck")
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
  // сравниваем каждый элемент массива со строкой
  if (animals[i] === "duck") {
    // если утка в массиве есть, выводим строку в консоль
    console.log("Утка найдена!!!");
    break; // прерываем цикл
  }
}
*/

// сформировать из массива строку
// ant, bison, camel, duck, elephant, cat, dog
/*
let animalsStr = "";
for (let i = 0; i < animals.length; i++) {
  animalsStr += animals[i] + ", ";
}
console.log(animalsStr);*/

/**
 * for...of
 */
// const animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
// for (let animal of animals) {
//   console.log(animal);
// }

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// let numbers = [6, 3, 5, 7, 9, 1, 4, 7, 3, 5];
// let sum = 0;
// for (let num of numbers) {
//   sum += num;
// }
// console.log(sum);

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
//console.log(cart);

// формирование из массива объектов строки и вывод в консоль и документ
for (let cartItem of cart) {
  //console.log(cartItem);
  let str = `<p>Название товара: ${cartItem.name}. Цена товара: ${cartItem.price} руб.</p>`;
  //console.log(str);
  document.write(str);
}

// расчет суммы товаров в корзине и вывод в документ
let sum = 0;
for (let cartItem of cart) {
  sum += cartItem.price; // ЦЕНУ каждого товара суммируем
}
//console.log(sum);
document.write(`<p>Сумма товаров в корзине: ${sum} руб.</p>`);

// получение строки из массива объектов
let str = "";
for (let cartItem of cart) {
  str += `<p>Название товара: ${cartItem.name}. Цена товара: ${cartItem.price} руб.</p>`;
}
console.log(str);
document.write(str);

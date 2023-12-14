/**
 * функции основы
 */

// объявление функции
// function sayHello() {
//   console.log("Hello");
// }

// вызов функции
// sayHello();
// sayHello();
// sayHello();

// function getSum() {
//   console.log(2 + 2);
// }
// getSum();
// getSum();

/**
 * аргументы
 */
//1
// function sayHello(fName) {
//   console.log(`Hello, ${fName}!`);
// }

// sayHello("Svetlana");
// sayHello("Inna");
// sayHello("Ivan");

// fName - параметр, переменная внутри функции
// "Svetlana", "Inna", "Ivan" - аргументы функции

//2
// function getSum(num1, num2) {
//   console.log(num1 + num2);
// }

// getSum(5, 7);
// getSum(78, 14);
// getSum(67, 454);

let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
const animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
let hobbies = ["Играть на флейте", "Есть капусту", "Гулять по воде"];
let numbers = [6, 3, 5, 7, 9, 1, 4, 7, 3, 5];
let numbers2 = [6, 3, 5, 7, 7, 9, 1, 3, 4, 7, 9, 3, 5];

// функция для вывода элементов массива в консоль
// function printArray(arr) {
//   for (let value of arr) {
//     console.log(value);
//   }
// }
// printArray(fruits);
// printArray(animals);
// printArray(hobbies);
// printArray(numbers);

// функция для получения суммы элементов массива
// function getArraySum(arr) {
//   let sum = 0;
//   for (let value of arr) {
//     sum += value;
//   }
//   console.log(sum);
// }
// getArraySum(numbers);
// getArraySum(numbers2);
// getArraySum(hobbies);

/**
 * return
 */
/*
function getSum(num1, num2) {
  let result = num1 + num2;
  return result;
}

let result1 = getSum(7, 1);
console.log(result1);

let result2 = getSum(53, 67);
console.log(result2);

console.log(result1 * result2);
*/

// функция для получения суммы элементов массива
function getArraySum(arr) {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  return sum;
}
let numbersSum = getArraySum(numbers);

// функция для формирования строки с использованием значения суммы
function makeSumStr(sum) {
  console.log(`Сумма элементов массива numbers: ${sum}`);
}
makeSumStr(numbersSum);


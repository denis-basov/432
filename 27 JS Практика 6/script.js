// 1. Сделайте функцию, выводящую на экран ваше имя.
// function printName() {
//   console.log("Иван");
// }
// printName();

// 2. Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
// function printSum() {
//   let sum = 0;
//   for (let i = 1; i <= 100; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }
// printSum();

// 3. Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.
//1
// function makeCube(num) {
//   let cubeNum = num ** 3;
//   console.log(cubeNum);
// }
// makeCube(40);

//2
// function makeCube(base, exponent) {
//   let cubeNum = Math.pow(base, exponent);
//   console.log(cubeNum);
// }
// makeCube(40, 4);

// 4. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.
// function checkNumber(num) {
//   if (num > 0) {
//     console.log("+++");
//   } else if (num < 0) {
//     console.log("---");
//   } else {
//     console.log("НОЛЬ");
//   }
// }
// checkNumber(0);

// 5. Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
//1
// function makeSum(num1, num2, num3) {
//   console.log(num1 + num2 + num3);
// }
// makeSum(4, 7, 2);

//2
// function kub0(fk, fk0, fk1) {
//   console.log(`Первое число, ${fk} второе число ${fk0}, третье число ${fk1}, сумма этих чисел равна ${fk + fk0 + fk1}`);
// }
// kub0(3, 0, -1);

// 6. Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
//1
// function makeCube(num) {
//   return num ** 3;
// }
// let result = makeCube(3);
// console.log(result);

//2
// function kub(fk) {
//   let result = fk * fk * fk;
//   console.log(`Куб числа, ${fk} равен `, result);
//   return result;
// }
// let result = kub(3);

//3
// let num = 3;
// function kub(fk) {
//   return fk * fk * fk;
// }
// let res = kub(num);
// console.log(`Куб числа, ${num} равен ${res}`);

// 7. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.
// function calcSqrt(num) {
//   return Math.sqrt(num);
// }

// let res1 = calcSqrt(3);
// let res2 = calcSqrt(4);
// console.log(res1 + res2);

// 7.1 Написать функцию, которая принимает 2 числа, суммирует их и умножает и возвращает сумму и произведение чисел.
/*
function calcSumProd(num1, num2) {
  let sum = num1 + num2;
  let prod = num1 * num2;

  // return [sum, prod];
  return { sum: sum, prod: prod };
}
let result = calcSumProd(5, 2);
console.log(result.sum);
console.log(result.prod);*/

// 8.Напишите функцию, которая принимает два числа, получите сумму чисел от первого числа до второго и возвратите из функции это значение.
//(2, 9) - сумма чисел от 2 до 9
//(32, 88) - сумма чисел от 32 до 88

//1
// function getSum(min, max) {
//   let sum = 0;
//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }
//   return sum;
// }
// let res1 = getSum(2, 9);
// console.log(res1);

// let res2 = getSum(32, 88);
// console.log(res2);

// 2
/*
function getSum(min, max) {
  let sum = 0;
  for (min; min <= max; min++) {
    sum += min;
  }

  if (sum == 0) {
    return "Первое число должно быть меньше второго";
  } else {
    return sum;
  }
}
let res1 = getSum(2, 9);
console.log(res1);

let res2 = getSum(32, 88);
console.log(res2);

let res3 = getSum(95, 88);
console.log(res3);
*/

// 8.1* Перепишите предыдущее задание так, чтобы функция работала с любыми числами.
// (87, 23) - сумма чисел от 23 до 87
// (76, 2) - сумма чисел от 76 до 2
// (4, 79) - сумма чисел от 4 до 79
/*
function getSum(num1, num2) {
  // если не числа, ничего не складываем
  if (typeof num1 != "number" || typeof num2 != "number") {
    console.log("Функция работает только с числами");
    return false;
  }

  let sum = 0;

  if (num1 < num2) {
    // если num1 < num2
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  } else {
    // если num1 >= num2
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  }

  return sum;
}
let res1 = getSum(2, 4);
console.log(res1);

let res2 = getSum(4, 2);
console.log(res2);

let res3 = getSum(87, 23);
console.log(res3);

let res4 = getSum(4, 79);
console.log(res4);

let res5 = getSum("hello", "winter");
console.log(res5);
*/

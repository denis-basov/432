// 1. С помощью цикла for выведите в консоль числа от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// 2. С помощью цикла for выведите в консоль числа от 11 до 33.
// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// 3. С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

// 3.1 С помощью цикла for выведите в консоль четные числа в промежутке от 3 до 99.
// for (let i = 3; i <= 99; i++) {
//   // если остаток от деления нацело на 2 равен 0, то это четное число
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 4. С помощью цикла for выведите в консоль числа от 100 до 50 c шагом 7.
// for (let i = 100; i >= 50; i -= 7) {
//   console.log(i);
// }

// 5. С помощью цикла for выведите в консоль числа от 300 до 150 c шагом 30.
// for (let i = 300; i >= 150; i -= 30) {
//   console.log(i);
// }

//# Накопление результата в цикле JavaScript
// 1. Найдите сумму целых чисел от 10 до 50.
// let sum = 0;
// for (let i = 10; i <= 50; i++) {
//   sum += i;
//   //sum = sum + i;
// }
// console.log(sum);

// 2. Найдите произведение целых чисел от 1 до 20.
// let prod = 1;
// for (let i = 1; i <= 20; i++) {
//   prod *= i;
//   //prod = prod * i;
// }
// console.log(prod);

// 3*. Найдите сумму четных чисел от 2 до 100.
// let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
//   sum += i;
//   //sum = sum + i;
// }
// console.log(sum);

// 4*. Найдите сумму нечетных чисел от 1 до 99.
// let sum = 0;
// for (let i = 1; i <= 99; i += 2) {
//   sum += i;
//   //sum = sum + i;
// }
// console.log(sum);

// # Работа с массивами в цикле (for-of)
// 1. Дан массив с элементами let chars = ['a', 'b', 'c', 'd', 'e']. С помощью цикла выведите все эти элементы на в консоль.
// let chars = ["a", "b", "c", "d", "e"];
// for (let char of chars) {
//   console.log(char);
// }

// 2. Дан массив с элементами let nums = [1, 2, 3, 4, 5]. С помощью цикла найдите сумму элементов этого массива.
// let nums = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let num of nums) {
//   sum += num;
// }
// console.log(sum);

// 3. Дан массив с элементами let nums = [1, 2, 3, 4, 5]. С помощью цикла найдите произведение элементов этого массива.
// let nums = [1, 2, 3, 4, 5];
// let prod = 1;
// for (let num of nums) {
//   prod *= num;
// }
// console.log(prod);

// # Работа с массивом объектов
// 1. Сформируйте из массива объектов строку и выведите в документ.
/*
let users = [
  {
    firstName: "Иван",
    lastName: "Иванов",
    hobby: ["Гулять"],
  },
  {
    firstName: "Анна",
    lastName: "Иванова",
    hobby: ["Спать", "Плавать"],
  },
  {
    firstName: "Семен",
    lastName: "Петров",
    hobby: ["Гулять", "Есть"],
  },
  {
    firstName: "Анна",
    lastName: "Иванова",
    hobby: ["Спать", "Плавать", "Охотиться"],
  },
];
*/

//1.1
/*
let output = "<div class='users'>";
for (let user of users) {
  let str = `
    <div class="user">
      <h2>${user.firstName} ${user.lastName}</h2>
      <p>${user.hobby.join(", ")}</p>
    </div>
  `;
  output += str;
}
document.write(output + "</div>");
*/

//1.2
/*
let output = "<div class='users'>";
for (let user of users) {
  let hobbyStr = "";
  for (let hobby of user.hobby) {
    hobbyStr += hobby + ", ";
  }
  // обрезаем с конца строки пробел и запятую
  hobbyStr = hobbyStr.substring(0, hobbyStr.length - 2);

  let str = `
    <div class="user">
      <h2>${user.firstName} ${user.lastName}</h2>
      <p>${hobbyStr}</p>
    </div>
  `;
  output += str;
}
document.write(output + "</div>");
*/

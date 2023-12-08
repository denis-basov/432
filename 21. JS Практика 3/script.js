//Тернарный оператор
// 1.
// let rating = 3;

// if (rating >= 3) {
//   console.log("Хороший рейтинг");
// } else {
//   console.log("Рейтинг ужасен");
// }
// rating >= 3 ? console.log("Хороший рейтинг") : console.log("Рейтинг ужасен");

//2
// let userName = "Ivan11";

// if (userName.length >= 5) {
//   console.log("Логин подходит");
// } else {
//   console.log("Логин слишком короткий");
// }
// userName.length >= 5 ? console.log("Логин подходит") : console.log("Логин слишком короткий");

//3
// let massiv1 = ["a", "b", "c", "d"];
// let all = `<p>${massiv1[0]}+${massiv1[1]}+${massiv1[2]}+${massiv1[3]}</p>`;
// console.log(all);
// document.write(all);

//4
// let massiv2 = [1, 2, 3];
// let summ = massiv2[0] + massiv2[1] + massiv2[2];
// console.log(summ);
// document.write(`<p>${summ}</p>`);

//4.1
// let massiv2 = ["1", "2", "3"];
// let summ = +massiv2[0] + +massiv2[1] + +massiv2[2];
// console.log(summ);
// document.write(`<p>${summ}</p>`);

//5
// let numbers = [2, 5, 3, 9];
// let num1 = numbers[0] * numbers[1];
// let num2 = numbers[2] * numbers[3];
// let result = num1 + num2;
// console.log(result);

//6
// let massiv2 = ["1", "2", "3"];
// console.log(massiv2.length);

//7
// let letters = ["a", "b", "c", "d"];
// let lastIndex = letters.length - 1; // number 3
// console.log(letters[lastIndex]);

//7.1
// let message = "Hello";
// console.log(message[message.length - 1]);

//8
// let chars = ["a", "b", "c"];
// chars[0] = 1;
// chars[1] = 2;
// chars[2] = 3;
// console.log(chars);

//9
/*
let numbers = [2, 5, 3, 9];
// numbers[0] = numbers[0] + 3;
numbers[0] += 3;// прибавляю 3 к текущему значению

numbers[1] = numbers[1] + 3;
numbers[2] = numbers[2] + 3;
numbers[3] = numbers[3] + 3;
console.log(numbers);
*/

//9.1
// let numbers = [2, 5, 3, 9, 4, 7, 2];
// for (let num of numbers) {
//   console.log(num + 3);
// }

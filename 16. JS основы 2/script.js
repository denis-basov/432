let avatar = "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let avatarWidth = 300;
let fName = "Иван";
let lName = "Иванов";
let age = 11;
let hobby = "Игра в теннис";
let city = "Анапа";
let phone = "934-57-67-28";
let isAdmin = false;

/*
// конкатенация строк
5 + 4
9
6+9
15
'a' + 'b'
'ab'
'hello' + 'winter'
'hellowinter'
'hello' * 'winter'
NaN
'hello' + 'winter'
'hellowinter'
'hello ' + 'winter'
'hello winter'
'hello, ' + 'winter'
'hello, winter'
'hello' + ', ' + 'winter'
'hello, winter'
*/

// формируем приветствие

//1
// let message = "Hello, " + fName + "!";
// console.log(message);

//2
// let message = `Hello, ${fName}!`;
// console.log(message);

// let message = `В следующем году мне будет ${age + 1} лет`;
// console.log(message);

// let message = `Меня зовут: ${fName}. Моя фамилия: ${lName}.
// Мой возраст: ${age}. Моё хобби: ${hobby}.`;
// console.log(message);

/*
let message = `<h2 class="message" id="message-1">Меня зовут: ${fName}. Моя фамилия: ${lName}. Мой возраст: ${age}. Моё хобби: ${hobby}.</h2>`;
document.write(message); // вывод в документ
*/

/*
// простое сравнение значений
4 > 5
false
56 < 44
false
65 > 32
true
34 >= 34
true
34 > 34
false

age > 33
false
age > 10
true
age > 18
false
age < 18
true
*/

/*
// строки индексированы
let greet = "Hello";
console.log(greet[0]);
console.log(greet[1]);
console.log(greet[2]);
console.log(greet[3]);
console.log(greet[4]);
console.log(greet[10]); // undefined

console.log(greet[0] + greet[4]); // Ho
*/

/*
// undefined
let message;
console.log(message);
message = "hello";
console.log(message);
*/

/*
// получение кодов символов
let sentence = "z";
let index = 0;

console.log(`Код ${sentence.charCodeAt(index)} символ ${sentence.charAt(index)}`);
*/

/*
UPDATE users
SET name = 'Ivan'
WHERE id = 3;
*/

/*
// проверка на равенство ==
4 == 4
true
5 == 1
false
45 == 23
false
'a' == 'a'
true
'admin' == 'admin'
true
'admin' == 'admi'
false
*/
// = присваивание, == сравнение

// формирование разметки с вставкой данных из переменных
// и вывод в документ
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
        <p>Админ: ${isAdmin}</p>
    </div>`;
//console.log(userStr);
document.write(userStr);

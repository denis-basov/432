// let mixed = [true, 1.5, null, false, "hello", NaN, [1, 2, 3]];
// console.log(mixed);
// console.log(mixed[6][1]);

/**
 * объекты
 */

// let nums = [1, 2, 3, 4, 5];
// console.log(nums);
// console.log(nums.length);

// let avatar = "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// let avatarWidth = 300;
// let fName = "Иван";
// let lName = "Иванов";
// let age = 11;
// let hobby = "Игра в теннис";
// let city = "Анапа";
// let phone = "934-57-67-28";
// let isAdmin = false;

// объект
/*
let user = {
  avatar: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  avatarWidth: 300,
  fName: "Иван",
  lName: "Иванов",
  age: 11,
  hobbies: ["Игра в теннис", "Спать", "Есть"],
  city: "Анапа",
  phone: "934-57-67-28",
  isAdmin: false,
};
console.log(user);
*/

// console.log(user.fName);
// console.log(user.lName);
// console.log(user.hobbies);
// console.log(user.avatarWidth);
// console.log(user.isAdmin);

// let message = `<p>Привет, ${user.fName} ${user.lName}</p>`;
// console.log(message);
// document.write(message);

/*
// задание значений свойствам
user.avatarWidth = 500;
user.phone = "923-56-12-44";
user.city = "Пермь";
user.age += 1; // увеличиваем возраст на 1
console.log(user);*/

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
};
*/

// console.log(user);
// console.log(user.hobbies);
//console.log(user.address.city);
// document.write(user.address);
// let message = `Город: ${user.address.city}`;
// document.write(message);

// let message = `Мои хобби: ${user.hobbies[0]}, ${user.hobbies[1]}, ${user.hobbies[2]}.`;
// document.write(message);

/*
// вывод данных из объекта в документ
// 1 
let car = {
  img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  model: "SkyLine",
  maker: "Nissan",
  madeYear: 2020,
  power: 800,
  weight: 1200,
};

let carInfo = `<div class="car">
                    <img src="${car.img}" alt="${car.maker} ${car.model}">
                    <h2>${car.maker} ${car.model}</h2>
                    <p>Год производства: <span>${car.madeYear}</span></p>
                    <p>Мощность: <span>${car.power} л.с</span></p>
                    <p>Масса: <span>${car.weight} кг</span></p>
                </div>`;
console.log(carInfo);
document.write(carInfo);
*/

/*
// вывод данных из объекта в документ
// 2
let car = {
  img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  model: "SkyLine",
  maker: "Nissan",
  madeYear: 2020,
  power: 800,
  weight: 1200,
  equipment: ["базовая", "расширенная", "люксовая", "супер-мупер"],
};

let carInfo = `<div class="car">
                      <img src="${car.img}" alt="${car.maker} ${car.model}">
                      <h2>${car.maker} ${car.model}</h2>
                      <p>Год производства: <span>${car.madeYear}</span></p>
                      <p>Мощность: <span>${car.power} л.с</span></p>
                      <p>Масса: <span>${car.weight} кг</span></p>
                      <h3>Доступные комплектации:</h3>
                      <ol>
                        <li>${car.equipment[0]}</li>
                        <li>${car.equipment[1]}</li>
                        <li>${car.equipment[2]}</li>
                      </ol>
                      <ol>
                        <li>${car.equipment.join("</li><li>")}</li>
                      </ol>
                  </div>`;
console.log(carInfo);
document.write(carInfo);
*/

let post = {
  title: "Тайные наброски Микеланджело открыты в церкви во Флоренции",
  description: `Тайные наброски Микеланджело открыты в церкви во Флоренции
  Тайные наброски Микеланджело под церковью во Флоренции открыты для публики. Великий художник провел месяцы в камере под капеллами Медичи, чтобы избежать смертного приговора, вынесенного папой Климентом VII.`,
  addDate: "2023-11-01 10:21:00",
  categories: ["КУЛЬТУРА", "ИСТОРИЯ"],
  author: "АНДРЕЙ ЯШЛАВСКИЙ",
  views: 441,
};

let authors = [
  {
    id: 1,
    firstName: "Иван",
    lastName: "Бунин",
  },
  {
    id: 2,
    firstName: "Лев",
    lastName: "Толстой",
  },
  {
    id: 4,
    firstName: "Федор",
    lastName: "Достоевский",
  },
  {
    id: 8,
    firstName: "Алексей",
    lastName: "Толстой",
  },
];

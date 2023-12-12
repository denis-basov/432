//1
let post = {
  title: "Тайные наброски Микеланджело открыты в церкви во Флоренции",
  description: `Тайные наброски Микеланджело открыты в церкви во Флоренции
  Тайные наброски Микеланджело под церковью во Флоренции открыты для публики. Великий художник провел месяцы в камере под капеллами Медичи, чтобы избежать смертного приговора, вынесенного папой Климентом VII.`,
  addDate: "2023-11-01 10:21:00",
  categories: ["КУЛЬТУРА", "ИСТОРИЯ", "ПОГОДА"],
  author: "АНДРЕЙ ЯШЛАВСКИЙ",
  views: 441,
};

let postStr = `
  <div class="post">
    <h2>${post.title}</h2>
    <p>${post.description}</p>
    <p>Дата публикации: ${post.addDate}</p>
    <span>Автор: ${post.author}</span>
    <span>Кол-вол просмотров: ${post.views}</span>
    <p>Категории: ${post.categories[0]}, ${post.categories[1]}</p>
    <p>Категории: ${post.categories.join(", ")}</p>
  </div>
`;
// console.log(postStr);
// document.write(postStr);

//2 - массив объектов
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
// console.log(authors);

// console.log(authors[0]);
// console.log(authors[0].firstName);
// console.log(authors[0].lastName);
// console.log(authors[0].id);

// console.log(authors[3]);
// console.log(authors[3].firstName);
// console.log(authors[3].lastName);
// console.log(authors[3].id);

let authorsInfo = `
  <div class="authors">
    <h3>Список авторов</h3>
    <ol>
      <li>Номер автора в каталоге: <span>${authors[0].id}</span>, Фамилия <span>${authors[0].lastName}</span>, Имя <span>${authors[0].firstName}</span></li>
      <li>Номер автора в каталоге: <span>${authors[1].id}</span> Фамилия <span>${authors[1].lastName}</span> Имя <span>${authors[1].firstName}</span></li>
      <li>Номер автора в каталоге: <span>${authors[2].id}</span> Фамилия <span>${authors[2].lastName}</span> Имя <span>${authors[2].firstName}</span></li>
      <li>Номер автора в каталоге: <span>${authors[3].id}</span> Фамилия <span>${authors[3].lastName}</span> Имя <span>${authors[3].firstName}</span></li>
    </ol>
  </div>`;

// console.log(authors);
// document.write(authorsInfo);

// Получение данных c помощью REST API
async function getCountryInfo() {
  let response = await fetch(`https://restcountries.com/v3.1/all`);
  let data = await response.json();

  console.log(data);
  console.log(data[35].altSpellings[2]);
}
getCountryInfo();

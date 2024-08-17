const getAllCountriesBtn = document.querySelector("#get-all-countries"); // кнопка для загрузки стран
const mainContainerEl = document.querySelector("#main"); // контейнер для вставки списка стран
let allCountriesArr = []; // массив для стран

/**
 * при клике на кнопку получаем все страны
 */
getAllCountriesBtn.addEventListener("click", async function () {
  allCountriesArr = await getAllCountrise();
  showAllCountries(allCountriesArr);
  this.style.display = "none";
});

/**
 * при клике на страну получаем данные о стране и выводим в документ
 * вешаем обработчик события на контейнер
 */
mainContainerEl.addEventListener("click", async function (event) {
  const clicked = event.target.closest(".country"); // получаем элемент по которому клик

  if (!clicked) return;

  const countryName = clicked.dataset.country;
  const country = await getCountry(countryName);

  showCountry(country);
});

/**
 * получение всех стран
 */
const getAllCountrise = async function () {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  return data;
};

/**
 * получение одной страны по названию
 */
const getCountry = async function (country) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await response.json();

  return data[0];
};

/**
 * вывод списка стран в документ
 */
const showAllCountries = function (data) {
  const outputHTML = data.reduce(function (acc, country) {
    return (acc += `
            <div class="country" data-country="${country.name.common}">
                <h2>${country.name.common}</h2>
                <img src="${country.flags.png}" alt="${country.name.common}">   
            </div>
        `);
  }, "");

  mainContainerEl.innerHTML = "";
  mainContainerEl.insertAdjacentHTML("beforeend", outputHTML);
};

/**
 * отображение одной страны
 */
const showCountry = function (country) {
  const outputHTML = `
            <div class="country-detail">
                <h2>${country.name.common}</h2>
                <img src="${country.flags.png}" alt="${country.name.common}">   
                <button id="reset-btn">Back to all countries</button>
            </div>
        `;
  mainContainerEl.innerHTML = "";
  mainContainerEl.insertAdjacentHTML("beforeend", outputHTML);

  // получаем созданную кнопку
  const resetBtn = document.querySelector("#reset-btn");

  // возврат к списку стран
  resetBtn.addEventListener("click", function () {
    showAllCountries(allCountriesArr);
  });
};

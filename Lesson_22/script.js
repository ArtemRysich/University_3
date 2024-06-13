// ***************** Конструкція async await ***************** \\

// async function serviceCountry() {
//   const response = await fetch("https://restcountries.com/v3.1/name/ukraine");

//   console.log(response)
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return response.json();
// }

// ***************** Асинхрона функція завжди поверне проміс ***************** \\

// console.log(serviceCountry())
// *****************Асинхронною функціює може бути будь який різновид функції ***************** \\

// ****** Arrow function ****** \\
// const serviceCountry = async () => {
//     const response = await fetch("https://restcountries.com/v3.1/name/ukraine");

//     console.log(response)
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
// }

// ****** Function expression ****** \\

// const serviceCountry = async function () {
//     const response = await fetch("https://restcountries.com/v3.1/name/ukraine");

//     console.log(response)
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
// }

// ****** Object method ****** \\

// const service = {
//   countryName: "Ukraine",
//   async getCountryInfo() {
//     const response = await fetch(`https://restcountries.com/v3.1/name/${this.countryName}`);

//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   },
// };
// console.log(service.getCountryInfo())

// ************ Обробка за допомогою then та catch ************ \\

// async function serviceCountry() {
//   const response = await fetch("https://restcountries.com/v3.1/name/ukraine");

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return response.json();
// }

// serviceCountry()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ************ Обробка за допомогою try та catch ************ \\

// async function serviceCountry() {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/name/ukraine");
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// serviceCountry();

// // ************ Паралельні та послідовні запити ************ \\

// *********** Послідовні *********** \\

// async function serviceInfo(){
//     const resp = await fetch("https://restcountries.com/v3.1/name/ukraine");
//     const resp1 = await fetch("https://restcountries.com/v3.1/name/germany");
//     const resp2 = await fetch("https://restcountries.com/v3.1/name/poland");
//     const resp3 = await fetch("https://restcountries.com/v3.1/name/france");
// }

// serviceInfo()

// *********** Паралельні *********** \\

// async function serviceInfo() {
//   const countries = ["Ukraine", "Germany", "Poland", "France"];
//   const responses = countries.map(getCountry);

// const data = await Promise.all(responses)
// console.log(data)
// }

// serviceInfo();

// async function getCountry (country)  {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     return resp.json();
//   }

// ПЕРЕРВА ДО 20.25

// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/   КЛЮЧ ВАЛІДНИЙ 21 ДЕНЬ !!!!!

// Приклад роботи https://ibb.co/6g3YYs8

const elements = {
  form: document.querySelector(".js-search"),
  inputWrapper: document.querySelector(".js-form-container"),
  btnAddField: document.querySelector(".js-add"),
  list: document.querySelector(".js-list"),
};

elements.btnAddField.addEventListener("click", handlerAddField);
elements.form.addEventListener("submit", handlerSubmit);

async function handlerSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const countries = formData
    .getAll("country")
    .map((item) => item.trim())
    .filter((item) => !!item);

  try {
    const capitals = await serviceCountries(countries);
    const weather = await serviceWeather(capitals);

    elements.list.innerHTML = createMarkup(weather);
  } catch (e) {
    console.error(e);
  } finally {
    elements.inputWrapper.innerHTML = '<input type="text" name="country" />';
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        location: { country, name },
        current: {
          temp_c,
          condition: { text, icon },
        },
      }) => `
      <li>
        <img src="${icon}" alt="${text}">
        <h2>${country}</h2>
        <h2>${name}</h2>
        <p>${text}</p>
        <p class="temp">${temp_c} °C</p>
      </li>`
    )
    .join("");
}

async function serviceCountries(countries) {
  const responses = countries.map(async (country) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );

    if (!response.ok) {
      return Promise.reject(response.status);
    }
    return response.json();
  });

  const data = await Promise.allSettled(responses);
  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value[0].capital[0]);
}

async function serviceWeather(capitals) {
  const URL = "http://api.weatherapi.com/v1/current.json";
  const API_KEY = "14c56bddeab14583a6e164909231107";

  const responses = capitals.map(async (capital) => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: capital,
      lang: "uk",
    });

    const response = await fetch(`${URL}?${params}`);

    if (!response.ok) {
      return Promise.reject(response.status);
    }

    return response.json();
  });

  const data = await Promise.allSettled(responses);
  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value);
}

function handlerAddField() {
  elements.inputWrapper.insertAdjacentHTML(
    "beforeend",
    '<input type="text" name="country" />'
  );
}

// ******************** CRUD ******************** \\

// Create - POST
// Read   - GET
// Update - PUT PATCH
// DELETE - DELETE

// ******************** POST - CREATE ******************** \\
// const post = {
//   title: "Hello world",
//   body: "First POST method",
//   userId: 999,
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(post),
//   headers: {
//     "Content-type": "application/json",
//   },
// };
// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

// ******************** GET - READ ******************** \\
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// ******************** PATCH - UPDATE ******************** \\

// const post = {
//   title: "I LOVE JS",
// };

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(post),
//   headers: {
//     "Content-type": "application/json",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

// ******************** PUT - UPDATE ******************** \\

// const post = {
//   title: "I LOVE JS",
// };

// const options = {
//   method: "PUT",
//   body: JSON.stringify(post),
//   headers: {
//     "Content-type": "application/json",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

// ******************** DELETE ******************** \\
// const options = {
//     method: "DELETE"
// }

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

// ******************** Практика ******************** \\

// Завдання - 1.
// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість залишити заявку для того, щоб з ним зв'язались та відповіли на його питання
// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.

// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами

// fetch('http://127.0.0.1:3000/api/getall')
// .then(resp => resp.json())
// .then(data => console.log(data))

const form = document.querySelector(".js-question");

form.addEventListener("submit", handlerQuestion);

function handlerQuestion(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);

  const request = {};

  formData.forEach((value, key) => (request[key] = value));

  serviceQuestion(request)
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
    .finally(() => evt.target.reset())
}

function serviceQuestion(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  return fetch("http://127.0.0.1:3000/api/question", options).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

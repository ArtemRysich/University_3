// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// ***********setTimeout*********** \\

// const id = setTimeout(() => {
// console.log('Time is over');
// }, 2000)

// console.log(id)
// Видалення Timeout за необхідністю
// clearTimeout(id)

// Можливість передати параметри для колбеку
// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// ***********setInterval*********** \\

// const id = setInterval(() => {
// console.log('setInterval');
// }, 1000)

// console.log(id)

// Видалення Timeout за необхідністю
// clearInterval(id)

// Можливість передати параметри для колбеку
// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const content = document.querySelector(".js-content");
// const text = document.querySelector(".js-text");

// let counter = 10;
// text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//   counter -= 1;

//   if (!counter) {
//     clearInterval(id);
//     content.style.display = "none";
//     return;
//   }

//   text.textContent = `Залишилось ${counter} секунд`;
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   content.style.display = "none";
// }, 1000 * counter);

// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log('start');

// setTimeout(() => {
//     console.log("setTimeout");
// }, 0)

// console.log('finish');

//  console.time('Async')
// setTimeout(() => {
//     console.log("setTimeout");
// }, 0)

// for(let i = 0; i < 200000; i +=1){
//     console.log("Лічильник", i)
// }
// console.timeEnd('Async')

// ***********Class Date*********** \\
// const currentDate = new Date();
// console.log(currentDate)
// const targetDate = new Date("9 05 2024");
// console.log(targetDate)
// console.log((targetDate - currentDate));

// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const selectors = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  year: document.querySelector(".date-year"),
  month: document.querySelector(".date-month"),
  digital: document.querySelector(".digital-clock"),
  arrowSeconds: document.querySelector(".clock-seconds__arrow"),
  arrowMinutes: document.querySelector(".clock-minutes__arrow"),
  arrowHours: document.querySelector(".clock-hours__arrow"),
};

setInterval(() => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();
  const milliseconds = currentDate.getMilliseconds();
  const localTime = currentDate.toLocaleTimeString("uk-UA");

  const secondDeg = (360 / 60) * seconds + (360 / 60 / 1000) * milliseconds;
  const minutesDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
  const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;

  selectors.day.textContent = arrDay[day];
  selectors.month.textContent = namesOfMonth[month];
  selectors.date.textContent = date;
  selectors.year.textContent = year;
  selectors.digital.textContent = `Поточний час ${localTime}`;

  selectors.arrowSeconds.style.transform = `rotate(${secondDeg}deg)`;
  selectors.arrowMinutes.style.transform = `rotate(${minutesDeg}deg)`;
  selectors.arrowHours.style.transform = `rotate(${hoursDeg}deg)`;
}, 100);

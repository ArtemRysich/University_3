// ******************************Деструктуризація масива***************************************\\
// const arr = [1, 2, 3, 4, 5];

// const first = arr[0];
// const second = arr[1];

// const [, , , , third] = arr;

// console.log(first)
// console.log(third);

// const db = [
//   ["Alice", "surname"],
//   ["Kate", "surname"],
// ];

// for (const user of db) {
//   const [userName, userSurname] = user;
//   console.log(userName);
//   console.log(userSurname);
// }

// ******************************Деструктуризація об'єкта***************************************\\
// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// const {skills} = user;
// console.log('name', name)
// console.log('skills', skills)

// ************************Глибока деструктуризація об'єкта***************************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// const {skills} = user;

// console.log(skills.css)

// const {css} = user.skills;

// console.log('css', css)

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true,
//     }
// }

// const { skills: {html}, skills} = user;

// console.log('html', html)
// console.log('skills', skills)

// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//     library: {
//       react: true,
//       jquery: false,
//     },
//   },
// };

// const {
//   skills: {
//     js,
//     library: { react },
//   },
// } = user;

// console.log(js);
// console.log("react", react);

// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//     library: {
//       react: true,
//       jquery: false,
//       html: "TEST CASE",
//     },
//   },
// };

// const {
//   skills: {
//     html,
//     library: { html : libraryHTML },
//   },
// } = user;

// console.log(html)
// console.log('libraryHTML', libraryHTML)

// *********************Деструктуризація об'єкта в параметрах функції******************************\\

// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// *********Без деструктуризації
// function getUserName(obj) {
// console.log(
//   `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
// );
// }

// getUserName(user)

// *********З деструктуризацією
// function getUserName(obj) {
//     const {name, skills: {html, css,js}} = obj;
//     // console.log(`Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user)

// function getUserName({ name, skills: { html, css, js } = {} } = {}) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
//   );
// }

// getUserName(user);
// getUserName();

// *************************Деструктуризація об'єкта в циклі***********************************\\

// const users = [{ name: "Kate" }, { name: "Alex" }, { name: "Mark" }];

// ********Без деструктуризації*******
// const names = [];

// for (const user of users) {
//     names.push(user.name)
// }

// console.log(names);

// ********З деструктуризацією*********
// const names = [];

// for (const { name } of users) {
//   names.push(name);
// }

// console.log(names);

// *************************Операція rest та spread********************************\\

// const numbers = [1, 2, 3];

// const copy = [...numbers]; //spread
// copy.splice(0,1)
// console.log(numbers)

// const numbers = [1, 2, 3];
// const [first, ...args] = numbers; // rest

// console.log("first", first)
// console.log('args', args)

// ************Операція rest та spread в функціях********************************\\

// const numbers = [1, 2, 3];

// function foo(...props){//rest

// }
// foo(...numbers)// spread

// const names = ['Alice', 'Kate', 'Emma'];

// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }

// foo(...names) // foo('Alice', 'Kate', 'Emma')// spread

// function foo(first, second, ...args) { //rest
//     console.log(first);
//     console.log(second);
//     console.log(args);
//     console.log(arguments)
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily')

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// function foo({ name, age, ...props }) {
//     console.log(name);
//     console.log(age);
//     console.log(props);
// }
// foo(user)

// function foo({ name, skills: { html, ...props }, ...props2}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)

// ПЕРЕРВА ДО 20.50

// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//     id: 1,
//     username: 'harry_potter',
//     profile: {
//       name: 'Harry',
//       surname: 'Potter',
//       age: 25
//     }
//   };

// Деструктуризація об'єкта для отримання окремих змінних
// const {username, profile: {name, surname}} = user;

// Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);

// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//   name: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };

// /**
//  *
//  * @param {object} param0
//  * @param {string} name = {param0}
//  * @param {number} price = {param0}
//  * @param {string} brand ={details: {param0}}
//  */
// function displayProductInfo({
//   name,
//   price,
//   category,
//   details: { brand, color, weight } = {},
// } = {}) {
//   console.log(`Назва товару: ${name}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log("Деталі:");
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);

// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   return {
//     id: Date.now(),
//     createdAt: new Date(),
//     list: "default",
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }
// function transformUsername(user) {
//   return {
//    id: user.id,
//    email: user.email,
//    fullName: `${user.firstName} ${user.lastName} `,
//    friendCount: user.friendCount
//   };
// }

// function transformUsername(user) {
//   const result = {};
//   const keys = Object.keys(user);

//   for (const key of keys) {
//     if (key !== "firstName" && key !== "lastName") {
//       result[key] = user[key];
//     }
//   }

//   result.fullName = `${user.firstName} ${user.lastName}`;
//   return result;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//     skills: {
//       html: true,
//     },
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//     city: "Lviv",
//   })
// );

// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції calculateHousePerimeter, так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.

function calculateHousePerimeter({ sideA, sideB, sideC, sideD }) {
  return sideA + sideB + sideC + sideD;
}

const perimeter = calculateHousePerimeter({
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15,
});
console.log(`Периметр будинку: ${perimeter}`);

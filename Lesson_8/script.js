// Тестовий масив для теоретичного блоку

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// ********map******** \\
// const names = users.map((user) => {
//   if (user.name.toLowerCase().includes("a")) {
//     return user.name;
//   }
// });
// console.log(names);

// const names = users.map(({name})=> name.toLowerCase())

// console.log(names)

// ********flatMap******** \\

// const skills = users.map(({skills}) => skills )
// console.log(skills)

// const skills = users.flatMap(({skills}) => skills)
// console.log(skills)

// ********flat******** \\

// const arr1 = [1, 2, 3, 4, [5, 6, 7, [8, 9 ,[10,11]]]];

// const result = arr1.flat(1)
// console.log(result)

// ********filter******** \\
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   {
//     id: 2,
//     name: "Alice",
//     age: 32,
//     skills: ["Python", "JavaScript", "Java", "Data Analysis"],
//   },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "JavaScript", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "JavaScript", "C#"] },
// ];

// const result = users.flatMap(({ skills }) => skills);

// const uniq =result.filter((item, idx, arr) => arr.indexOf(item) === idx );

// console.log(result);
// console.log(uniq)

// const result = users
// .filter(({age}) => age < 30)
// .findIndex(({skills},_, arr) => {
//     console.log(arr)
//     return skills.includes('JavaScript')
// } )
// console.log(result)

// const result = users.filter(({age}) => age < 30);
// console.log(result)

// ********find******** \\

// const result = users.find(({skills}) => skills.includes("JavaScript") )
// console.log(result)

// const result = users.find(({skills}) => skills.includes("qwerty") )
// console.log(result)

// ********findIndex********\\

// const result = users.findIndex(({id}) => id === 3);
// const result = users.findIndex(({skills}) => skills.includes("qwerty"))

// console.log(result)

//

// ********some********\\

// const isKnow = users.some(({skills}) => skills.includes('Python') )

// console.log(isKnow)
// ********every ********\\

// const result = users.every(({age}) => age > 22)
// console.log(result)

// ********toSorted********\\

// const result = users.toSorted((a,b) =>  b.age - a.age);
// console.log(result)
// console.log('users',users)

// const result = users.sort((a,b) =>  b.age - a.age);
// console.log(result)
// console.log('users',users)

// const arr = [5, 2, 7, 8, 1, 4, 11];
// console.log(arr.toSorted((a,b) => a-b))
// console.log(arr.toSorted().reverse())

// const str = ["b", "c", "a", "B", "A", "C"];

// // console.log(str.toSorted());
// console.log(str.toSorted((a, b) => a.localeCompare(b)));

// ********reduce********\\

const users = [
  { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
  {
    id: 2,
    name: "Alice",
    age: 32,
    skills: ["Python", "JavaScript", "Java", "Data Analysis"],
  },
  { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
  { id: 4, name: "Emily", age: 40, skills: ["Java", "JavaScript", "Spring"] },
  { id: 5, name: "David", age: 22, skills: ["C++", "JavaScript", "C#"] },
];

// const result = users.reduce((acc, user, idx, arr) => {
//   return acc + user.age;
// }, 0);

// const result = users.reduce((acc, user, idx, arr) => {
//     acc.push(user.age)
//     return acc
//   }, []);

// console.log(result)

// const result = users.reduce((acc, user, idx, arr) =>  acc.push(user.age), []);

// console.log(result)

// const result = users.reduce((acc, {age}) => acc + age, 0);
// console.log(result)

// ****************Практика**************** \\

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", city: "Lviv", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//   return arr.map(({ grades, ...args }) => {
//     console.log(args);
//     const total = grades.reduce((acc, elem) => acc + elem);
//     return {
//       ...args,
//       average: Math.round(total / grades.length),
//     };
//   });
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//   return arr.filter(({ age }) => age > 20);
// }
// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function getBook(arr, title) {
//   return (
//     arr.find(
//       ({ title: bookTitle }) => bookTitle.toLowerCase() === title.toLowerCase()
//     ) ?? "Not found"
//   );
// }
// console.log(
//   getBook(
//     books,
//     "Design Patterns: Elements of Reusable Object-Oriented Software"
//   )
// );
// console.log(getBook(books, "qwerty"));

// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами.
//  Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//     { id: 1, name: 'T-shirt', price: 20, quantity: 3 },
//     { id: 2, name: 'Jeans', price: 50, quantity: 2 },
//     { id: 3, name: 'Sneakers', price: 80, quantity: 1 },
//     { id: 4, name: 'Hat', price: 15, quantity: 4 },
//     { id: 5, name: 'Socks', price: 5, quantity: 6 }
// ];

// function getTotal(arr) {

// }
// console.log(getTotal(products));

// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function sortDesc(arr) {
// //   return arr.toSorted(({ year: a }, { year: b }) => b - a);
// return arr.toSorted((a, b) => b.year - a.year);
// }
// console.log(sortDesc(books));

// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.
// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];

// function getProducts(arr) {
//   //   const minPrice = arr.filter(({ price }) => price < 2);
//   //   const names = minPrice.map(({ name }) => name);
//   //   const sortedAsc = names.sort((a, b) => a.localeCompare(b));
//   //  return sortedAsc

//   return arr.filter(({ price }) => price < 2).map(({ name }) => name).sort((a, b) => a.localeCompare(b))
// }
// console.log(getProducts(products));

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа
const str = "absdabsrgbadgtdswwbetflg";
// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }

// const result = str.split("").reduce((acc, item) => {
//   if (item in acc) {
//     acc[item] += 1;
//     console.log(acc[item] += 1)
//   } else {
//     acc[item] = 1;
//   }

//   return acc
// }, {});

// console.log(result);
// str.split("").reduce((acc, item)=>({...acc, [item]: acc.hasOwnProperty(item) ? [item]++ : 1 }),{})

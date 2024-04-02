/***** Оголошення змінних *****/
// const;

// const value = 24;

// let;

// let value = 24;
// console.log('1',value);
// value = 15;
// console.log('2',value);
// value = 'Hello world'
// console.log('3',value);

/***** Примітивні типи даних ****/

// Number

// let value = 45;

// value = 45.5;

// value = NaN
// console.log(value);
// console.log(typeof value);

// const value = "45a";
// console.log(Number(value));

// console.log(5 === 5);
// console.log(undefined === undefined);
// console.log(isNaN(value));//Number(value) //NaN
// console.log(Number.isNaN(value));

// String

// const str = `Hello ${value} world`;

// const str = 'Hello' + ' ' + value + ' ' + 'world';

// const str = 100 + 2 + 'a'; // 102 + 'a' // '102a'
// const str = 100 + 'a' + 2; // '100a' + 2// '100a2';
// const str ='a' + null;

// const str = '102' - 3;
// const str = '2' / 2;

// const result = Number('102') - 3;

// console.log(result);

// console.log(typeof result);

// const str = 'Hello world';
// console.log(str[str.length - 1]);
// console.log(str.length);
// Типи рядків '' "" ``

// Boolean (true, false);

// let isUse = false;

// isUse = true;

// console.log(isUse);

// undefined

// null

// перевірка типу даних з яким працюємо метод typeof

/***** Комунікація з користувачем та можливість відображення якогось результату *****/

// console.log('Привіт вчи JS');
// alert('Привіт вчи JS')

// const message = prompt("Введіть і'мя")
// console.log(message.length);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);

/***** Основні оператори *****/

// >
// console.log(25 > 21);

// <
// console.log(25 < 24);

// ==
// console.log('false' == 0);
// console.log(false == 0); //false => 0 == 0
// console.log('25' == 25); // 25 == 25

// ===
// console.log('25' === 25);
// console.log(false === 0);

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);

// >=
// console.log(26 >= 20);
// console.log(26 >= 26);

// console.log(0 > null);
// console.log(0 < null);
// console.log(0 == null);
// console.log(0 === null);

// console.log(0 <= null);
// console.log(0 >= null);

// !=
// console.log('1' != 1);// 1 != 1

// !==
// console.log('1' !== 1);

// Приклади роботи

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('papaya' < 'pApaya');

// console.log('a' < 'aAbBc');

// console.log('Papaya' === 'papaya');

/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

// //  0 (число нуль)
// console.log(Boolean(0));
// // // "" (порожній рядок)
// console.log(Boolean(''));
// // // NaN
// console.log(Boolean(NaN));
// // // undefined
// console.log(Boolean(undefined));
// // // null
// console.log(Boolean(null));
// // // false
// console.log(Boolean(false));

// console.log(Boolean(1));
// console.log(!!1);

// console.log(!true);
// console.log(!false);

// console.log(!!1);

// console.log(Number("1"));
// console.log(+"1" === 1);

// console.log(+"1" + 1);

/***** Методи для роботки з числами (тип даних Number) *****/

const str = "25.7a32px";
// const str = 25.7
// console.log(Number(str));

// Number.parseInt()
// console.log(Number.parseInt(str));

// Number.parseFloat()
// console.log(Number.parseFloat(str));

// Number.isNaN()  та метод isNaN()
// console.log(isNaN(num));

// const num = Number(str) // NaN
// console.log(Number.isNaN(num));

// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN

// Класс Math
// const value = 11.49
// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// Math.round()
// console.log(Math.round(value));

// console.log(Math.pow(5, 4));
// console.log(5 ** 4);

// Function expression
/** */

/**
 * Add value
 * @param {string} val1
 * @param {number} val2
 * @returns {number} operation result
 */

// const add = function (val1, val2) {
//   return Number(val1) + val2;
// };

// console.log(add("12", 5));
// console.log(add("15", 4));

// Function declaration
// hoisting https://codeguida.com/post/19
// console.log(add("12", 5));
// function add(val1, val2) {
//   return Number(val1) + val2;
// }

// console.log(add("15", 4));

// console.log(value);
// var value = 15;
// var value = 10;
// var value = 5;
// console.log(value);

// *********** Практика ***************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

const apple = "🍎";

const appleQuantity = 8;

const applePrice = 34;

// const  appleMessage = `${apple} total cost ${appleQuantity * applePrice}`;
// console.log(appleMessage);

const cherry = "🍒";

const cherryQuantity = 3;

const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// console.log(cherryMessage);

/**
 * Get message with total cost
 * @param {string} productName - product name
 * @param {number} quantity - product quantity
 * @param {number} price - product price
 * @returns {string} message with total cost
 */
// function getTotalCost (productName, quantity, price ){
//  return `${productName} total cost ${quantity * price}`
// }

// console.log(getTotalCost(apple, appleQuantity, applePrice));
// console.log(getTotalCost(cherry, cherryQuantity, cherryPrice));

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// function getTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const modifyMinutes = minutes % 60;

//   return `${hours.toString().padStart(2,'0')} : ${modifyMinutes.toString().padStart(2,'0')}`;
// }
// console.log(getTime(70));
// console.log(getTime(450));
// console.log(getTime(1441));
// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const userName = 'Harry';
// const message = `Hello my name is ${userName}`;
// console.log(message);


// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery  + price}`;
// console.log(message);

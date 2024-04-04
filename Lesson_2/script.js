/***** Інструкція if та її варіації *****/
// const value = 10;

// if (value === 10) {//true
//   console.log("condition is true 😎");
// }

// if (value === 15) {//false
//     console.log("condition is true 😎");
//   }

//   console.log('after if');

// if(value === 10){
//     console.log("condition is true 😎");
// }else{
//     console.log("condition is false 😥");
// }
// console.log('after if');

// if(value === 15){
//     console.log("condition is true 😎");
// }else{
//     console.log("condition is false 😥");
// }
// console.log('after if');

// if (value === 20) {// false
//   console.log("first");
// } else if (value === 20) { // false
//   console.log("second");
// } else if (value === 20) { // false
//   console.log("third");
// }else {
//     console.log('default');
// }
// console.log('after if');

/***** Інструкція switch *****/

// const value = 20;
// switch (true) {
//   case 1 === value:
//     console.log("value is one");
//     break;
//   case 20 === value:
//     console.log("value is twenty");
//     break;
//   case 4 === value:
//     console.log("value is four");
//     break;

//   default:
//     console.log("default value");
// }

/***** Тернарний оператор *****/

// condition ? true : false

// const value = 10;
// let message;

// if (value > 15) {
//   message = 'Більше';
// } else {
//   message = 'Меньше';
// }

// console.log(message);

// message = value > 15 ? 'Більше' : 'Меньше';

// console.log(message);

/***** Логічні оператори *****/

// ||

// console.log(2 || 0);
// console.log(0 || 2);
// console.log(0 || '1' || false);
// const value = 15
//false   ||    false
// if(value > 20 || value < 10){
// console.log('some action');
// }

// &&

// console.log(2 && 5);

// console.log(2 && 0 && 5);
// const value = 27;
//  true   &&   true
// if(true){

// }

//  true   &&  false

// if (value > 10 && value < 20) {
//   console.log("some action");
// }

// console.log(5 < value && value  < 2);

// 1 5 < value // true
// 2 true < 2 // 1 < 2

// ?? реагує лише на null та undefined

// console.log(0 ?? 1);
// console.log(null ?? 1);
// console.log(undefined ?? 1);

// let value = 20;

// switch (value == 20 ? "a" : value == 4 ? "b" : "") {
//   case "a":
//     console.log("twenty");
//     break;
//   case "b":
//     console.log("four");
//     break;
//   default:
//     console.log("def");
// }

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log( 3 ||true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);

// console.log(null ?? undefined);

// console.log(null ?? undefined ?? 42);

/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = "HELLO world";

// length
// console.log(str.length);

// toLowerCase()
// console.log(str.toLowerCase());
// console.log('original', str);

// toUpperCase()
// console.log(str.toUpperCase());

// indexOf()
// console.log(str.indexOf(' '));
// console.log(str.indexOf('H'));

// console.log(str.toLowerCase().indexOf("l", 4)); //hello world

// includes
// console.log(str.toLowerCase().includes('l', 10));
// const str = "HellO world";
// endsWith()
// console.log(str.endsWith('  world'));

// startsWith()
// console.log(str.startsWith('H'));

// replace()
// console.log(str.replace('l', '🍕'));

// replaceAll()
// console.log(str.replaceAll('l','🍟'));

// slice()
// console.log(str.slice(-5));

// ПЕРЕРВА ДО 21.18
// ЗА РЕГУЛЯРКИ !!!!
// https://www.freecodecamp.org/ukrainian/learn

/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let

//  Глобальна та функціональна
// var

// if(true){
//     var value = 10;
// }

// console.log(value);

// function fn(){
//     var value = 10;
// }
// fn()
// console.log(value);

// let number = 10;

// if (true) {
//     number = 22;
// }
// console.log(number);

// let number = 10;

// if (true) {
//     number = 22;
//     if (true) {
//         number = 35;
//     }
// }
// console.log(number);

// let number = 10;

// if (true) {
//     if (true) {
//         number = 35;
//     }
// let number = 22;
// }
// console.log(number);

/***** Цикл for *****/

// for (initialization; condition; post-expression) {
//   // statements
// }

// const str = 'hello world'
// // console.log(str.length);s

// for(let i = 0; i < str.length; i+=1){
//     console.log(str[i]);
// }

/***** Цикл while *****/
// const str = "hello world";
// let i = 0;
// while (i < str.length) {
//   // (statement)
//   console.log(str[i]);
//   i += 1;
// }

/***** Цикл do while *****/
// const str = "hello world";
// let i = 0;
// do {
//   console.log(str[i]);
//   i += 1;
// } while (i < 0);

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt("Color ?");
// let action;

// if (message) {
//   // null => false
//   message = message.toLowerCase().trim();
// }

// switch (message) {
//   case "red":
//     action = "stop";
//     break;
//   case "yellow":
//     action = "ready";
//     break;
//   case "green":
//     action = "go";
//     break;
//   default:
//     action = "be careful";
// }
// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//   let message = prompt(text);

//   if (message) {
//     message = message.toLowerCase().trim();
//   }

//   return message === answer;
// }

// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(
//   check("Через воду він проводить, А сам з місця вік не сходить", "міст")
// );
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)

// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;

//   while (total < deps) {
//     total += daySpeed;
//     days += 1;

//     if(total < deps){
//         total -= nightSpeed;
//     }
//   }

//   return days
// }
// console.log(getDays(42)); // 8
// console.log(getDays(17));; // 3
// console.log(getDays(18));; // 4

// Task - 4
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//   const vowels = "aeiou";
//   let counter = 0;

//   str = str.toLowerCase().trim();

//   for (let i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i])) {
//       counter += 1;
//     }
//   }

//   return counter;
// }
// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("Junior Web Developer")); // 8

// Що таке масив
// const array = ["Hello world", null, true, 15];
// console.log(array);

// Перевірка масиву
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray("hello")); // false

// Перший та останій елемент масиву
// const firstEl = array[0];
// const lastIdx = array.length - 1;
// const lastEl = array[22];

// console.log(lastEl);

// Перебір масиву
// const array = ["Hello world", null, true, 15];

// Цикл for
// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(item);
// }

// Цикл for of

// for(const item of array){
//     console.log(item);
// }

// Присвоєння за посиланням та за значенням
// Примітивні типи даних - за значенням

// console.log(1 === 1);
// console.log([1] === [1]);

// let a = 15;
// let b = a;

// b += 1;

// console.log('a', a);
// console.log('b', b);

// console.log(b === a);
// Складні типи даних - за посиланням

// let a = [1,2,3];
// let b = a;

// b.push(4)

// console.log('b', b);
// console.log('a', a);
// console.log(a === b);
// console.log(a === [1,2,3,4]);
// console.log(a);
// console.log(a.toString());

// let a = [1,2,3];
// let b = [4,5,6];

// for(let i = 0; i < a.length, i < b.length; i += 1){
//     console.log('a', a[i]);
//     console.log('b', b[i]);
// }

// Методи для роботи з масивом

// push pop
// const numbers = [1, 2, 3];
// numbers.push(5,6,4, [1,2,3]);
// console.log(numbers);
// console.log(numbers.push('a'));
// console.log(numbers.push('b','c', 'd'));
// console.log(numbers.pop());
// console.log(numbers.pop());
// numbers.pop()
// numbers.pop()
// console.log(numbers);

// unshift shift
// const numbers = [1, 2, 3];
// console.log(numbers.unshift('a','b', 'c'));
// console.log(numbers);

// console.log(numbers.shift());
// console.log(numbers.shift());
// console.log(numbers);

//slice
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.slice(2,5)
// console.log(result);
// console.log(numbers);
// splice
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.splice(2,0, 'hello')
// console.log(result);
// console.log(numbers);

//includes
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, [1,2]];
// console.log(numbers.includes([1,2]));

// function customIncludes(elem, idx = 0){
//     for(let i = idx; i < numbers.length; i +=1){
//         if(numbers[i] === elem){
//             return true
//         }
//     }
//     return false
// }
// console.log(customIncludes(5));

//indexOf

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, [1,2]];

// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf([1,2]));

// concat

// const str = ['a', 'b', 'c'];
// const strA = ['q', 'w'];
// const strB = ['g', 'h'];

// const result = str.concat(strB, strA);
// console.log(result);

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, "Hello", null, 42, false];

// Example - 1
// for (let i = 0; i < arr.length; i += 1) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//     i -= 1;
//   }
// }

// Example - 2

// for(let i = arr.length - 1; i >= 0; i -=1){
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//   }
// }

// console.log(arr);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Maksim",
//   "Svetlana",
//   "David",
//   "Roman",
//   "Olga",
// ];
// const men = ["Artem", "Maksim", "David", "Roman"];

// function getWomen(users, men) {
//   const women = [];

//   for (const name of users) {
//     if (!men.includes(name)) {
//       women.push(name);
//     }
//   }
//   return women;
// }

// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR)

// console.log(result);

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 1; i < numbers.length; i += 1) {
//   const currentEl = numbers[i];
//   const prevEl = numbers[i - 1];

//   if (prevEl > currentEl) {
//     numbers[i] = prevEl + 1;
//   }
// }
// console.log(numbers);

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function createStr(arr) {
  let message;

  switch (arr.length) {
    case 0:
      message = "No one like this";
      break;
    case 1:
      message = `${arr[0]} like this`;
      break;
    case 2:
      message = `${arr[0]} and ${arr[1]} likes this`;
      break;
    case 3:
      message = `${arr[0]}, ${arr[1]} and ${arr[2]}  likes this`;
      break;
    default:
      message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
  return message;
}

console.log(createStr([]));
console.log(createStr(["Peter"]));
console.log(createStr(["Jacob", "Alex"]));
console.log(createStr(["Max", "John", "Mark"]));
console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

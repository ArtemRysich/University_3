// Скалярні типи

// let isOpen: boolean = false;
// isOpen = true;

// let value: number = 10;
// value = 2.345;

// let message: string;
// message = 'Hello world'

// let empty: null = null;
// let missing: undefined = undefined;

// let some: any = 4;
// some = "Hello";

// console.log(some);

// let age: unknown = 20;

// age = "twenty";

// console.log(age);

// let value: string = some;

// console.log(typeof value);

//

// const arr: string[] = ["a", "b", "c"];

// const arr: [number, string] = [15, 'a'];
// arr.unshift(12);

// const arr: [number, ...string[], number] = [12,'12','12',12];

// arr.push('hello')

// enum

// enum Discount {
//   Gold = 10,
//   Silver = 7,
//   Bronze = 5,
// }
// console.log(Discount.Bronze)

// type Discount = "Gold" | "Silver" | "Bronze";

// let result: Discount;

// result = 'Gold'

// const enum DayOfWeek {
//   Monday = "monday",
//   Tuesday = "tuesday",
// }
// console.log(DayOfWeek);
// Union type

// let customValue: number | string | boolean = 10;

// customValue = 'hello';
// customValue = true;

// let message: 'resolve' | 'reject';

// message = "resolve";

// message ="hello"

// Custom Types

// type ExpirationDate = {
//   day: number;
//   month: number;
//   year: number;
// };

// type Color = "Red" | "Green";

// type Fruit = {
//   id: number;
//   name: string;
//   color?: Color;
//   expirationDate: ExpirationDate;
// };

// const apple: Fruit = {
//   id: 1,
//   name: "Apple",
//   color: "Green",
//   expirationDate: {
//     day: 23,
//     month: 6,
//     year: 2024,
//   },
// };
// const avocado: Fruit = {
//   id: 1,
//   name: "Apple",
//   expirationDate: {
//     day: 23,
//     month: 6,
//     year: 2024,
//   },
// };

// ПЕРЕРВА до 18.20

// Практика
// TASK -1
// Створіть перечислення Colors для основних кольорів (червоний, зелений, синій). Напишіть функцію getColorHex, яка приймає значення з перечислення і повертає відповідний шестнадцятковий код кольору.
// enum Colors {
//   Red = "#FF0000",
//   Green = "#00FF00",
//   Blue = "#0000FF",
// }

// function getColorHex(color: keyof typeof Colors): string {
//     return Colors[color]
// }

// console.log(getColorHex("Green"));
// console.log(getColorHex("Red"));

// Task - 2
// Створи функції яка приймає ім'я та вік, а потім повертає кортеж, де перший елемент має тип string (ім'я), а другий елемент має тип number (вік).

// function createPerson(name: string, age: number): [string, number] {
//   return [name, age];
// }

// console.log(createPerson("Alice", 20));

// Task-3
// створіть функцію, яка приймає об'єкт студента та обчислює його середній бал.

// type Student = {
//   name?: string;
//   grades: number[];
// };

// const alice: Student = {
//   name: "Alice",
//   grades: [5, 5, 5],
// };

// function calculateAverage({ grades }: Student): number {
//   return grades.length
//     ? grades.reduce((acc, item): number => acc + item) / grades.length
//     : 0;
// }

// console.log(calculateAverage(alice));

// Task-4
// Створіть користувацький тип для представлення інформації про замовлення в інтернет-магазині. Кожне замовлення має номер (рядок), список товарів (масив об'єктів з назвою та ціною) та статус (рядок: "в обробці", "відправлено", "доставлено" тощо). Створіть функції для обчислення сумарної вартості замовлення та виведення інформації про статус замовлення.
enum StatusDelivery {
  Process = "In Process",
  Sent = "Sent",
  Delivered = "Delivered",
}
type OrderItem = {
  id: string;
  name: string;
  price: number;
};
type Order = {
  number: string;
  items: OrderItem[];
  status: StatusDelivery;
};

const exampleOrder = {
  number: "1234",
  items: [
    { id: "1", name: "Laptop", price: 800 },
    { id: "2", name: "Mouse", price: 30 },
    { id: "3", name: "Keyboard", price: 50 },
  ],
  status: StatusDelivery.Process,
};

function calculateTotal(items: OrderItem[]): number {
  return items.reduce((acc: number, { price }): number => acc + price, 0);
}

function printStatus({ number, items, status }: Order): void {
  console.log(
    `Order - ${number}, status - ${status}, total price - ${calculateTotal(
      items
    )}`
  );
}

printStatus(exampleOrder);

function fn(cb: () => void) {
    cb()
}

fn(() => console.log("hello"));
fn()
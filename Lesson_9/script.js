// Agenda
// 1 Повторення типів функцій
// 2 ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 3 call apply bind

// ***********Повторення типів функцій*************\\
// **Function declaration**

// function fnDeclaration() {
//     console.log(this.name);
// }
// fnDeclaration()

// **Function expression**
// 'use strict'
// const fnExpression = function () {
//     console.log(this);
// }

// fnExpression()

// **Arrow function**
// 'use strict'
// const fnArrow = () => {
//     console.log(this);
// }

// fnArrow()

// ПРАВИЛА ВИЗНАЧЕННЯ THIS

// 1 Визначити з яким типом функції працюємо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function Declaration & Function Expression
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expression визначають this тим хто їх викликав, перший ліворуч
// 4 Arrow Function в рамках чого вона була створена

// *****Function declaration*****\\
// const person = {
//     name: 'Alice',
//     hello() {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.hello()

// *****Function Expression*****\\
// const person = {
//     name: 'Alice',
//     hello: function () {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.hello()

// *****Arrow Function*****\\
// const person = {
//     name: 'Alice',
//     hello: () => {
//         console.log(this);
//     }
// }
// person.hello();

// const person = {
//     name: 'Alice',
//     hello() {
//         console.log(this);

//         const arrowFn = () => {
//             console.log('arrowFn', this);
//         }

//         arrowFn();
//     }
// }
// person.hello()

// const user = {
//   name: "Alice",
//   test: {
//     name: "Kate",
//     hello() {
//       console.log(this.name);
//     },
//   },
// };
// console.log( user.test.hello)

// const user2 = {
//     name: "Jhon",
//     hello: user.test.hello
//   };

// user2.hello()

// const user = {
//   name: "Alice",
//   test: {
//     name: "Kate",
//     fn:() =>{
//         console.log(this)
//         return () => {
//             console.log(this);
//             console.log(this.name);
//           }
//     }
//   ,
//   },
// };
// user.test.hello();

//   const user2 = {
//       name: "Jhon",
//       hello: user.test.fn()
//     };

//   user2.hello()

// ***********call apply bind*********** \\

// *****call***** \\
// const bmw = {
//   brand: "BMW",
//   speed: 100,
// };

// const audi = {
//   brand: "Audi",
//   speed: 80,
// };

// function drive(action) {
//   console.log(arguments);
//   console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год. ${action}`);
// }

// drive.call(bmw, "Увімкнути ближнє світло");
// drive.call(audi, "Увімкнути клімат-контроль");

// *****apply***** \\

// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };

// const audi = {
//     brand: 'Audi',
//     speed: 80,
// };

// function drive(action, destination) {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }

// drive.apply(bmw, ['Увімкнути ближне світло', 'Львів']);
// drive.apply(audi, ['Увімкнути клімат-контроль', 'Київ']);

// *****bind***** \\
// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };
// const audi = {
//     brand: 'Audi',
//     speed: 80,
// };
// function drive(action, destination) {
//     // console.log(arguments)
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }

// const bmwDrive = drive.bind(bmw, 'Увімкнути ближнє світло', 'Львів');
// const audiDrive = drive.bind(audi)
// // bmwDrive('Увімкнути ближнє світло', 'Львів')
// audiDrive('Увімкнути клімат-контроль', 'Київ')

// *************************Практика***************************\\

// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease, властивостями speed та brand.
// const cruiseControl = {
//   speed: 0,
//   brand: "Audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.brand}  - ${this.speed}`);
//   },
//   decrease(){
//     if(this.speed <= 0){
//         console.log(`${this.brand} - зупинилось`)
//         return
//     }

//     this.speed -= 10;

//     console.log(`${this.brand}  - ${this.speed}`);
//   }
// };
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()

// Task - 2
// Потрібно створити систему для продажу в інтернет-магазині.
// В об'єкті продукту (product) потрібно створити метод discount(буде приймати знижку клієнта в %) та повертати вартість товару з врахуванням знижки
// В об'єкті клієнта (client) який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунку вартості товару та логувати повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//   name: "Smartphone",
//   price: 500,
//   discount(percent) {
//     return (this.price * (100 - percent)) / 100;
//   },
// };

// const client = {
//   name: "Alice",
//   discountPercent: 10,
//   purchase() {
//     const price = product.discount(this.discountPercent);
//     console.log(
//       `${this.name} придбала товар зі знижкою в ${this.discountPercent}%, сума до сплати ${price}`
//     );
//   },
// };

// const client2 = {
//   name: "Kate",
//   discountPercent: 20,
//   purchase: client.purchase,
// };

// client2.purchase();

// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SAFE_SPEED = 60;

// const tesla = {
//     brand: "Tesla",
//     speed: 30,
// };

// const audi = {
//     brand: 'Audi',
//     speed: 70,
// }

// function speedSensor(maxSpeed) {
// if(this.speed <= maxSpeed){
//     return `Автомобіль ${this.brand} рухається з безпечною швидкістю`
// }

// return `${this.brand} - Перевищено безпечну швидкість 😱`

// }
// console.log(speedSensor.call(audi, SAFE_SPEED));

// console.log(speedSensor.call(tesla, SAFE_SPEED));
// console.log(speedSensor.apply(tesla, [SAFE_SPEED]));

// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    return (this.a ?? 0) + (this.b ?? 0);
  },
  mult() {
    if (!this.a && !this.b) {
      return 0;
    }

    return (this.a ?? 1) * (this.b ?? 1);
  },
};
calculator.read(3, 4);
console.log(calculator);
console.log(calculator.add());
console.log(calculator.mult());

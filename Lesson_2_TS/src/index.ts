// *******************Generics**********************
// Основна ідея (Generics) полягає в тому, що вони дозволяють визначити тип, який потім може бути визначений для роботи з різними іншими типами.
// const arr: Array<number> = [1, 2, 3];
// const arr1: Array<number | string> = [1, 2, 3, "hello"];
// const arr2: Array<number | string | boolean> = [1, true, 2, 3, "hello"];
// arr2.push(null);

// В функціях
// До використання Generics
// function logSomeValue(data: number | string): number | string {
//   console.log(data);
//   return data;
// }

// console.log(logSomeValue(10));
// console.log(logSomeValue("10"));

// Загально приняти однією великою літерою, або цілим словом якщо в цьому є якийсь сенс
// function logSomeValue<T>(data: T): T {
//   console.log(data);
//   return data;
// }

// const result = logSomeValue<number>(10);
// const result2 = logSomeValue<string>("10");

// Дженерік з масивом
// Має обмеження на використання методів і властивостей притаманих певних типів
function getHalf<T>(data: Array<T>): Array<T> {
  return data.splice(0, data.length / 2);
}

getHalf([1, 2, 3, 4]);

// ********Interface - це визначення кастомного типу даних, дуже подібне до Custom Types*************************.

// Custom Types
// type User = {
//   name: string;
//   city: string;
//   age: number;
// };

// const user: User = {
//   name: "Alice",
//   city: "Lviv",
//   age: 28,
// };

// Interface

// interface User {
//   name: string;
//   city: string;
//   age: number;
// }

// const user: User = {
//   name: "Alice",
//   city: "Lviv",
//   age: 28,
// };
// Додати значення до властивостей далі по коду (використовується коли працюємо з бібліотеками)

// interface User {
//   hobby: "JS" | "TS";
// }

// const user: User = {
//   name: "Alice",
//   hobby: "TS",
//   city: "Lviv",
//   age: 28,
// };

// Якщо потрібно зробити костамний тип з простими типами (Union type) то тільки type

// type hobby = "JS" | 'TS'

// interface hobby {
//   name: "JS" | "TS"
// }

// Тому маємо загальне правило (рекомендація) коли працюємо з об'єктами ми використавуємо interface, а з простими типами type










// Практика

// Generics
// Створіть функцію reverseArray, яка приймає масив будь-якого типу та повертає його в оберненому порядку.
// Використовуйте Generics, щоб функція була гнучкою і працювала для різних типів масивів.

// const numbers = [1, 2, 3, 4, 5];

// const words = ["apple", "banana", "cherry"];

// function reverseArray<T>(array: T[]): T[] {
//   return array.reverse();
// }

// // Приклади використання
// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = reverseArray(numbers);
// console.log(reversedNumbers); // [5, 4, 3, 2, 1]

// const words = ["apple", "banana", "cherry"];
// const reversedWords = reverseArray(words);
// console.log(reversedWords); // ["cherry", "banana", "apple"]




// TASK-2
//  створити функцію mergeObjects, яка об'єднує два об'єкти в один, при цьому зберігаючи типи об'єктів.

// const person = { name: "John", age: 30 };
// const address = { city: "New York", zipCode: "10001" };


// interface Person {
//   name: string;
//   age: number;
// }

// interface Address {
//   city: string;
//   zipCode: string;
// }

// function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }

// // Приклад використання
// const person: Person = { name: "John", age: 30 };
// const address: Address = { city: "New York", zipCode: "10001" };

// const mergedObject = mergeObjects(person, address);

// console.log(mergedObject);
// // { name: 'John', age: 30, city: 'New York', zipCode: '10001' }

// console.log(mergedObject.name); // 'John'
// console.log(mergedObject.city); // 'New York'


// ****************Class*******************

// class Hero {
//   private name: string;
//   private health: number;

//   constructor(name: string, health: number) {
//     this.name = name;
//     this.health = health;
//   }

//   // Приватний метод для внутрішнього використання
//   private takeDamage(damage: number): void {
//     this.health -= damage;
//     console.log(`${this.name} took ${damage} damage. Health: ${this.health}`);
//   }

//   // Приватний метод для внутрішнього використання
//   private heal(amount: number): void {
//     this.health += amount;
//     console.log(`${this.name} healed for ${amount}. Health: ${this.health}`);
//   }

//   // Публічний метод для атаки
//   public attack(target: Hero, damage: number): void {
//     console.log(`${this.name} attacks ${target.getName()} for ${damage} damage.`);
//     target.takeDamage(damage);
//   }

//   // Публічний метод для отримання імені
//   public getName(): string {
//     return this.name;
//   }
// }

// // Приклад використання
// const hero1 = new Hero('Hero1', 100);
// const hero2 = new Hero('Hero2', 120);

// hero1.attack(hero2, 20);
// hero2.attack(hero1, 15);
// hero1.attack(hero2, 30);

// console.log(`${hero1.getName()} Health: ${hero1['health']}`);

//

// interface HeroInterface {
//   name: string;
//   attack(target: Hero, damage: number): void;
//   getName(): string;
// }

// class Hero implements HeroInterface {
//   name: string;
//   private health: number;

//   constructor(name: string, health: number) {
//     this.name = name;
//     this.health = health;
//   }

//   // Приватний метод для внутрішнього використання
//   private takeDamage(damage: number): void {
//     this.health -= damage;
//     console.log(`${this.name} took ${damage} damage. Health: ${this.health}`);
//   }

//   // Приватний метод для внутрішнього використання
//   private heal(amount: number): void {
//     this.health += amount;
//     console.log(`${this.name} healed for ${amount}. Health: ${this.health}`);
//   }

//   // Публічний метод для атаки
//   public attack(target: Hero, damage: number): void {
//     console.log(
//       `${this.name} attacks ${target.getName()} for ${damage} damage.`
//     );
//     target.takeDamage(damage);
//   }

//   // Публічний метод для отримання імені
//   public getName(): string {
//     return this.name;
//   }
// }

// // Приклад використання
// const hero1 = new Hero("Hero1", 100);
// const hero2 = new Hero("Hero2", 120);

// hero1.attack(hero2, 20);
// hero2.attack(hero1, 15);
// hero1.attack(hero2, 30);

// console.log(`${hero1.getName()} Health: ${hero1["health"]}`);

// // extends
// class SuperHero extends Hero {
//   private superPower: string;

//   constructor(name: string, health: number, superPower: string) {
//     // Виклик конструктора базового класу за допомогою super()
//     super(name, health);
//     this.superPower = superPower;
//   }

//   // Новий метод для супергероя
//   useSuperPower(): void {
//     console.log(`${this.getName()} uses ${this.superPower}!`);
//   }
// }

// // Приклад використання
// const superHero1 = new SuperHero("SuperHero1", 150, "Flight");
// superHero1.attack(hero1, 25);
// superHero1.useSuperPower();

// console.log(`${superHero1.getName()} Health: ${superHero1["health"]}`);
// console.log(superHero1.getName());

// Придумати щось на ходу для protected

// Advanced Types

// typeof
// Перевірка типу даних
// let value: string | number = "Hello";
// console.log(typeof value);

// in
// Перевірка чи ключ входить в обєкт

// type MyObject = {
//   prop1: string;
//   prop2: number;
// };

// const obj: MyObject = { prop1: 'Hello', prop2: 42 };

// if ('prop1' in obj) {
//   // Виконується, оскільки 'prop1' існує в об'єкті MyObject
//   console.log(obj.prop1);
// }

// if ('prop3' in obj) {
//   // Не виконується, оскільки 'prop3' не існує в об'єкті MyObject
//   console.log(obj.prop3); // TypeScript попереджає про можливу помилку
// }

// instanceof

// class Animal {
//   constructor(public name: string) {}
// }

// const dog = new Animal("Tuzik");

// console.log(dog instanceof Animal);

// is
// оператор використовується в операціях визначення типів, наприклад, умовних виразах або областях, де необхідно вказати більш точний тип для подальших операцій.

// interface Bird {
//   fly(): void;
//   layEggs(): void;
// }

// interface Fish {
//   swim(): void;
//   layEggs(): void;
// }

// function isBird(animal: Bird | Fish): animal is Bird {
//   return 'fly' in animal;
// }

// function processAnimal(animal: Bird | Fish) {
//   if (isBird(animal)) {
//     animal.fly();
//   } else {
//     animal.swim(); // Помилка: Property 'swim' does not exist on type 'Bird'.
//   }
// }

// as

// Він дозволяє сказати компілятору, що він впевнений у правильності типу об'єкта або виразу, навіть якщо це не можливо визначити автоматично.
// let someValue: any = "Hello, TypeScript!";

// // let strLength: number = (someValue as string).length;
// console.log(strLength); // 17
// console.log((someValue as string));



// Перевантаження оператора '+'
function addVectors(v1: { x: number, y: number }, v2: { x: number, y: number }): { x: number, y: number } {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
  }
  
  // Перевантаження оператора '-'
  function subtractVectors(v1: { x: number, y: number }, v2: { x: number, y: number }): { x: number, y: number } {
    return { x: v1.x - v2.x, y: v1.y - v2.y };
  }
  
  // Перевантаження оператора '*'
  function multiplyVectorByScalar(v: { x: number, y: number }, scalar: number): { x: number, y: number } {
    return { x: v.x * scalar, y: v.y * scalar };
  }
  
  // Використання перевантажених операторів
  const vector1 = { x: 2, y: 3 };
  const vector2 = { x: 1, y: 4 };
  
  const sum = addVectors(vector1, vector2);
  console.log(sum); // { x: 3, y: 7 }
  
  const difference = subtractVectors(vector1, vector2);
  console.log(difference); // { x: 1, y: -1 }
  
  const product = multiplyVectorByScalar(vector1, 2);
  console.log(product); // { x: 4, y: 6 }
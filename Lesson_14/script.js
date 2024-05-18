// const array = ['hello', 'I',' love', 'js'];
// // const first = array[0];
// // console.log(first)
// const [first, , ,second] = array;
// console.log(first)
// console.log(second)

// const objA = {
//   name: "Alice",
//   age: 20,
//   city: "Lviv",
// };

// const city = 'Test';
// const {city: userCity, age} = objA;
// // console.log('city', city)
// console.log('userCity', userCity)

// console.log(objA)

// const objA = {
//   name: "Alice",
//   age: 20,
//   city: "Lviv",
//   hobbies: {
//     football: {
//       name: "football",
//       years: 4,
//     },
//   },
// };

// const {
//   hobbies: {
//     football: { name },
//   },
//   hobbies,
// } = objA;
// console.log("hobbies", hobbies);
// console.log(name);

// const objA = {
//   name: "Alice",
//   age: 20,
//   city: "Lviv",
//   hobbies: {
//     football: {
//       name: "football",
//       years: 4,
//     },
//   },
// };

// const objB = {
//     name: "Kate",
//     age: 20,
//     city: "Lviv",
//   };

// const mockObj = {
//   name: "User",
//   hobbies: {
//     football: {
//       name: "game",
//     },
//   },
// };

// function getInfo({
//   name: userName = "User",
//   hobbies: { football: { name: hobbiesName = "game" } = {} } = {},
// } = {}) {
//   console.log(`${userName} love play ${hobbiesName}`);
// }

// function getInfo({
//   name: userName,
//   hobbies: {
//     football: { name: hobbiesName },
//   } = mockObj.hobbies,
// } = mockObj) {
//   console.log(`${userName} love play ${hobbiesName}`);
// }
// getInfo(objA);
// getInfo(objB);

// https://www.jsdelivr.com/

// console.log(_)

// const input = document.querySelector("input");

// input.addEventListener("input", _.debounce(handlerGetValue, 600, {
//     // leading: true,
//     // trailing: false,
//     maxWait: 700
// }));

// function handlerGetValue(evt) {
//     // console.log(evt)
//   console.log(evt.target.value);
// }

// const input = document.querySelector("input");

// input.addEventListener("input", _.throttle(handlerGetValue, 600, {
//     // leading: false,
//     // trailing: false,
//   }));

// function handlerGetValue(evt) {
//   // console.log(evt)
//   console.log(evt.target.value);
// }

// const numbers = [1, 1, 1, 1, [1, 1, 1, 1, 1, [1, 1, 1, 1, [1, 1]]]];

// function getSum(arr) {
//   let total = 0;

//   for (const value of arr) {
//     if (Array.isArray(value)) {
//       total += getSum(value);
//     } else {
//       total += value;
//     }
//   }

//   return total;
// }

// console.log(getSum(numbers));

// function getStatus() {
//   const message = "Play football";
//   return function () {
//     console.log(message);
//   };
// }

// console.log(getStatus()())

// function counter() {
//   let value = 0;

//   return {
//     increment(){
//         value +=1;
//         console.log('increment', value)
//     },
//     decrement(){
//         value -=1;
//         console.log('decrement', value)
//     }
//   }
// }

// const inst1 = counter();
// const inst2 = counter();

// inst1.increment() //1
// inst1.increment() //2
// inst1.increment() //3

// inst2.decrement()

function getInstance(value) {
  let instance;
  function createInstance(value) {
    console.log('work');
    instance = value;
  }

  return {
    increment() {
      if (!instance) {
        createInstance(value);
      }
      instance += 1;
    },

    decrement(value) {
      if (!instance) {
        createInstance(value);
      }
      instance -= 1;
    },
    show(){
        console.log(instance)
    }
  };
}


const counter = getInstance(5);

counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.show()
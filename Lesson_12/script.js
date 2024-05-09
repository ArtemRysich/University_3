// *********Подія сlick********* \\
// Натискаючи на кнопку "Click me" змусь червоний квадратик зміщуватись на 50px по діагоналі

// const clickMe = document.querySelector(".js-click");
// const box = document.querySelector(".js-box");
// let step = 0;
// clickMe.addEventListener("click", handlerClick);

// function handlerClick() {
//     console.log(this)
//   step += 50;
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// }

// *********Подія input********* \\
// Виводь в консоль все що користувач вводить в input
// const input = document.querySelector(".js-user-name");
// const input2 = document.querySelector(".js-user-name-2");
// input.addEventListener("input", handlerInput);
// input2.addEventListener("input", handlerInput);

// function handlerInput(event) {
//   console.log(event);
//   const currentTarget = event.currentTarget;
//   console.dir(currentTarget.value);
// }

// *********Подія blur********* \\
// Користувач вводить в input своє ім'я після втрати фокусу отримує alert з вітальним повідомленням
// const input = document.querySelector(".js-user-name");

// input.addEventListener("blur", handlerBlur);

// function handlerBlur(event) {
// const name = event.currentTarget.value;

// alert(`${name} I\`m glad to see you`)
// }

// *********Подія submit********* \\
// Опрацюй форму та збери фідбек користувача в об'єкт

// const feedback = document.querySelector(".js-form");

// feedback.addEventListener("submit", handlerSendFeedback);

// function handlerSendFeedback(event) {
//   event.preventDefault();
//     console.dir(event.currentTarget);

//   //   const { email, comment, password } = event.currentTarget.elements;

//   //   console.log("email", email.value);
//   //   console.log("password", password.value);
//   //   console.log("comment", comment.value);

//   const formData = new FormData(event.currentTarget);

//   const data = {};

//   formData.forEach((value, key) => (data[key] = value));

//   console.log(data);
// }

// *********Подія keydown / keyup / keypress********* \\

// document.addEventListener("keydown", handlerKey);

// function handlerKey(evt) {
//   //   if (evt.code === "Escape") {
//   //     console.log("😂");
//   //   } else {
//   //     console.log("😫");
//   //   }

//   switch (evt.code) {
//     case "KeyA":
//       console.log("Enter key A");
//       break;
//     case "KeyC":
//       console.log("Enter key C");
//       break;
//     case "KeyD":
//       console.log("Enter key D");
//       break;
//   }
// }

// *********Обробка комбінацій клавіш********* \\
// function handlerKey(evt) {
//     if (evt.ctrlKey && evt.code === "KeyC") {
//       console.log('КАПІ ПАСТ')
//       evt.preventDefault();
//     }
//   }

// ***************Практика************** \\
// Реалізуй пошук автомобілів по сайту
// Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
// Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
// Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку

const cars = [
  {
    id: 1,
    car: "Audi",
    type: "A6",
    price: 30000,
    img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
  },
  {
    id: 2,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 3,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 4,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 5,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 6,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const elements = {
  form: document.querySelector(".js-form"),
  container: document.querySelector(".js-list"),
};

elements.form.addEventListener("submit", handlerSearchCars);

function handlerSearchCars(evt) {
  evt.preventDefault();

  const { query, options } = evt.currentTarget.elements;

  const result = cars.filter((item) =>
    item[options.value].toLowerCase().includes(query.value.toLowerCase().trim())
  );

  elements.container.innerHTML = createMarkup(result);
}

function createMarkup(arr) {
  return arr
    .map(
      ({ img, price, type, car, id }) => `
  <li class="car-card"  data-car-id="${id}">
    <img src="${img}" alt="${car}" class="car-image"/>
    <h2 class="car-title">${car}</h2>
    <h3 class="car-type">${type}</h3>
    <span class="car-price">${price}</span>
 </li>
  `
    )
    .join("");
}

elements.container.insertAdjacentHTML("afterbegin", createMarkup(cars));

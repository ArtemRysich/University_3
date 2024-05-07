// ******Пошук HTML елементу за допомогою querySelector****** \\

// За назвою тегу
// const title = document.querySelector('h1');
// console.log(title)

// За назвою класу

// const title = document.querySelector('.js-title')
// console.log(title)

// За ID

// const title = document.querySelector('#title')

// console.log(title)

// ******Пошук HTML елементів за допомогою querySelectorAll****** \\

// const items = document.querySelectorAll('li')
// const items = document.querySelectorAll(".js-item");
// console.log(items);

// Перетворення колекції до масиву

// console.log([...items])
// console.log(Array.from(items))

// ******Створення HTML елементів за допомогою createElement****** \\

// const li = document.createElement("li");
// const h2 = document.createElement("h2");
// const h3 = document.createElement("h3");

// // li.append(h2);

// li.appendChild(h2, h3)

// h2.textContent = 'Hello world'
// list.append(li)

// console.log(li);

// ******Створення HTML елементів за допомогою шаблонної розмітки****** \\
// const list = document.querySelector(".js-list");
// const staticCollection = document.querySelectorAll('.js-item');
// const dynamicCollection = document.getElementsByClassName('js-item');

// list.insertAdjacentHTML('beforeend', '<li class="js-item">Item 4</li>')

// console.log('staticCollection', staticCollection)
// console.log("dynamicCollection", dynamicCollection)
// const li = '<li><h2>Hello world</h2></li>'

// console.log(li)

// Метод insertAdjacentHTML
// list.insertAdjacentHTML('beforeend', li)

// Властивість innerHTML

// list.innerHTML = ''

// const items = [];
// const fragment = document.createDocumentFragment();
// const list = document.querySelector(".js-list");
// for (let i = 4; i <= 10; i += 1) {
//     const li = document.createElement("li");
//     li.textContent = "Item " + i;
//     fragment.appendChild(li);
// }
// console.dir(fragment)
// list.appendChild(fragment);

// ******Стилізація за допомогою властивості style****** \\

// const list = document.querySelector(".js-list")

// list.style.listStyle = 'none';
// list.style.color = 'red';
// list.style.fontSize = '20px';

// list.removeAttribute('style')

// list.style = ''
// як через js отримати всі computed styles елемента (не інлайнові стилі)?

// console.log(window.getComputedStyle(list))

// ******Стилізація за допомогою властивості classList****** \\

// const list = document.querySelector(".js-list");

// console.dir(list)
// Метод add

// list.classList.add('list')

// Метод remove
// list.classList.remove('list')

// Метод toggle

// list.classList.toggle('list')
// list.classList.toggle('list')

// console.log(list.classList.contains('list'))

// ******Системні атрибути****** \\
// const btn = document.querySelector('.js-btn')
// console.dir(btn)

// btn.hidden = true
// btn.hidden = false
// btn.disabled = true;
// btn.disabled = false;
// методи для роботи з атрибутами

// console.log(btn.hasAttribute('disabled'))
// btn.setAttribute('disabled', 'true')
// btn.removeAttribute('disabled')

// console.log(btn.hasAttribute('disabled'))

// ******Data атрибути****** \\

// btn.setAttribute('data-goods-id', 'goods-1')
// console.log(btn.getAttribute('data-goods-id'))
// console.log(btn.dataset)
// console.log(btn.dataset.goodsId)

// ***************************Практика************************* \\
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

const cars = [
  {
    id: 1,
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 3,
    model: "BMW",
    type: "5 series",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 4,
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 5,
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

// *******Варіант-1******* \\

// const list = document.querySelector(".js-list");

// function createMarkup(arr) {
//   const markup = arr.map(({ id, model, type, price, img }) => {
//     const li = document.createElement("li");
//     const imgEl = document.createElement("img");
//     const h2 = document.createElement("h2");
//     const h3 = document.createElement("h3");
//     const span = document.createElement("span");

//     // li.setAttribute("data-car-id", id);

//     li.dataset.carId = id;

//     imgEl.src = img;
//     imgEl.alt = model;

//     imgEl.style.width = "300px";

//     h2.textContent = model;
//     h3.textContent = type;
//     span.textContent = price;

//     li.append(imgEl, h2, h3, span);

//     return li;
//   });

//   list.append(...markup);
//   console.log(markup);
// }

// createMarkup(cars);
// *******Варіант-2******* \\
//

const list = document.querySelector(".js-list");

function createMarkup(arr) {
  const markup = arr.map(
    ({ id, model, type, price, img }) => `
    <li data-car-id="${id}">
    <img src="${img}" alt="${model}" width="300">
    <h2>${model}</h2>
    <h3>${type}</h3>
    <span>${price}</span>
  </li>
    `).join('')
    console.log(markup)

    list.insertAdjacentHTML('afterbegin', markup)
}

createMarkup(cars);

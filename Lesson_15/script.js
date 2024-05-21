// *********** localStorage *************** \\
// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

// *****Збереження в LS***** \\

// localStorage.setItem(LS_KEY, JSON.stringify(names));

// localStorage.setItem('qwerty', JSON.stringify({name: 'Alice'}));

// *****Читання з LS***** \\

// const value = localStorage.getItem('qwerty');
// console.log(value);
// console.log(JSON.parse(value));

// *****Видалення з LS***** \\

// localStorage.removeItem(LS_KEY)

// localStorage.removeItem('abc')

// *****Очищення LS******* \\

// localStorage.clear()

// ***Чому варто завжди використовувати метод JSON.stringify***\\

// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

// localStorage.setItem(LS_KEY, names);
// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));

// ***LS не може зберігати функції в жодній з їх інтерпретацій***\\.

// const LS_KEY = 'my function';

// function add(a, b) {
//     return a + b;
// }

// localStorage.setItem(LS_KEY, add)
// console.log(localStorage.getItem(LS_KEY));

// const calculator = {
//     a: 5,
//     b: 10,
//     add() {
//         return this.a + this.b
//     }
// }

// localStorage.setItem(LS_KEY, calculator)
// console.log(JSON.parse(localStorage.getItem(LS_KEY)));

// const local = document.querySelector('.local');
// const session = document.querySelector('.session')

// local.addEventListener('click', () => {
// localStorage.setItem('click local', 'Value in LS')
// })

// session.addEventListener('click', () => {
//     sessionStorage.setItem('click session', 'Value in SS')
// })

// *************Практика*************** \\
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (їх можна знайти в файлі products.json)
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів, для цього створи в об'єкті доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача перенаправляємо на сторінку Home

const instruments = [
  {
    id: 1,
    img: "https://static.dnipro-m.ua/cache/products/5009/catalog_origin_182887.jpg",
    name: "Шуруповерт",
    price: 150,
    description:
      "Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями.",
  },
  {
    id: 3,
    img: "https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg",
    name: "Шліфмашина",
    price: 1299,
    description:
      "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування.",
  },
  {
    id: 4,
    img: "https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",
    name: "Пила",
    price: 11049,
    description:
      "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.",
  },
  {
    id: 5,
    img: "https://static.dnipro-m.ua/cache/products/2300/catalog_origin_261037.jpg",
    name: "Рівень",
    price: 897,
    description:
      "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.",
  },
  {
    id: 6,
    img: "https://static.dnipro-m.ua/cache/products/6566/catalog_origin_287856.jpg",
    name: "Тример",
    price: 3699,
    description:
      "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм.",
  },
  {
    id: 7,
    img: "https://static.dnipro-m.ua/cache/products/6530/catalog_origin_287574.jpg",
    name: "Мотокоса",
    price: 11049,
    description:
      "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2.",
  },
  {
    id: 8,
    img: "https://static.dnipro-m.ua/cache/products/2745/catalog_origin_284077.jpg",
    name: "Генератор",
    price: 10890,
    description:
      "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.",
  },
];

const container = document.querySelector(".js-container");
const PRODUCT_LS_KEY = "checkout";
container.insertAdjacentHTML("afterbegin", createMarkup(instruments));
container.addEventListener("click", handlerAddProduct);

function handlerAddProduct(evt) {
  if (!evt.target.classList.contains("js-add")) {
    return;
  }
  const product = evt.target.closest(".js-product");
  const { productId } = product.dataset;
  const currentProduct = instruments.find(({ id }) => id === Number(productId));
  const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
  const idx = products.findIndex(({ id }) => id === Number(productId));

  if (!!~idx) {
    products[idx].qty += 1;
  } else {
    currentProduct.qty = 1;
    products.push(currentProduct);
  }

  localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products));
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price, description }) => `
    <li data-product-id="${id}" class="product-card js-product">
        <img src="${img}" alt="${name}" class="product-img">
        <h2 class="product-title"> ${name}</h2>
        <p class="product-description">${description}</p>
        <p class="product-price">${price} грн</p>
        <button class="product-add-btn js-add">Add to basket</button>
  </li>`
    )
    .join("");
}

// win + v або cmd + v  clipboard

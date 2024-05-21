const PRODUCT_LS_KEY = "checkout";
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
const selectors = {
  container: document.querySelector(".js-container"),
  totalPrice: document.querySelector(".js-total-price"),
  clear: document.querySelector(".js-clear"),
};

let totalPrice;

if (products.length) {
  selectors.clear.hidden = false;
  totalPrice = products.reduce(
    (acc, { qty, price }) => (acc += qty * price),
    0
  );
}

selectors.totalPrice.textContent = totalPrice
  ? `Total cost ${totalPrice} грн`
  : "Your basket is empty";

selectors.container.insertAdjacentHTML("afterbegin", createMarkup(products));
selectors.clear.addEventListener("click", handlerClearBasket);

function handlerClearBasket() {
  localStorage.removeItem(PRODUCT_LS_KEY);
  location.href = "../index.html";
}

function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, price, qty }) => `
<li class="cart-item">
<img src="${img}" alt="${name}" class="product-img">
<h2>${name}</h2>
<p>Quantity: ${qty} </p>
<p>Total price: ${qty * price}</p>
</li>`
    )
    .join("");
}

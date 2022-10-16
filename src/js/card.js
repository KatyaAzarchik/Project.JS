export let basketItem = document.querySelector(".basket-preview");
let basketItemParent = document.querySelector(".basket-dialog-window");
export let basketText = document.querySelector(".basket-text");
export let totalAmount = document.querySelector("#basket-total-amount");
import { basketItemParent } from "../js/basket.js";
import { clearBasketFoo } from "../js/basket.js";
export let cards = document.querySelector(".cards-list");
export let productsAtBasket = [];
export function addToBasket(data) {
  cards.addEventListener("click", (event) => {
    let newElem = document.createElement("div");
    let newElemProduct = document.createElement("div");
    let newElemPrice = document.createElement("div");
    let newElemContainer = document.querySelector(".new-element-container");
    newElem.classList.add("newBasketElem");
    newElem.id = event.target.parentElement.parentElement.parentElement.id;
    if (event.target.classList.contains("fa-cart-shopping")) {
      productsAtBasket.push({
        idOfCard: event.target.parentElement.parentElement.parentElement.id,
        amount:
          data[event.target.parentElement.parentElement.parentElement.id - 1]
            .discount,
        productName:
          data[event.target.parentElement.parentElement.parentElement.id - 1]
            .product,
      });
      let result = productsAtBasket.reduce((s, i) => (s = s + i.amount), 0);
      totalAmount.innerText = `Итого ${result} руб.`;
      clearBasketFoo(productsAtBasket);
      if (!data.id) {
        newElemProduct.innerText +=
          data[
            event.target.parentElement.parentElement.parentElement.id - 1
          ].product;
        newElemPrice.innerText += `${
          data[event.target.parentElement.parentElement.parentElement.id - 1]
            .discount
        } руб.`;
      }
      basketText.innerText = productsAtBasket.length;
      newElem.appendChild(newElemProduct);
      newElem.appendChild(newElemPrice);
      newElemContainer.appendChild(newElem);
      basketItemParent.show();
    }
  });
}

cards.addEventListener("click", (event) => {
  if (event.target.classList.contains("quick-view-btn")) {
    let quickViewWindow = document.querySelector(".dialog-window");
    quickViewWindow.show();
  }
});
cards.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-dialog")) {
    let quickViewWindow = document.querySelector(".dialog-window");
    quickViewWindow.close();
  }
});

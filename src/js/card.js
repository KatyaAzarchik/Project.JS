let basketItem = document.querySelector(".basket-preview");
let basketItemParent = document.querySelector(".basket-dialog-window");
import { basketItemParent } from "../js/basket.js";
export let cards = document.querySelector(".cards-list");
export let addToBasket = cards.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-cart-shopping")) {
    let newElem = document.createElement("div");
    newElem.classList.add("newBasketElem");
    basketItem.appendChild(newElem);
    basketItemParent.show();
  }
});
let quickViewWindow = document.querySelector(".dialog-window");
cards.addEventListener("click", (event) => {
  if (event.target.classList.contains("quick-view-btn")) {
    quickViewWindow.show();
  }
});
cards.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-dialog")) {
    quickViewWindow.close();
  }
});

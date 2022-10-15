export let basket = document.querySelector(".basket");
export let basketItemParent = document.querySelector(".basket-dialog-window");
import { basketText } from "../js/card.js";
import { totalAmount } from "../js/card.js";
let newElemContainer = document.querySelector(".new-element-container");
basket.addEventListener("click", () => {
  basketItemParent.show();
});
basket.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-basket-preview")) {
    basketItemParent.close();
  }
});
let clearBasket = document.querySelector(".clear-basket");
export function clearBasketFoo(arr) {
  clearBasket.addEventListener("click", () => {
    newElemContainer.innerHTML = "";
    totalAmount.innerHTML = `Итого 0 руб.`;
    arr.length = 0;
    basketText.innerText = arr.length;
    return;
  });
}

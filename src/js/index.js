import "./slider.js";
import "./card";
import "./basket";

import { cards } from "../js/card.js";

const URL = "https://6341984220f1f9d7997662f5.mockapi.io";

let description = document.querySelector(".description");
// let price = document.querySelector(".price");
// let cardImg = document.querySelector(".card-img");
// let cardContainer = document.querySelector(".card-container");
// let cad = document.querySelector(".card");
let discount = 0.9;

function renderCards() {
  fetch(`${URL}/wb`)
    .then((response) => response.json())
    .then((result) => {
      for (const key in result) {
        let card = document.createElement("div");
        let cardContainer = document.createElement("li");
        cardContainer.classList.add("card-container");
        card.classList.add("card");
        card.id = result[key].id;
        cardContainer.id = card.id;
        let img = document.createElement("IMG");
        img.classList.add("card-img");
        // img.src = result[key].img;
        img.append(result[key].img);
        card.appendChild(img);
        let price = document.createElement("div");
        price.classList.add("price");
        +price.append(+result[key].price);
        card.appendChild(price);
        discountAmount = Number(price) * discount;
        console.log(price);
        let discountPrice = document.createElement("div");
        discountPrice.classList.add("discount-price");
        discountPrice.innerHTML = discountAmount;
        card.appendChild(discountPrice);
        let addToBasket = document.createElement("div");
        addToBasket.classList.add("add-to-basket");
        let product = document.createElement("div");
        product.classList.add("description");
        product.append(result[key].product);
        card.append(product);
        addToBasket.innerHTML += `<i class="fa-solid fa-cart-shopping" id="shopping-basket"></i>`;
        let quickView = document.createElement("div");
        quickView.classList.add("quick-view");
        card.append(quickView);
        let quickViewbutton = document.createElement("button");
        quickViewbutton.classList.add("quick-view-btn");
        quickViewbutton.innerText += "Быстрый просмотр";
        quickView.append(quickViewbutton);
        let dialogWindow = document.createElement("dialog");
        dialogWindow.classList.add("dialog-window");
        let dialogWindowImg = document.createElement("div");
        dialogWindowImg.classList.add("quick-view-img");
        let quickViewImg = document.createElement("img");
        quickViewImg.src =
          "../src/img/ww_global_asos_design_halloween_moment_870x1110.avif";
        let closeDialogWindow = document.createElement("div");
        closeDialogWindow.innerText += "X";
        closeDialogWindow.classList.add("close-dialog");
        cardContainer.append(dialogWindow);
        dialogWindow.append(dialogWindowImg);
        dialogWindowImg.append(quickViewImg);
        dialogWindow.append(closeDialogWindow);
        card.append(addToBasket);
        cardContainer.appendChild(card);
        cards.appendChild(cardContainer);
      }
      console.log(result);
    });
}
renderCards();

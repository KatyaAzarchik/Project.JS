import { cards } from "../js/card.js";
const URL = "https://6341984220f1f9d7997662f5.mockapi.io";
function getData() {
  return fetch(`${URL}/WB1`).then((response) => response.json());
}
function renderCards(item) {
  const cardContainer = document
    .getElementById("template")
    .content.cloneNode(true);
  let cardContainers = cardContainer.querySelector(".card-container");
  let price = cardContainer.querySelector(".price");
  let img = cardContainer.querySelector(".card-img img");
  let quickViewImg = cardContainer.querySelector(".quick-view-img img");
  let product = cardContainer.querySelector(".description");
  let discount = cardContainer.querySelector(".discount-price");
  let totalPrice = item.price;
  let discountPercent = Math.round((item.discount / totalPrice) * 100);
  let discountPercentAtCard = cardContainer.querySelector(".discount-percent");
  discountPercentAtCard.textContent = `-${discountPercent}%`;
  cardContainers.id = item.id;
  quickViewImg.src = item.img;
  img.src = item.img;
  price.textContent = item.price;
  product.textContent = item.product;
  discount.textContent = item.discount;
  return cardContainer;
}
function renderToDom(nodes) {
  cards.append(...nodes);
}

import { addToBasket } from "../js/card";

getData().then((data) => {
  const cadElements = data.map(renderCards);
  renderToDom(cadElements);
  addToBasket(data);
});

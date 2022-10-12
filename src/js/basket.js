let basket = document.querySelector(".basket");
export let basketItemParent = document.querySelector(".basket-dialog-window");
basket.addEventListener("click", () => {
  basketItemParent.show();
});
basket.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-basket-preview")) {
    basketItemParent.close();
  }
});

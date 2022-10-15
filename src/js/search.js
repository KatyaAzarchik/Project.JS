let searchInput = document.querySelector("#input-search");
searchInput.addEventListener("input", (ev) => {
  let searchValue = ev.target.value.trim().toLowerCase();
  let products = document.querySelectorAll(".card-container");
  if (searchValue) {
    products.forEach((item) => {
      if (item.innerText.toLowerCase().search(searchValue) == -1) {
        item.classList.add("hide");
      }
    });
  } else {
    products.forEach((item) => {
      item.classList.remove("hide");
    });
  }
});

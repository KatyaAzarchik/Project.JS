let sliderImg = document.querySelectorAll(".banner-img img");
const sliderLine = document.querySelector(".slider-container");
const slider = document.querySelector(".banner-wrapper");
const rightArrow = document.querySelector(".slider-btn.right");
const leftArrow = document.querySelector(".slider-btn.left");
let count = 0;
let width;
function init() {
  width = slider.offsetWidth;
  sliderLine.style.width = width * sliderImg.length + "px";
  sliderImg.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  roolslider();
}
init();

rightArrow.addEventListener("click", function () {
  count++;
  if (count >= sliderImg.length) {
    count = 0;
  }

  roolslider();
});

leftArrow.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = sliderImg.length - 1;
  }
  roolslider();
});
window.addEventListener("resize", init);
function roolslider() {
  sliderLine.style.transform = "translate( -" + count * width + "px)";
}

// rightDot.addEventListener("click", () => {
//   count++;
//   if (count >= sliderImg.length) {
//     count = 0;
//   }
//   rightDot.style.width = "13px";
//   rightDot.style.height = "13px";
//   leftDot.style.width = "10px";
//   leftDot.style.height = "10px";
//   roolslider();
// });
// leftDot.addEventListener("click", () => {
//   count--;
//   if (count < 0) {
//     count = sliderImg.length - 1;
//   }
//   leftDot.style.width = "13px";
//   leftDot.style.height = "13px";
//   rightDot.style.width = "10px";
//   rightDot.style.height = "10px";
//   roolslider();
// });

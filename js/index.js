const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideBtnRight = document.querySelector(".slider-btn--right");
const slideBtnLeft = document.querySelector(".slider-btn--left");

// Initial state curSlide = 0
//  0%     100%   200%   300%
slides.forEach((s, i) => {
  s.style.transform = `translateX(${i * 100}%)`;
});
// Next state:
// -100%   0%     100%   200%

let curSlide = 0;
let maxSlide = slides.length - 1; // converting to zero base.

// When right slider button is clicked:
slideBtnRight.addEventListener("click", function (e) {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - curSlide) * 100}%)`;
  });
});

// When left slider button is clicked:
slideBtnLeft.addEventListener("click", function (e) {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - curSlide) * 100}%)`;
  });
});

// STICKY NAVIGATION
/* For homepage */
obs.observe(sectionHero);

/////////////////////////////////////////////////////////////
// MENU SLIDER
const menuSlider = function () {
  const menuSliders = document.querySelectorAll(".menu-slider");

  const pizzaDotsContainer = document.querySelector(`[data-dots="1"]`);
  const pastaDotsContainer = document.querySelector(`[data-dots="2"]`);
  const saladDotsContainer = document.querySelector(`[data-dots="3"]`);

  const pizzaSlider = document.querySelector(".menu-slider--1");
  const pastaSlider = document.querySelector(".menu-slider--2");
  const saladSlider = document.querySelector(".menu-slider--3");

  const pizzaSlides = document.querySelectorAll(".pizza-slide");
  const pastaSlides = document.querySelectorAll(".pasta-slide");
  const saladSlides = document.querySelectorAll(".salad-slide");

  const allTabs = document.querySelectorAll(".tab");
  const tabContainer = document.querySelector(".menu-tabs");

  // Functions

  const goToSlide = function (slides, slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };

  const createDots = function () {
    pizzaSlides.forEach((_, i) => {
      pizzaDotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dot" data-slide="${i}"></button>`
      );
    });

    pastaSlides.forEach((_, i) => {
      pastaDotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dot" data-slide="${i}"></button>`
      );
    });

    saladSlides.forEach((_, i) => {
      saladDotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dot" data-slide="${i}"></button>`
      );
    });
  };

  const dotSelect = function (e, slider, slides) {
    console.log("dotContainer clicked");
    if (e.target.classList.contains("dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slides, slide);
      activateDot(slider, slide);
    }
  };

  const activateDot = function (slider, slide) {
    console.log(slider);
    slider
      .querySelectorAll(".dot")
      .forEach((d) => d.classList.remove("dot--active"));
    slider
      .querySelector(`[data-slide="${slide}"]`)
      .classList.add("dot--active");
  };

  const init = function () {
    createDots();

    // Initial state curSlide = 0
    //  0%     100%   200%   300%
    goToSlide(pizzaSlides, 0);
    goToSlide(pastaSlides, 0);
    goToSlide(saladSlides, 0);

    activateDot(pizzaSlider, 0);
    activateDot(pastaSlider, 0);
    activateDot(saladSlider, 0);
  };

  // Event listeners
  // Event delegation used.
  pizzaDotsContainer.addEventListener("click", function (e) {
    dotSelect(e, pizzaSlider, pizzaSlides);
  });

  pastaDotsContainer.addEventListener("click", function (e) {
    dotSelect(e, pastaSlider, pastaSlides);
  });

  saladDotsContainer.addEventListener("click", function (e) {
    dotSelect(e, saladSlider, saladSlides);
  });

  tabContainer.addEventListener("click", function (e) {
    console.log(e.target);
    const clicked = e.target.closest(".tab");
    console.log(clicked);
    if (!clicked) return;
    // Set clicked tab to active tab.
    allTabs.forEach((t) => t.classList.remove("tab--active"));
    clicked.classList.add("tab--active");
    // Get the data attribute of clicked tab,
    // show the corresponding menu slider
    const { tab } = clicked.dataset;
    console.log(tab);
    menuSliders.forEach((s) => s.classList.remove("menu-slider--active"));
    document
      .querySelector(`.menu-slider--${tab}`)
      .classList.add("menu-slider--active");
    console.log(document.querySelector(`.menu-slider--${tab}`));
  });

  // Initialization
  init();
};

menuSlider();

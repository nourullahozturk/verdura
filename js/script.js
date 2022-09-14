////////////////////////////////////////////////////////////////
// MOBILE NAVIGATION FUNCTIONALITY

const header = document.querySelector(".header");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", function (e) {
  header.classList.add("nav-open");
  body.classList.add("stop-scrolling");
});

closeIcon.addEventListener("click", function (e) {
  header.classList.remove("nav-open");
  body.classList.remove("stop-scrolling");
});

///////////////////////////////////////////////////////////////////77
// STICKY NAVIGATION

const sectionHero = document.querySelector(".section-hero");
const sectionMenu = document.querySelector(".section-menu");
const main = document.querySelector("main");
const body = document.body;

const stickyNav = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) body.classList.add("sticky");
  if (entry.isIntersecting) body.classList.remove("sticky");
};

const obs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-96px`,
});

///////////////////////////////////////////////////////////////////77
// SMOOTH SCROLLING

const btnScrollToRes = document.querySelectorAll(".btn--scroll-to-res");
const sectionReservation = document.querySelector(".section-reservation");
const btnScrollToTop = document.querySelectorAll(".btn--scroll-to-top");

btnScrollToRes.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    sectionReservation.scrollIntoView({
      behavior: "smooth",
    });
  });
});
btnScrollToTop.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/////////////////////////////////////////////////////////////////
// FAQ ACCORDION FUNCTIONALITY

const faqItems = document.querySelectorAll(".faq-item");
const faq = document.querySelector(".faq");

faq.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("faq-icon")) {
    e.target.closest(".faq-item").classList.toggle("faq-item--open");
  }
});

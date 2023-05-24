const firstScreenSwiper = new Swiper(".first-screen-swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const catalogSwiper = new Swiper(".catalog-swiper", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".catalog-button-right",
    prevEl: ".catalog-button-left",
  },
});

const partnersSwiper = new Swiper(".partners-swiper", {
  direction: "horizontal",
  slidesPerView: 9,
  spaceBetween: 20,

  navigation: {
    nextEl: ".partner-button-right",
    prevEl: ".partner-button-left",
  },
});

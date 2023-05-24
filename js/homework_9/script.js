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

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: ".catalog-swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".catalog-button-right",
    prevEl: ".catalog-button-left",
  },
});

const partnersSwiper = new Swiper(".partners-swiper", {
  direction: "horizontal",
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 9,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: ".partner-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".partner-button-right",
    prevEl: ".partner-button-left",
  },
});

let burger = document.querySelector(".burger-menu");
let header = document.querySelector(".header");
let menu = document.querySelector(".header-menu");

function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    header.style.height = "360px";
    header.style.alignItems = "start";
    header.style.paddingTop = "15px";
  } else {
    menu.style.display = "none";
    header.style.height = "60px";
    header.style.alignItems = "center";
    header.style.paddingTop = "0";
  }
}

burger.addEventListener("click", toggleMenu);

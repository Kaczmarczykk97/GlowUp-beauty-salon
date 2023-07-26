const navigation = document.querySelector(".navigation");
const hamburgerMenu = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const iconArrRight = document.querySelectorAll(".arr-right");
const iconArrLeft = document.querySelectorAll(".arr-left");
const servicesRight = document.querySelectorAll(".services-right");
const servicesLeft = document.querySelectorAll(".services-left");
const offerImgLeft = document.querySelectorAll("#offer-img-left");
const offerImgRight = document.querySelectorAll("#offer-img-right");
const reviews = document.querySelectorAll(".review");

/*SCROLL PADDING*/
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

/*STICKY NAVIGATION*/
window.addEventListener("scroll", () => {
  if (window.scrollY >= navigationHeight) {
    navigation.classList.add("sticky");
  } else if (!navItems.classList.contains("active")) {
    navigation.classList.remove("sticky");
  }
});

/*HAMBURGER MENU - OPEN/CLOSE*/
hamburgerMenu.addEventListener("click", () => {
  navItems.classList.toggle("active");
  navigation.classList.add("sticky");
});

/*ABOUT CAROUSEL*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*OFFERS*/
window.addEventListener("resize", () => {
  const allElemets = [
    ...servicesRight,
    ...iconArrRight,
    ...offerImgLeft,
    ...servicesLeft,
    ...iconArrLeft,
    ...offerImgRight,
  ];
  if (window.innerWidth <= 700) {
    allElemets.forEach((el) => {
      el.classList.contains("open-right")
        ? el.classList.remove("open-right")
        : el.classList.remove("open-left");
    });
  }
});

iconArrRight.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.closest(".card-1")) {
      arrow.classList.toggle("open-right");
      servicesRight.forEach((serv) => {
        if (serv.closest(".card-1")) {
          serv.classList.toggle("open-right");
        }
      });
      offerImgLeft.forEach((img) => {
        if (img.closest(".card-1")) {
          img.classList.toggle("open-right");
        }
      });
    }
    if (e.target.closest(".card-3")) {
      arrow.classList.toggle("open-right");
      servicesRight.forEach((serv) => {
        if (serv.closest(".card-3")) {
          serv.classList.toggle("open-right");
        }
      });
      offerImgLeft.forEach((img) => {
        if (img.closest(".card-3")) {
          img.classList.toggle("open-right");
        }
      });
    }
  });
});

iconArrLeft.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.closest(".card-2")) {
      arrow.classList.toggle("open-left");
      servicesLeft.forEach((serv) => {
        if (serv.closest(".card-2")) {
          serv.classList.toggle("open-left");
        }
      });
      offerImgRight.forEach((img) => {
        if (img.closest(".card-2")) {
          img.classList.toggle("open-left");
        }
      });
    }
    if (e.target.closest(".card-4")) {
      arrow.classList.toggle("open-left");
      servicesLeft.forEach((serv) => {
        if (serv.closest(".card-4")) {
          serv.classList.toggle("open-left");
        }
      });
      offerImgRight.forEach((img) => {
        if (img.closest(".card-4")) {
          img.classList.toggle("open-left");
        }
      });
    }
  });
});

/*SCROLL REVEAL*/

const sr = ScrollReveal({
  origin: "top",
  distance: "8rem",
  duration: 2000,
  delay: 250,
});

sr.reveal(".review, .offer-content", { interval: 150 });

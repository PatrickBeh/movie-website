const navSlide = () => {
  const burger = document.querySelector(".navbar__burger");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navbarItem = document.querySelector(".navbar__item");
  // Toggle Nav
  burger.addEventListener("click", () => {
    navbarMenu.classList.toggle("navbar--active");

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

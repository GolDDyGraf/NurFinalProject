let headerSlider = new Swiper(".container__skills", {
    spaceBetween: 7,
    slidesPerView: 4,
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger__menu");
    const navList = document.getElementById("nav__list");

    burgerMenu.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});

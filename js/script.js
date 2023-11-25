let headerSlider = new Swiper(".container__skills", {
    slidesPerView: 4,
    spaceBetween: 7,
    loop: true,
    speed: 3200,
    autoplay: {
        delay: 100,
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

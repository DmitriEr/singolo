const burgerMenu = document.querySelector("#burger-menu");
const navigationMenu = document.querySelector("#nav");

burgerMenu.onclick = function() {
    navigationMenu.classList.toggle("header__navigation-on");
    navigationMenu.classList.toggle("header__navigation-off");

    document.querySelector(".logo").classList.toggle("logo-on");
    document.querySelector(".logo").classList.toggle("logo-off");
};

const hamburger = document.querySelector(".hamburger");
const contentNavbar = document.querySelector(".container-navbar-navbar");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    contentNavbar.classList.toggle("active");
    hamburger.classList.toggle("active");
    main.classList.toggle("active");
    footer.classList.toggle("active");
    navbar.classList.toggle("active");
});
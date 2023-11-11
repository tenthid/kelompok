document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.overlay').style.display = 'none';
});

const hamburger = document.querySelector(".hamburger");
const exitOverlay = document.querySelector(".exit-overlay");

hamburger.addEventListener("click", () => {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.non-overlay').style.display = 'none';
    document.querySelector('.overlay').style.right = '0';
});

exitOverlay.addEventListener("click", () => {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.non-overlay').style.display = 'block';
    document.querySelector('.overlay').style.right = '-100%';
});

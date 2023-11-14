const hamburger = document.querySelector(".hamburger");
const contentNavbar = document.querySelector(".container-navbar");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const navbar = document.querySelector(".navbar");
const product = document.querySelector(".container-overlay-product");
const productH1 = document.querySelector(".container-overlay-product h1");
const productMenu = document.querySelector(".overlay-product-menu");
const productCategory = document.querySelector(".container-product-category");
const menuCategory = document.querySelector(".product-category-menu");
const arrowDown = document.querySelector(".container-product-category .container-link-navbar i");
const productLink = document.querySelector(".container-product-category .container-link-navbar a");

hamburger.addEventListener("click", () => {
    contentNavbar.classList.toggle("active");
    hamburger.classList.toggle("active");
    main.classList.toggle("active");
    footer.classList.toggle("active");
    navbar.classList.toggle("active");
});

product.addEventListener("click", () => {
    product.classList.toggle("active");
    productH1.classList.toggle("active");
    productMenu.classList.toggle("active");
});

productCategory.addEventListener("click", () => {
    productCategory.classList.toggle("active");
    menuCategory.classList.toggle("active");
    arrowDown.classList.toggle("active");
    productLink.classList.toggle("active");
});

/*script pembelian*/
// $(document).ready(function() {
 
//     $('.color-choose input').on('click', function() {
//         var hoodieColor = $(this).attr('data-image');
   
//         $('.active').removeClass('active');
//         $('.left-column img[data-image = ' + hoodieColor + ']').addClass('active');
//         $(this).addClass('active');
//     });
   
//   });

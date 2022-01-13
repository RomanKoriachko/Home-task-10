const productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".add-cart");
// console.log(addToCartBtns);

for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener ("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
        // ++productsCountEl.textContent;
    });
}

const likeProductsBtn = document.querySelectorAll(".like");
likeProductsBtn.forEach((item) => {
    item.addEventListener("click", function() {
        item.classList.toggle("clicked");
    });
});

const detailsButton = document.querySelectorAll(".details");
const modalForm = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close");

function openModal() {
    modalForm.classList.add("show");
    modalForm.classList.remove("hide");
}
function closeModal() {
    modalForm.classList.add("hide");
    modalForm.classList.remove("show");
}

detailsButton.forEach((item) => {
    item.addEventListener("click", function() {
        modalForm.classList.add("show");
    });
});

btnClose.addEventListener("click", closeModal);

$(document).ready(function(){
    $('.slider').slick({
        dots:true,
    });
  });



// btnClose.addEventListener("click", function(){
//     modalForm.classList.add("hide");
//     modalForm.classList.remove("show");
// });


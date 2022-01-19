const productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".add-cart");
// console.log(addToCartBtns);

for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener ("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
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

// мой вариант
// let isNotTriggered = true;
// window.onscroll = function(){
//     const scrolling = window.scrollY;
//     console.log(scrolling);
//     if(scrolling > 1200 && isNotTriggered == true){
//         modalForm.classList.add("show");
//         isNotTriggered = false;
//     } else {
//         modalForm.classList.add("hide");
//     } 
// }

// Варинат с урока
function showmodalByScroll() {
    if (window.pageYOffset >= document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll",showmodalByScroll);
    }
}
window.addEventListener("scroll", showmodalByScroll,);

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplatSpeed: 3000,
    });
});


// btnClose.addEventListener("click", function(){
//     modalForm.classList.add("hide");
//     modalForm.classList.remove("show");
// });


// Счетчик товаров и ограничение по ним от 1 до 10
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");


// для всех счетчиков
decrementBtns.forEach((item) => {
    item.addEventListener("click", function(){
        let thisInput = this.parentElement.querySelector(".input");
        let thisDecrementBtn = this.parentElement.querySelector(".decrement-button");
        let thisIncrementBtn = this.parentElement.querySelector(".increment-button");
        let currentValue = +thisInput.value;
        let nextValue = currentValue - 1;
        thisInput.value = nextValue;
        if(nextValue < 10) {
            thisIncrementBtn.disabled = false;
        };
        if(nextValue <= 1) {
            thisDecrementBtn.disabled = true;
        }
    });
});

incrementBtns.forEach((item) => {
    item.addEventListener("click", function(){
        let thisInput = this.parentElement.querySelector(".input");
        let thisDecrementBtn = this.parentElement.querySelector(".decrement-button");
        let thisIncrementBtn = this.parentElement.querySelector(".increment-button");
        let currentValue = +thisInput.value;
        let nextValue = currentValue + 1;
        thisInput.value = nextValue;
        if(thisInput.value > 1) {
            thisDecrementBtn.disabled = false;
        };
        if(nextValue >= 10) {
            thisIncrementBtn.disabled = true;
        }
    });
})





// для одного счетчика
// decrementBtns.addEventListener("click", function(){
//     let currentValue = +quantityInput.value;
//     let nextValue = currentValue - 1;
//     quantityInput.value = nextValue;
//     if(quantityInput.value < 10) {
//         incrementBtns.disabled = false;
//     };
//     chekingMinValue();
// });

// function chekingMinValue() {
//     if(quantityInput.value <= 1){
//         decrementBtns.disabled = true;
//     }
// }
// function chekingMaxValue() {
//     if(quantityInput.value >= 10){
//         incrementBtns.disabled = true;
//     }
// }

// incrementBtns.addEventListener("click", function(){
//     let currentValue = +quantityInput.value;
//     let nextValue = currentValue + 1;
//     quantityInput.value = nextValue;
//     if(quantityInput.value > 1) {
//         decrementBtns.disabled = false;
//     };
//     chekingMaxValue();
// });


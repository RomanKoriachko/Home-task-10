const productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".add-cart");
// console.log(addToCartBtns);

for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener ("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + +quantityInput[i].value;
        quantityInput[i].value = 1;
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


// for (let i = 0; i < quantityInput.length; i++) {
//     let currentValue = +quantityInput[i].value;
//     toggleButtonState(currentValue, incrementBtns[i], decrementBtns[i]);
// }

// function toggleButtonState(count, incrementBtns, decrementBtns) {
//   decrementBtns.disabled = count <= minCount;
//   incrementBtns.disabled = count >= maxCount;
// }

// for(let i = 0; i < incrementBtns.length; i++) {
//     incrementBtns[i].addEventListener("click", function () {
//         let currentValue = +quantityInput[i].value;
//         let nextValue = currentValue + 1;
//         quantityInput[i].value = nextValue;
        
//         toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
//         });
// }

// for(let i = 0; i < decrementBtns.length; i++) {
//     decrementBtns[i].addEventListener("click", function () {
//         let currentValue = +quantityInput[i].value;
//         let nextValue = currentValue - 1;
//         quantityInput[i].value = nextValue;
      
//         toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
//       });
// }

 
// let audi = {
//     model: "A4",
//     color: "black",
//     year: "2013",
// };
// let bmw = {
//     model: "328",
//     color: "grey",
//     year: "2013",
// };
// let audi = {
//     model: "A4",
//     color: "black",
//     year: "2013",
// };

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField, minCount = 1, maxCount = 5) {
        this.domRefs = {
            incrementBtn,
            decrementBtn,
            inputField,
        };
    

    this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= minCount;
        this.domRefs.incrementBtn.disabled = count >= maxCount;
    };

    this.toggleButtonState();

    this.increment = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
      };

    this.decrement = function () {
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
      };

    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
    
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}
let counter1;
for(i = 0; i < quantityInput.length; i++) {
    counter1 = new Counter(incrementBtns[i],decrementBtns[i],quantityInput[i]);
}


   










// для всех счетчиков
// decrementBtns.forEach((item) => {
//     item.addEventListener("click", function(){
//         let thisInput = this.parentElement.querySelector(".input");
//         let thisDecrementBtn = this.parentElement.querySelector(".decrement-button");
//         let thisIncrementBtn = this.parentElement.querySelector(".increment-button");
//         let currentValue = +thisInput.value;
//         let nextValue = currentValue - 1;
//         thisInput.value = nextValue;
//         if(nextValue < 10) {
//             thisIncrementBtn.disabled = false;
//         };
//         if(nextValue <= 1) {
//             thisDecrementBtn.disabled = true;
//         }
//     });
// });

// incrementBtns.forEach((item) => {
//     item.addEventListener("click", function(){
//         let thisInput = this.parentElement.querySelector(".input");
//         let thisDecrementBtn = this.parentElement.querySelector(".decrement-button");
//         let thisIncrementBtn = this.parentElement.querySelector(".increment-button");
//         let currentValue = +thisInput.value;
//         let nextValue = currentValue + 1;
//         thisInput.value = nextValue;
//         if(thisInput.value > 1) {
//             thisDecrementBtn.disabled = false;
//         };
//         if(nextValue >= 10) {
//             thisIncrementBtn.disabled = true;
//         }
//     });
// })





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


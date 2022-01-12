const productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".add-cart");
// console.log(addToCartBtns);

for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener ("click", function() {
        ++productsCountEl.textContent;
    });
}

const likeProductsBtn = document.querySelectorAll(".like");
// likeProductsBtn = 'clicked';
// console.log(likeProductsBtn);
// for(let u = 0; u < likeProductsBtn.length; u++) {
//     likeProductsBtn[u].addEventListener ("click", function() {
//         document.body.style.backgroundColor = '#2c71b8';
//     });
// }
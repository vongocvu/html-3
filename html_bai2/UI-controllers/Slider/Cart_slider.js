import { AllProducts } from "../../data/Products.js";
import { Slider } from "./handle_sliders.js";
import {show_cart,ProductInCart} from "../../UI-controllers/Cart/showCart.js";




const list_product_add = document.getElementById("product_add_like");
// const emptys = document.querySelector(".empty");
const NewProduct = AllProducts;

export function showCart_slide() {
  list_product_add.innerHTML = "";
  NewProduct.forEach((productAdd) => {
    list_product_add.innerHTML += `
                  <div class="item-product-detail-cart sliders">
                  <div class="img-product-cart">
                  <img src="${productAdd.image}" />
                  </div>
                  <div class="text-item-cart">
                     <h1>${productAdd.name}</h1>
                     <div class="item-size-color">
                         <span>${productAdd.size[0]} </span>
                         <span>${productAdd.color[0]}</span>
                     </div>
                     <span class="item-price-sell">$${productAdd.price_sell}</span>
                       <div class="chung">
                       <div class="tang-giam" product_id="${productAdd.id}">
                       <span class="prev_btn">-</span>
                         <span class="item-quantity">01</span>
                       <span class="next_btn">+</span>
                       <div class ="btn-add-sugguets-product" product_id="${productAdd.id}">
                            <button class = "addlike" productAdd_id=${productAdd.id}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1674_1280)">
                            <path d="M6.00004 14.6666C6.36823 14.6666 6.66671 14.3682 6.66671 14C6.66671 13.6318 6.36823 13.3333 6.00004 13.3333C5.63185 13.3333 5.33337 13.6318 5.33337 14C5.33337 14.3682 5.63185 14.6666 6.00004 14.6666Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.3333 14.6666C13.7015 14.6666 14 14.3682 14 14C14 13.6318 13.7015 13.3333 13.3333 13.3333C12.9651 13.3333 12.6666 13.6318 12.6666 14C12.6666 14.3682 12.9651 14.6666 13.3333 14.6666Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M0.666626 0.666687H3.33329L5.11996 9.59335C5.18092 9.90029 5.3479 10.176 5.59166 10.3722C5.83541 10.5684 6.14042 10.6727 6.45329 10.6667H12.9333C13.2462 10.6727 13.5512 10.5684 13.7949 10.3722C14.0387 10.176 14.2057 9.90029 14.2666 9.59335L15.3333 4.00002H3.99996" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                            <defs>
                            <clipPath id="clip0_1674_1280">
                            <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                            </defs>
                            </svg>
                            </button>
                       </div>
                       </div>
                       </div>
                  </div>
                  </div>
                  `;
  });

  const prevs = document.querySelectorAll(".prev_btn");
  const nexts = document.querySelectorAll(".next_btn");
  edit_quantity(prevs, nexts);

  const btns = document.querySelectorAll(".btn-add-sugguets-product");
  addProductSugguest(btns);
}

function edit_quantity(prevs, nexts) {
  let count = 1;
  prevs.forEach((btn) => {
    btn.addEventListener("click", () => {
      count--;
      if (count < 1) {
        count = 1;
      }
      btn.parentElement.children[1].innerText = `${count < 10 ? 0 : ""}${count}`;
    });
  });

  nexts.forEach((btn) => {
    btn.addEventListener("click", () => {
      count++;
      btn.parentElement.children[1].innerText = `${count < 10 ? 0 : ""}${count}`;
    });
  });
}

function addProductSugguest(btns) {
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
    
      if (
        ProductInCart.some(
          (product) => product.id === parseInt(btn.getAttribute("product_id"))
        )
      ) {
        ProductInCart.forEach((product, index) => {
          if (product.id === parseInt(btn.getAttribute("product_id"))) {
            ProductInCart[index].quantity += parseInt(
              btn.parentElement.children[1].innerText
            );
          }
        });
      } else {
        AllProducts.forEach((product, index) => {
          if (product.id === parseInt(btn.getAttribute("product_id"))) {
            ProductInCart.unshift({ ...product, quantity: parseInt(btn.parentElement.children[1].innerText) });
          }
        });
      }

      show_cart();
     
    });
  });
}

showCart_slide();

// handler change slide
const slider_product = document.querySelector(".also-add");
const prev = document.getElementById("prev-slider");
const next = document.getElementById("next-slider");
Slider(prev, next, slider_product);

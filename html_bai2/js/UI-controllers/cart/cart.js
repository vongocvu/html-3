import { AllProducts } from "../../data/products.js";
import {
  totalCart,
  deleteProduct,
  isProductInCart,
  addProductToCart,
  updateProductQuantity,
} from "../../service/product.js";
import {cartItems} from "../../service/product.js"
import { countdown } from "../countdown-timer.js";
import { showCartSlider } from "../slider/slider-product.js";

export function AddTocart() {
  const btn_add_to_cart = document.querySelectorAll(".btn-add-to-cart");
  let box_cart = document.querySelector(".box-cart");
  
  btn_add_to_cart.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.getAttribute("product_id"));

      if (isProductInCart(productId)) {
        updateProductQuantity(productId);
      } else {
        addProductToCart(productId);
      }

      box_cart.style.display = "block";
      document.querySelector(".notification_cart").innerHTML = `
              <div class ="successful">
              <p class="message">Product Add To Cart Successful</p>
              </div>
        `;
      setTimeout(() => {
        document.querySelector(".notification_cart").innerHTML = ``;
      }, 2000);

      showCart();
    });
  });
}




export function showCart() {
  cart.innerHTML = "";
  AllProducts.forEach((product) => {
    cartItems.forEach((productInCart) => {
      if (product.id === productInCart.id) {
        cart.innerHTML += `
        <div class="item-product-detail-cart  item-product-detail ">
        <div class="img-product-cart">
        <img src="${product.image[0]}" />
        </div>
        <div class="text-item-cart">
           <h1>${product.name}</h1>
           <div class="item-size-color">
               <span>${product.size[0]}, </span>
               <span>${product.color[0]}</span>
           </div>
           <span class="item-price-sell">$${product.price_sell}</span>
             <div class="chung">
             <div class="tang-giam" product_id="${product.id}">
               <span class="prev_btn">-</span>
               <span class="item-quantity">${
                 productInCart.quantity < 10 ? 0 : ""
               }${productInCart.quantity}</span>
               <span class="next_btn">+</span>
             </div>
             <div class ="xoa_product" >
                 <p class = "xoa_sp" product_id = "${product.id}">Remove</p>
             </div>
             </div>

        </div>
        </div>
       `;
      }
    });
  });

  let prev_btns = document.querySelectorAll(".prev_btn");
  let next_btns = document.querySelectorAll(".next_btn");

  editQuantityEvent(prev_btns, next_btns, cartItems);
  initializeDeleteButtonsEvent(document.querySelectorAll(".xoa_sp"));
  showCartSlider();
  countdown();
  gettotalCart();
}



//TOTAL
function updateCartUI(total) {
  const total_cart = document.getElementById("total-cart");
  total_cart.innerText = `$${total}.00`;
}
function gettotalCart() {
  const total = totalCart();
  updateCartUI(total);
}
gettotalCart();
// DELETE PRODUCT
function handleDeleteButtonClick(del_sp) {
  const productId = parseInt(del_sp.getAttribute("product_id"));
  deleteProduct(productId);
  showCart();
}

function initializeDeleteButtonsEvent(delete_btns) {
  delete_btns.forEach((del_sp) => {
    del_sp.addEventListener("click", () => {
      handleDeleteButtonClick(del_sp);
    });
  });
}

//Cập nhật số lượng sản phẩm trong giỏ hàng
export function editQuantityEvent(prev_btns, next_btns, data) {
  prev_btns.forEach((prev) => {
    prev.addEventListener("click", () => {
      data.forEach((product, index) => {
        if (
          product.id === parseInt(prev.parentElement.getAttribute("product_id"))
        ) {
          if (product.quantity > 1) {
            product.quantity = product.quantity - 1;
          }
        }
      });
      showCart();
    });
  });

  next_btns.forEach((next) => {
    next.addEventListener("click", () => {
      data.forEach((product, index) => {
        if (
          product.id === parseInt(next.parentElement.getAttribute("product_id"))
        ) {
          product.quantity += 1;
        }
      });
      showCart();
    });
  });
}

// Close box cart
document.querySelector(".close-svg").addEventListener("click", () => {
  let box_cart = document.querySelector(".box-cart");
  box_cart.style.display = "none";
});

import { allProducts } from "../../data/products.js";
import { totalCart, deleteProduct } from "../../service/product.js";
import { getProductInCart } from "../../service/product.js";
import { countdown } from "../countdown-timer.js";
import { showCartSlider } from "../slider/slider-product.js";
import { addOrUpdateProductInCart } from "../../service/product.js";

export function addToCart() {
  const btnAddToCart = document.querySelectorAll(".btn-add-to-cart");
  let boxCart = document.querySelector(".box-cart");

  btnAddToCart.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.getAttribute("product_id"));
      addOrUpdateProductInCart(productId);
      boxCart.style.display = "block";
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
  const cartItems = getProductInCart();
  cart.innerHTML = "";
  allProducts.forEach((product) => {
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

  let prevBtns = document.querySelectorAll(".prev_btn");
  let nextBtns = document.querySelectorAll(".next_btn");

  editQuantityEvent(prevBtns, nextBtns, cartItems);
  initializeDeleteButtonsEvent(document.querySelectorAll(".xoa_sp"));
  showCartSlider();
  countdown();
  gettotalCart();
}

//TOTAL
function updateCartUI(total) {
  const totalCart = document.getElementById("total-cart");
  totalCart.innerText = `$${total}.00`;
}
function gettotalCart() {
  const total = totalCart();
  updateCartUI(total);
}
gettotalCart();
// DELETE PRODUCT
function handleDeleteButtonClick(deleteProducts) {
  const productId = parseInt(deleteProducts.getAttribute("product_id"));
  deleteProduct(productId);
  showCart();
}

function initializeDeleteButtonsEvent(deleteBtn) {
  deleteBtn.forEach((deleteProducts) => {
    deleteProducts.addEventListener("click", () => {
      handleDeleteButtonClick(deleteProducts);
    });
  });
}

//Cập nhật số lượng sản phẩm trong giỏ hàng
export function editQuantityEvent(prevBtns, nextBtns, data) {
  prevBtns.forEach((prev) => {
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

  nextBtns.forEach((next) => {
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
  let boxCart = document.querySelector(".box-cart");
  boxCart.style.display = "none";
});

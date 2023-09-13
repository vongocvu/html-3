// import { AllProducts } from "../../data/Products.js";
// import { showCart_slide } from "../../UI-controllers/Slider/Cart_slider.js";
// import { count_down } from "../../utils/CountDown.js";

// export let ProductInCart = [];

// export function AddTocart() {
//   const btn_add_to_cart = document.querySelectorAll(".btn-add-to-cart");
//   let box_cart = document.querySelector(".box-cart");
//   // const cart = document.getElementById("cart");

//   btn_add_to_cart.forEach((btn) => {
//     btn.addEventListener("click", () => {
     
//       const product_id = parseInt(btn.getAttribute("product_id")); // convert string to Interger...
//       if (ProductInCart.some((product) => product.id === product_id)) {
//         // kiem tra san pham vua them co trong gio hang chua
//         ProductInCart.forEach((data, index) => {
//           if (data.id === product_id) {
//             ProductInCart[index].quantity += 1; // neu co thi update quantiy len 1
//           }
//         });
//       } else {
//         // neu khong co trong gio hang thi them moi san pham vao
//         AllProducts.forEach((data) => {
//           if (data.id === product_id) {
//             ProductInCart.push({ ...data, quantity: 1 });
//           }
//         });
//       }

//       box_cart.style.display = "block";
//       document.querySelector(".notification_cart").innerHTML = `
//             <div class ="successful">
//             <p class="message">Product Add To Cart Successful</p>
//             </div>
//       `;
//       setTimeout(() => {
//         document.querySelector(".notification_cart").innerHTML = ``;
//       }, 2000);

//       show_cart();
     
//     });
//   });
// }

// export function show_cart() {
//   cart.innerHTML = "";
//   ProductInCart.forEach((product) => {
//     cart.innerHTML += `
//          <div class="item-product-detail-cart  item-product-detail ">
//          <div class="img-product-cart">
//          <img src="${product.image[0]}" />
//          </div>
//          <div class="text-item-cart">
//             <h1>${product.name}</h1>
//             <div class="item-size-color">
//                 <span>${product.size[0]}, </span>
//                 <span>${product.color[0]}</span>
//             </div>
//             <span class="item-price-sell">$${product.price_sell}</span>
//               <div class="chung">
//               <div class="tang-giam" product_id="${product.id}">
//                 <span class="prev_btn">-</span>
//                 <span class="item-quantity">${product.quantity < 10 ? 0 : ""}${
//       product.quantity
//     }</span>
//                 <span class="next_btn">+</span>
//               </div>
//               <div class ="xoa_product" >
//                   <p class = "xoa_sp" product_id = "${product.id}">Remove</p>
//               </div>
//               </div>

//          </div>
//          </div>
//         `;
//   });
//   let prev_btns = document.querySelectorAll(".prev_btn");
//   let next_btns = document.querySelectorAll(".next_btn");
  
//   edit_quantity(prev_btns, next_btns, ProductInCart);
//   delete_product(document.querySelectorAll(".xoa_sp"));
//   showCart_slide();
//   count_down();
//   totalCart();
 
// }


//       function totalCart(){
//         const total_cart = document.getElementById("total-cart");
//         let total = 0 ;
//         ProductInCart.forEach((product)=>{
//             total += parseInt(product.price_sell) * parseInt(product.quantity);

//         });
//         total_cart.innerText =`$${total}.00`;
//       }
// function delete_product(delete_btns) {
//   delete_btns.forEach((del_sp) => {
//     del_sp.addEventListener("click", () => {
//       ProductInCart.forEach((product, index) => {
//         if (product.id === parseInt(del_sp.getAttribute("product_id"))) {
//           ProductInCart.splice(index, 1);
//         }
//       });
//       show_cart();
      
     
//     });
//   });
// }

// export function edit_quantity(prev_btns, next_btns, data) {
//   prev_btns.forEach((prev) => {
//     prev.addEventListener("click", () => {
//       data.forEach((product, index) => {
//         if (
//           product.id === parseInt(prev.parentElement.getAttribute("product_id"))
//         ) {
//           if (product.quantity > 1) {
//             product.quantity = product.quantity - 1;
//           }
//         }
//       });
//       show_cart();
//     });
//   });

//   next_btns.forEach((next) => {
//     next.addEventListener("click", () => {
//       data.forEach((product, index) => {
//         if (
//           product.id === parseInt(next.parentElement.getAttribute("product_id"))
//         ) {
//           product.quantity += 1;
//         }
//       });
//       show_cart();
//     });
//   });
// }

// // Close box cart
// document.querySelector(".close-svg").addEventListener("click", () => {
//   let box_cart = document.querySelector(".box-cart");
//   box_cart.style.display = "none";
// });
 



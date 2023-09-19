// import { ProductInCart } from "../UI-controllers/cart/cart.js";
import { AllProducts } from "../data/products.js";
export const ProductInCart = [];
function getProductInCart() {
  return ProductInCart;
}

export const cartItems = getProductInCart();

//Kiểm tra sản phẩm có tồn tại hay chưa
export function isProductInCart(productId) {
  return cartItems.some((product) => product.id === productId);
}

// Hàm thêm sản phẩm vào giỏ hàng khi sản phẩm đó chưa tồn tại thì số lượng được cập nhật là 1
export function addProductToCart(productId) {
  cartItems.push({ id: productId, quantity: 1 });
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng khi sản phẩm đã tồn tại
export function updateProductQuantity(productId) {
  cartItems.map((data) => {
    if (data.id === productId) {
      data.quantity += 1;
    }
  });
}

//TOTAL PRODUCTS
export function totalCart() {
  let total = 0;
  AllProducts.forEach((product) => {
    let total1 = cartItems.reduce((accumulator, productIncart) => {
      let total_temp = 0;
      if (product.id === productIncart.id) {
        const productPrice = parseInt(product.price_sell);
        const productQuantity = parseInt(productIncart.quantity);
        total_temp = productPrice * productQuantity;
      }
      return accumulator + total_temp;
    }, 0);
    total += total1; 
  });
  return total;
}

//DELETE PRODUCT

export function deleteProduct(productId) {
 
  const index = cartItems.filter((product) => product.id === productId);
  if (index !== -1) {
    cartItems.splice(index, 1);
  }
}

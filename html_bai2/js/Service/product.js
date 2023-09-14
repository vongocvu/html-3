import { ProductInCart } from "../UI-controllers/Cart/showCart.js";
import { AllProducts } from "../data/Products.js";

//Kiểm tra sản phẩm có tồn tại hay chưa
export function isProductInCart(productId) {
  return ProductInCart.some((product) => product.id === productId);
}

// Hàm thêm sản phẩm vào giỏ hàng khi sản phẩm đó chưa tồn tại thì số lượng được cập nhật là 1
export function addProductToCart(productId) {
  ProductInCart.push({ id: productId, quantity: 1 });
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng khi sản phẩm đã tồn tại
export function updateProductQuantity(productId) {
  ProductInCart.map((data, index) => {
    if (data.id === productId) {
      ProductInCart[index].quantity += 1;
    }
  });
}

//TOTAL PRODUCTS
export function total_Cart() {
  const total = ProductInCart.reduce((accumulator, product) => {
    const productPrice = parseInt(product.price_sell);
    const productQuantity = parseInt(product.quantity);
    return accumulator + productPrice * productQuantity;
  }, 0);

  return total;
}

//DELETE PRODUCT

export function deleteProduct(productId) {
  const index = ProductInCart.filter((product) => product.id === productId);
  if (index !== -1) {
    ProductInCart.splice(index, 1);
  }
}

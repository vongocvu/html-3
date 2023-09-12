
import { ProductInCart } from "../UI-controllers/Cart/showCart.js";
import { AllProducts } from "../data/Products.js";


export function isProductInCart(productId) {
    return ProductInCart.some((product) => product.id === productId);
  }
  
  // Hàm thêm sản phẩm vào giỏ hàng
 export function addProductToCart(productId) {
    AllProducts.forEach((data) => {
      if (data.id === productId) {
        ProductInCart.push({ ...data, quantity: 1 });
      }
    });
  }
  
  // Hàm cập nhật số lượng sản phẩm trong giỏ hàng
export  function updateProductQuantity(productId) {
    ProductInCart.forEach((data, index) => {
      if (data.id === productId) {
        ProductInCart[index].quantity += 1;
      }
    });
  }

//TOTAL
export function total_Cart (){
    let total = 0 ;
    ProductInCart.forEach((product)=>{
        total += parseInt(product.price_sell) * parseInt(product.quantity);

    });
    return total ;
}
//DELETE PRODUCT
export function deleteProduct(productId) {
    const index = ProductInCart.findIndex(product => product.id === productId);
    if (index !== -1) {
      ProductInCart.splice(index, 1);
    }
  }

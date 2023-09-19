// import { productInCart } from "../UI-controllers/cart/cart.js";
import { allProducts } from "../data/products.js";
export var productInCart = [];
export function getProductInCart() {
  return  productInCart;

}



//Kiểm tra sản phẩm có tồn tại hay chưa
// export function isproductInCart(productId) {
//   return productInCart.some((product) => product.id === productId);
// }

// // Hàm thêm sản phẩm vào giỏ hàng khi sản phẩm đó chưa tồn tại thì số lượng được cập nhật là 1
// export function addProductToCart(productId) {
//   productInCart.push({ id: productId, quantity: 1 });
// }

// // Hàm cập nhật số lượng sản phẩm trong giỏ hàng khi sản phẩm đã tồn tại
// export function updateProductQuantity(productId) {
//   productInCart.map((data) => {
//     if (data.id === productId) {
//       data.quantity += 1;
//     }
//   });
// }

export function addOrUpdateProductInCart(productId , qty) {
          if(productInCart.some((product) => product.id === productId)){
              productInCart.map((data) =>{
                if (data.id === productId) {
                    data.quantity += qty ;
                }
              });
          }else {
            productInCart.push({ id: productId, quantity: 1 });
          }
}




//TOTAL PRODUCTS
// export function totalCart() {
//   let total = 0;
//   AllProducts.forEach((product) => {
//     let total1 = productInCart.reduce((accumulator, productIncart) => {
//       let total_temp = 0;
//       if (product.id === productIncart.id) {
//         const productPrice = parseInt(product.price_sell);
//         const productQuantity = parseInt(productIncart.quantity);
//         total_temp = productPrice * productQuantity;
//       }
//       return accumulator + total_temp;
//     }, 0);
//     total += total1; 
//   });
//   return total;
// }


export function totalCart() {
  return productInCart.reduce((total, productInCart) => {
    const product = allProducts.find((p) => p.id === productInCart.id);
    if (product) {
      const productPrice = parseInt(product.price_sell);
      const productQuantity = parseInt(productInCart.quantity);
      total += productPrice * productQuantity;
    }
    return total;
  }, 0);
}



//DELETE PRODUCT

export function deleteProduct(productId) {
 
 productInCart = productInCart.filter((product) => product.id !== productId);

}

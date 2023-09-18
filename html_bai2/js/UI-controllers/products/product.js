
import { AllProducts } from "../../data/products.js";
import { AddTocart } from "../cart/cart.js";

const list_products = document.getElementById("list-products");

export function showUI() {
  AllProducts.map((product, index) => {
    if (index < 5) {
      list_products.innerHTML += `
            <div class="lists-product-detail-1">
            <div class="items-products-detail" style="--bg-image: url(${product.image[1]})">
                <div class="products-img">
                    <img class="block"
                        src="${product.image[0]}"
                        alt="">
                    <div class="sale-text">
                        <span>-${product.discount}%</span>
                    </div>
                    <div class="list-btns">
                        <button>Quick View</button>
                        <button>Add to cart</button>
                    </div>
                    <div class="list-icons">
                        <div class="icon-heart">
                            <div class="before-icon-heart">
                                <span class="text-box-heart">Wishlist</span>
                                <span class="span-heart"></span>
                            </div>
                         
                              <a href="">
                                <svg class="heartbeat" width="20" height="20" viewBox="0 0 24 24"
                                style="stroke:#121212" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                                    stroke="" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                              </a>
                        </div>
                        <div class="icon-heart">
                            <div class="before-icon-heart">
                                <span class="text-box-heart">Wishlist</span>
                                <span class="span-heart"></span>
                            </div>
                            <a href="">
                                <svg class="chuyendoi" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2078_6492)">
                                      <path d="M11.3335 0.666504L14.0002 3.33317L11.3335 5.99984" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path d="M2 7.3335V6.00016C2 5.29292 2.28095 4.61464 2.78105 4.11454C3.28115 3.61445 3.95942 3.3335 4.66667 3.3335H14" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path d="M4.66667 15.3333L2 12.6667L4.66667 10" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path d="M14 8.6665V9.99984C14 10.7071 13.719 11.3854 13.219 11.8855C12.7189 12.3856 12.0406 12.6665 11.3333 12.6665H2" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2078_6492">
                                        <rect width="16" height="16" fill="white"></rect>
                                      </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="list-sizes">
                        <a href="">S </a>
                        <a href="">M</a>
                        <a href="">L</a>
                    </div>
                </div>
                <div class="text-product-details">
                    <a href="">${product.name}</a>
                    <div class="price-product">
                        <p>$${product.price_sell}</p>
                        <p>$${product.price}</p>
                    </div>
                    <p class="text-lorem">${product.description}</p>
                    <div class="color-list-lorem">
                        <div class="list-items-color">
                            <div class="before-colors">
                                <span class="text-color-items">Oliver</span>
                                <span class="span-color"></span>
                            </div>
                            <div class="color-items-gray"></div>
                        </div>
                        <div class="list-items-color white-color">
                            <div class="before-colors">
                                <span class="text-color-items">Oliver</span>
                                <span class="span-color"></span>
                            </div>
                        </div>
        
        
                    </div>
                    <div class="list-button-products-detail">
                        <div class="thuthu">
                            <button class="thu btn-add-to-cart" product_id="${product.id}">Add To Cart</button>
                        </div>
                   
                        <div class="trai-tym">
                            <button class="trai-tyms-tyms  heart-wh">
                                <svg width="27" height="20" viewBox="0 0 53.99 48.01">
                                    <path
                                        d="M31.73.4c-2.37,0-5.13,1.49-9,4.91C18.86,1.89,16.1.4,13.73.4A12.71,12.71,0,0,0,2.05,18.75C4,22.54,16.83,34.17,20.73,37.64a3,3,0,0,0,4,0c3.91-3.47,16.8-15.1,18.69-18.91A12.73,12.73,0,0,0,31.73.4Zm0,3a9.81,9.81,0,0,1,10,10,10.26,10.26,0,0,1-1,4c-1.78,3.58-18,18-18,18S6.53,21,4.73,17.4a9,9,0,0,1-1-4,9.84,9.84,0,0,1,10-10c2.69,0,7.2,4.27,9,6C24.53,7.68,29,3.4,31.73,3.4Z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div class="trai-tym">
                            <button class="trai-tyms-tyms  heart-wh">
                                <svg width="27" height="20" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2078_8512)">
                                        <path
                                            d="M0.666504 8.00008C0.666504 8.00008 3.33317 2.66675 7.99984 2.66675C12.6665 2.66675 15.3332 8.00008 15.3332 8.00008C15.3332 8.00008 12.6665 13.3334 7.99984 13.3334C3.33317 13.3334 0.666504 8.00008 0.666504 8.00008Z"
                                            stroke="#121212" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                            stroke="#121212" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2078_8512">
                                            <rect width="16" height="16" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <div class="trai-tym">
                            <button class="trai-tyms-tyms  heart-wh">
                                <svg width="27" height="20" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2078_6492)">
                                        <path d="M11.3335 0.666504L14.0002 3.33317L11.3335 5.99984"
                                            stroke="#121212" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M2 7.3335V6.00016C2 5.29292 2.28095 4.61464 2.78105 4.11454C3.28115 3.61445 3.95942 3.3335 4.66667 3.3335H14"
                                            stroke="#121212" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M4.66667 15.3333L2 12.6667L4.66667 10"
                                            stroke="#121212" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M14 8.6665V9.99984C14 10.7071 13.719 11.3854 13.219 11.8855C12.7189 12.3856 12.0406 12.6665 11.3333 12.6665H2"
                                            stroke="#121212" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2078_6492">
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
    }
  });

  AddTocart();
}

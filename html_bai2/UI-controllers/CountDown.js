export function count_down() {
    let minute = 5;
    let seconds = 0;
    const count = document.querySelector(".count");
    const cart = document.getElementById("cart");
   const box_cart = document.querySelector(".box-cart");
  
   setInterval(() => {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minute--;
      }
  
      if (minute == 0 && seconds == 0) {
        minute = 5;
        location.reload(cart);
        box_cart.style.display = "none";
        
      }
      count.innerText = `${minute > 10 ? "" : 0}${minute}:${
        seconds < 10 ? 0 : ""
      }${seconds}`;
    }, 1000);
    
  }
  
   
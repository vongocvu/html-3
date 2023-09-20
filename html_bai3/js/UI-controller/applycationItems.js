import { allApplycations } from "../data/applycation.js";
import { initializeFormActions } from "./addItems.js";
import { deleteApply, getItemsApplycation } from "../service/crud.js";
const btnNext = document.getElementById("next-slider");
const btnPrev = document.getElementById("prev-slider");
const cart = document.getElementById("list-items-apply");
let perPage = 5;
    let current = 1 ;
    let start = 0;
    let end = perPage;
export function showUI(){
    // const cartItems = getItemsApplycation();
    cart.innerHTML ="";
    const listItemApplys = document.getElementById("list-items-apply");
    allApplycations.map((apply , index) => {
       if(index >= start && index < end) {
        listItemApplys.innerHTML +=`
        <div class="items-apply" >
        <button class="btn-del" apply_id = "${apply.id}">-</button>
        <img src="${apply.image}" alt="">
        <span>${apply.name}</span>
    </div>
        `
       }
    });
    initializeFormActions();
    initializeDeleteButtonsEvent(document.querySelectorAll(".btn-del"));
}
showUI();
btnNext.addEventListener('click' , ()=>{
  
    if (end < allApplycations.length) {
        // Chỉ tăng current nếu chưa đến trang cuối cùng
        current++;
        start = (current - 1) * perPage;
        end = current * perPage;
    }

        showUI();
});
btnPrev.addEventListener('click', () => {
    if (current > 1) {
        // Chỉ giảm current nếu không ở trang đầu tiên
        current--;
        start = (current - 1) * perPage;
        end = current * perPage;
        showUI();
    }
});

function handleDeleteButtonClick(delUngdung){
    const applyId = parseInt(delUngdung.getAttribute("apply_id"));
    deleteApply(applyId);
    showUI();
    
}
function initializeDeleteButtonsEvent(deleteBtn) {
    deleteBtn.forEach((delUngdung) => {
      delUngdung.addEventListener("click", () => {
        handleDeleteButtonClick(delUngdung);
        console.log(delUngdung);
      
      });
    });
  }
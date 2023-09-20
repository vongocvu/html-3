// import { deleteApply, getItemsApplycation } from "../service/crud.js";
// export function showcart(){
//     const cartItems = getItemsApplycation();
//     cart.innerHTML ="";

//     cartItems.forEach((apply) => {
//         listItemApplys.innerHTML +=`
//         <div class="items-apply" >
//         <button class="btn-del" apply_id = "${apply.id}">-</button>
//         <img src="${apply.image}" alt="">
//         <span>${apply.name}</span>
//     </div>
//         `
//     });
//     initializeDeleteButtonsEvent(document.querySelectorAll(".btn-del"));
// }
// function handleDeleteButtonClick(delUngdung){
//     const applyId = parseInt(delUngdung.getAttribute("apply_id"));
//     deleteApply(applyId);
//     showUI();
    
// }
// function initializeDeleteButtonsEvent(deleteBtn) {
//     deleteBtn.forEach((delUngdung) => {
//       delUngdung.addEventListener("click", () => {
//         handleDeleteButtonClick(delUngdung);
      
//       });
//     });
//   }
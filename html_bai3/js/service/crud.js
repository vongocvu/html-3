import { allApplycations } from "../data/applycation.js";
export var itemsApplyInCart = [];
export function getItemsApplycation (){
     return itemsApplyInCart ;
}

export function deleteApply (applyId){
    itemsApplyInCart = itemsApplyInCart.filter((apply) => apply.id !== applyId);
    
}
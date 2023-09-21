import { allApplycations } from "../data/applycation.js";
import {
  ShowPageAfterAddApp,
  showUI,
} from "../UI-controller/applycationItems.js";
import { mang } from "../UI-controller/applycationItems.js";
export var itemsApplyInCart = [];
// export let allApplycations = [];
export function getItemsApplycation() {
  return itemsApplyInCart;
}
let icondel = [];

export function deleteApply(applyId) {
  icondel.push(applyId);
  itemsApplyInCart = mang.filter((apply) => !icondel.includes(apply.id));

  return itemsApplyInCart;
  // showUI(itemsApplyInCart);
}

export function addApplication(data) {
  allApplycations.push(data);
  ShowPageAfterAddApp();
}

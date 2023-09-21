import { allApplycations } from "../data/applycation.js";
import { initializeFormActions } from "./addItems.js";
import {
  addApplication,
  deleteApply,
  getItemsApplycation,
} from "../service/crud.js";
import { StoreImg } from "../data/StoreImg.js";

const btnNext = document.getElementById("next-slider");
const btnPrev = document.getElementById("prev-slider");
const cart = document.getElementById("list-items-apply");
const cartItems = getItemsApplycation();
let page = 10;
let OldPage = 0;

export let mang = allApplycations;
export function showUI(applys) {
  cart.innerHTML = "";
  console.log(applys);
  applys?.forEach((apply, index) => {
    cart.innerHTML += `
        <div class="items-apply" >
        <button class="btn-del" apply_id = "${apply.id}"  >-</button>
        <img src="./img/${apply.image}" alt="">
        <span>${apply.name}</span>
    </div>
        `;
  });
  initializeFormActions();

  initializeDeleteButtonsEvent(document.querySelectorAll(".btn-del"));
}

btnNext.addEventListener("click", () => {
  page += 10;
  OldPage += 10;
  if (page > allApplycations.length && OldPage > allApplycations.length) {
    OldPage -= 10;
    handleGetAppInPage(allApplycations.length - (page - 10));
    page -= 10;
  } else {
    handleGetAppInPage(page);
  }
});

btnPrev.addEventListener("click", () => {
  page -= 10;
  OldPage -= 10;
  if (page <= 0) {
    page = 10;
    handleGetAppInPage(page);
    OldPage = 0;
  }
});

const handleGetAppInPage = (page) => {
  const AppInPages = [];

  allApplycations.forEach((data, index) => {
    if (index < page && index >= OldPage) {
      AppInPages.push(data);
    }
  });

  showUI(AppInPages);
};

export const ShowPageAfterAddApp = () => {
  handleGetAppInPage(page);
};

handleGetAppInPage(page);

function handleDeleteButtonClick(delUngdung) {
  let applyId = parseInt(delUngdung.getAttribute("apply_id"));
  const xoa = deleteApply(applyId);
  // deleteApply(applyId);
  showUI(xoa);
}
function initializeDeleteButtonsEvent(deleteBtn) {
  deleteBtn.forEach((delUngdung) => {
    delUngdung.addEventListener("click", () => {
      handleDeleteButtonClick(delUngdung);
    });
  });
}

const overlay = document.querySelector(".overlay");
const boxItems = document.querySelector(".form-add-ungdung");
const btnSubmit = document.getElementById("btnSubmit");

let selectedImage = "";

export const getSelectedImage = (img) => {
  selectedImage = img;
};

btnSubmit.addEventListener("click", () => {
  var nameInput = document.getElementById("name_icon");
  var nameError = document.getElementById("name_error");

  if (!nameInput.value) {
    nameError.style.display = "block";
    boxItems.style.display = "block";
  } else {
    nameError.style.display = "none";
    boxItems.style.display = "none";
    overlay.style.display = "none";
  }

  const name = nameInput.value;
  // const itemsApplycation = document.querySelector(".iems-applycation");

  //   const newItemHTML = `
  //     <div class="items-apply">
  //         <button class="btn-del">-</button>
  //         <img src="./img/gg.png" alt="">
  //         <span>${name}</span>
  //     </div>
  // `;
  // console.log(name);
  // itemsApplycation.innerHTML += newItemHTML;

  if (nameInput.value !== "") {
    addApplication({
      id: allApplycations[allApplycations.length - 1].id + 1,
      name: name,
      image: selectedImage,
    });
  }

  nameInput.value = "";
});

const handleShowStore = () => {
  const ShowStoreImg = document.getElementById("storeImg");

  ShowStoreImg.innerHTML = "";
  StoreImg.forEach((img) => {
    ShowStoreImg.innerHTML += `
        <div class="boxStore">
           <img class="img-store" src="./img/${img}" alt="" url="${img}" />
        </div>
    `;
  });

  const DOMimgs = document.querySelectorAll(".img-store");

  DOMimgs.forEach((img) => {
    img.addEventListener("click", () => {
      getSelectedImage(img.getAttribute("url"));
    });
  });
};

export { handleShowStore };

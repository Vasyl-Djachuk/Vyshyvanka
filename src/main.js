import { slowScroll } from './js/slow-scroll';
import { burgerMenuOpenClose } from './js/mod';
import {
  validateTelNumber,
  formText,
  deleteNumber,
  formSubmit,
} from './js/form.js';
let burgerMenu = document.querySelector(`.header-menu-open-btn`);
burgerMenu.addEventListener(`click`, burgerMenuOpenClose);

let orderButton = document.querySelector(`.hero-button`);
orderButton.addEventListener(`click`, e => {
  document.querySelector(`.order-title`).scrollIntoView({ behavior: 'smooth' });
});

// save form data to local-storage-----------------------------
const form = document.querySelector(`.order-form-container`);

let formMassege = JSON.parse(localStorage.getItem(`form-state`)) ?? {
  name: ``,
  phone: ``,
  comment: ``,
  email: ``,
};
for (const key in formMassege) {
  form.elements[key].value = formMassege[key];
}

form.addEventListener(`input`, formText);

// phone number validation ====================================
const telInput = document.querySelector(`input[type="tel"]`);
telInput.addEventListener(`input`, validateTelNumber);
telInput.addEventListener(`keydown`, deleteNumber);

// submit form===================
form.addEventListener(`submit`, formSubmit);

// slow scroll for id

let links = document.querySelectorAll("a[href^='#']");
for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let target = this.getAttribute('href');
    slowScroll(target);
  });
}
// =============================

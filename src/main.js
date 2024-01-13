import { slowScroll } from './js/slow-scroll';

let burgerMenu = document.querySelector(`.header-menu-open-btn`);

burgerMenu.addEventListener(`click`, burgerMenuOpenClose);

function burgerMenuOpenClose(eve) {
  eve.stopPropagation();
  let mobileMenu = document.querySelector(`.mobile-menu`);
  if (mobileMenu.classList.contains(`is-open`)) {
    mobileMenu.classList.remove(`is-open`);
    return;
  }
  mobileMenu.classList.add(`is-open`);
  mobileMenu.addEventListener(`click`, checkKlick);

  let checkClickBody = document.body;
  checkClickBody.addEventListener(`click`, checkKlick);

  function checkKlick(e) {
    console.log(e.currentTarget.nodeName);
    e.stopPropagation();
    if (e.currentTarget.nodeName === `BODY`) closeMenu();
    if (e.target.classList.contains(`js-close`)) closeMenu();

    function closeMenu() {
      mobileMenu.classList.remove(`is-open`);
      mobileMenu.removeEventListener(`click`, checkKlick);
      checkClickBody.removeEventListener(`click`, checkKlick);
    }
  }
  //

  //
  //   let closeButtonX = document.querySelector(`.mobile-close-button`);
  //   closeButtonX.addEventListener(`click`, closeMobileMenu);

  //   mobileMenu.addEventListener(`click`, e => {
  //     if (e.target.nodeName === `A`) closeMobileMenu();
  //   });
}
//

// slow scroll for id
let links = document.querySelectorAll("a[href^='#']");
for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let target = this.getAttribute('href');
    slowScroll(target);
  });
}

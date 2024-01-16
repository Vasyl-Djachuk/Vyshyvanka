export function burgerMenuOpenClose(eve) {
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
}

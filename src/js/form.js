export function validateTelNumber(e) {
  if (e.target.classList.contains(`input-error`))
    e.target.classList.remove(`input-error`);

  let number = e.target.value.replace(/\D/g, ``);
  let result = ``;

  if (e.target.selectionStart !== e.target.value.length) {
    if (!(e.data && /\D/g.test(e.data))) {
      if (number.length < 12) return;
    }
  }

  if ([`3`, `8`, `0`].includes(number[0])) {
    if (number[0] == `8`) number = '3' + number;
    if (number[0] == `0`) number = '38' + number;
    if (number.length >= 1) result = number.slice(0, 2);
    if (number.length >= 3) result += ' (' + number.slice(2, 5);
    if (number.length >= 6) result += ') ' + number.slice(5, 8);

    if (number.length >= 9) result += '-' + number.slice(8, 10);
    if (number.length >= 11) result += '-' + number.slice(10, 12);
  } else {
    result = number.slice(0, 15);
  }
  e.target.value = '+' + result.slice(0, 19);
}
export function formText(e) {
  let formMassege = JSON.parse(localStorage.getItem(`form-state`)) ?? {
    name: ``,
    phone: ``,
    comment: ``,
    email: ``,
  };
  let input = e.target;
  if (input.classList.contains(`input-error`))
    input.classList.remove(`input-error`);
  if (input.name === `name`) {
    let r = input.value
      .split(` `)
      .map(e => {
        if (e[0]) return e[0].toUpperCase() + e.slice(1);
      })
      .join(` `);
    input.value = r.replace(/\d/g, ``);
  }
  formMassege[input.name] = input.value.trim();
  localStorage.setItem(`form-state`, JSON.stringify(formMassege));
}
export function deleteNumber(e) {
  let n = e.target.value.replace(/\D/g, ``);
  if (e.keyCode == 8 && n.length == 1) e.target.value = ``;
}
export function formSubmit(e) {
  e.preventDefault();
  let formMassege = JSON.parse(localStorage.getItem(`form-state`)) ?? {
    name: ``,
    phone: ``,
    comment: ``,
    email: ``,
  };

  if (formMassege.name === ``) {
    e.target.elements.name.classList.add(`input-error`);
    return;
  }
  if (formMassege.phone.length < 19 && formMassege.phone.includes(`+38`)) {
    e.target.elements.phone.classList.add(`input-error`);
    return;
  }
  console.log(JSON.stringify(formMassege));
  localStorage.removeItem(`form-state`);
  e.target.reset();
}

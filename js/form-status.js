const form = document.querySelector('.ad-form');
const fieldset = form.querySelectorAll('fieldset');

const getDisable = (formElement) => {
  formElement.forEach((item) => {
    item.classList.add('ad-form--disabled');
  });
};
getDisable(fieldset);

const getActive = (formElement) => {
  formElement.forEach((item) => {
    item.classList.remove('ad-form--disabled');
  });
};
getActive(fieldset);

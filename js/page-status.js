const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const formFieldsets = form.querySelectorAll('fieldset');
const childMapFilters = mapFilters.children;
const ACTIVATION = true;
const DEACTIVATION = false;

const changeStatusPage = (status) => {
  mapFilters.classList.add('ad-form--disabled');
  form.classList.add('ad-form--disabled');

  if (status === ACTIVATION) {
    formFieldsets.forEach((item) => {
      item.disabled = ACTIVATION;
    });
    for (let item = 0; item < childMapFilters.length; item++) {
      childMapFilters[item].disabled = ACTIVATION;
    }

  } else {
    mapFilters.classList.remove('ad-form--disabled');
    form.classList.remove('ad-form--disabled');
    formFieldsets.forEach((item) => {
      item.disabled = DEACTIVATION;
    });
    for (let item = 0; item < childMapFilters.length; item++) {
      childMapFilters[item].disabled = DEACTIVATION;
    }
  }
};
changeStatusPage(DEACTIVATION);

const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const formFieldsets = form.querySelectorAll('fieldset');
const childMapFilters = mapFilters.children;
const ACTIVATION = true;
const DEACTIVATION = false;

const changeStatusPage = (status) => {

  if (status === ACTIVATION) {
    formFieldsets.forEach((item) => {
      item.disabled = ACTIVATION;
    });

    Array.from(childMapFilters).forEach((item) => item.disabled = ACTIVATION);

  } else {
    mapFilters.classList.remove('ad-form--disabled');
    form.classList.remove('ad-form--disabled');
    formFieldsets.forEach((item) => {
      item.disabled = DEACTIVATION;
    });

    Array.from(childMapFilters).forEach((item) => item.disabled = DEACTIVATION);
  }
};

changeStatusPage(ACTIVATION);

export {changeStatusPage, ACTIVATION, DEACTIVATION};

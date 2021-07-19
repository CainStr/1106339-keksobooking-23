const form = document.querySelector('.ad-form');
const TYPES_HOUSING = form.querySelector('#type');
const formTitle = form.querySelector('#title');
const priceForm = form.querySelector('#price');
const roomsFilter = form.querySelector('#room_number');
const formTimein = form.querySelector('#timein');
const formTimeout = form.querySelector('#timeout');
const guestsFilter = form.querySelector('#capacity');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
let MIN_PRICE_TO_NIGHT = 0;
const MAX_PRICE_TO_NIGHT = 1000000;

const ROOMS_TO_GUESTS = {
  1: [1],
  2: [1, 2],
  3: [3, 2, 1],
  100: [0],
};
const HOUSING_TYPES = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const onTitleInput = () => {
  const valueLength = formTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Минимум 30 символов Еще ${MIN_TITLE_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Максимум 100 символов. Удалите  ${valueLength - MAX_TITLE_LENGTH} символов`);
  } else {
    formTitle.setCustomValidity('');
  }

  formTitle.reportValidity();
};

const onPriceInput = () => {
  if (Number(priceForm.value)) {
    if (priceForm.value > MAX_PRICE_TO_NIGHT) {
      priceForm.setCustomValidity(`Максимальная цена ${MAX_PRICE_TO_NIGHT}`);

    } else if (priceForm.value < MIN_PRICE_TO_NIGHT) {
      priceForm.setCustomValidity(`Минимальная стоимость  ${MIN_PRICE_TO_NIGHT}, добавьте еще ${MIN_PRICE_TO_NIGHT - priceForm.value}`);

    } else {
      priceForm.setCustomValidity('');
    }
  } else {
    priceForm.setCustomValidity('Вводите обязательно цифры, а не иное');
  }

  priceForm.reportValidity();
};

const setInitialFormState = () => {
  priceForm.placeholder = HOUSING_TYPES[TYPES_HOUSING.value];
};

const onCapacityChange = () => {
  const valueRoom = Number(roomsFilter.value);
  const guestsValue = Number(guestsFilter.value);
  if (!ROOMS_TO_GUESTS[valueRoom].includes(guestsValue)) {
    guestsFilter.setCustomValidity('Не верное соответствие количества комнат и мест');

  } else {
    guestsFilter.setCustomValidity('');
  }

  guestsFilter.reportValidity();
};

const onPriceChange = () => {
  priceForm.placeholder = HOUSING_TYPES[TYPES_HOUSING.value];
  MIN_PRICE_TO_NIGHT = HOUSING_TYPES[TYPES_HOUSING.value];
};

const onCheckinChange = (evt) => {
  formTimeout.value = evt.target.value;
};

const onCheckOutChange = (evt) => {
  formTimein.value = evt.target.value;
};

const setFormListeners = () => {
  setInitialFormState();
  formTitle.addEventListener('input', onTitleInput);
  priceForm.addEventListener('input', onPriceInput);
  roomsFilter.addEventListener('change', onCapacityChange);
  guestsFilter.addEventListener('change', onCapacityChange);
  TYPES_HOUSING.addEventListener('change', onPriceChange);
  formTimein.addEventListener('change', onCheckinChange);
  formTimeout.addEventListener('change', onCheckOutChange);
};

export {setFormListeners};

const form = document.querySelector('.ad-form');
const TYPES_HOUSING = form.querySelector('#type');
const titleForm = form.querySelector('#title');
const priceForm = form.querySelector('#price');
const roomsFilter = form.querySelector('#room_number');
const formTimein = form.querySelector('#timein');
const formTimeout = form.querySelector('#timeout');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
let MIN_PRICE_TO_NIGHT = 0;
const MAX_PRICE_TO_NIGHT = 1000000;
const ROOMS_TO_GUESTS = {
  0: [],
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
// const roomFilter = roomsFilter.children;

const guestsFilter = form.querySelector('#capacity');
const guestFilter = guestsFilter.children;


titleForm.addEventListener('input', () => {
  const valueLength = titleForm.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleForm.setCustomValidity(`Минимум 30 символов Еще ${MIN_TITLE_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleForm.setCustomValidity(`Максимум 100 символов. Удалите  ${valueLength - MAX_TITLE_LENGTH} символов`);
  } else {
    titleForm.setCustomValidity('');
  }
  titleForm.reportValidity();
});

priceForm.addEventListener('input', () => {
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
});

guestsFilter.disabled = true;

roomsFilter.addEventListener('change', () => {
  guestsFilter.disabled = false;

  Array.from(guestFilter).forEach((item) => {
    item.disabled = true;
  });
  const valueRoom = Number(roomsFilter.value);
  if (ROOMS_TO_GUESTS[valueRoom].includes(valueRoom)) {
    for (let item = 0; item <= 2; item++) {
      if (Number(guestFilter[item].value) <= valueRoom) {
        guestFilter[item].disabled = false;
      }
    }
  } else {
    priceForm.setCustomValidity('Вводите обязательно цифры, а не иное');
  }
  priceForm.reportValidity();
});

priceForm.placeholder = HOUSING_TYPES[TYPES_HOUSING.value];
TYPES_HOUSING.addEventListener('change', () => {
  priceForm.placeholder = HOUSING_TYPES[TYPES_HOUSING.value];
  MIN_PRICE_TO_NIGHT = HOUSING_TYPES[TYPES_HOUSING.value];
});


formTimein.addEventListener('change', () => {
  Array.from(formTimeout.children).forEach((item) => {
    if (item.value === formTimein.value) {
      item.selected = true;
    }
  });
});

formTimeout.addEventListener('change', () => {
  Array.from(formTimein.children).forEach((item) => {
    if (item.value === formTimeout.value) {
      item.selected = true;
    }
  });
});

const NUMBER_AFTER_ZERO = 4;
const GUESTS_COUNT_MIN = 1;
const GUESTS_COUNT_MAX = 5;
const OFFER_AMOUNT = 10;
const MAX_ROOMS = 7;
const MAX_PRICE = Math.pow(10, 7);
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

const TITLES = [
  'Квартира с не самыми лучшими соседями', 'Лучше доплатить за кондиционер :)', 'Лучшее предложение',
  'Это место ты запомнишь навсегда', 'Вид на море', 'Обычное место', 'Самое дешевое место',
  'Кладовка и то больше', 'Иногда орет сосед', 'Вид на крематорий',
];
const TYPES = [
  'palace', 'flat', 'house', 'bungalow', 'hotel',
];
const CHECKINS = [
  '12:00', '13:00', '14:00',
];
const CHECKOUTS = [
  '12:00', '13:00', '14:00',
];
const FEATURES = [
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const DESCRIPTIONS = [
  'Нет парковочного места',
  'Происходят странные вещи',
  'Врезаются перелетные птицы в стекло',
  'Толстенные стены, здесь вам ничего не грозит',
];

export {
  DESCRIPTIONS, MAX_LAT, NUMBER_AFTER_ZERO, MAX_LNG, PHOTOS, MIN_LNG, MIN_LAT, FEATURES, CHECKINS,
  CHECKOUTS, TITLES, TYPES, GUESTS_COUNT_MAX, GUESTS_COUNT_MIN, MAX_ROOMS, MAX_PRICE, OFFER_AMOUNT
};

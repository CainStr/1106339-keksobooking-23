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

const generateInt = (min, max) => {
  if (max > min && min >= 0) {
    return Math.round(Math.random() * (max - min) + min);
  }
  throw new RangeError('Проверь числа');
};

const generateFractional = (min, max, afterTheSign) => {
  if (max > min && min >= 0) {
    return (Math.random() * (max - min) + min).toFixed(afterTheSign);
  }
  throw new RangeError('Проверь числа!');
};

const getRandomArrayElement = (elements) => elements[generateInt(0, elements.length - 1)];

const getRandomArray = (array) => (
  array.slice(0, generateInt(0, array.length - 1))
);

const createOffer = (index) => {
  const avatarNumber = index < 10 ? `0${index}` : index;
  const avatarUrl = `img/avatars/user${avatarNumber}.png`;
  const locationLat = generateFractional(MIN_LAT, MAX_LAT, NUMBER_AFTER_ZERO);
  const locationLng = generateFractional(MIN_LNG, MAX_LNG, NUMBER_AFTER_ZERO);

  return {
    author: {
      avatar: avatarUrl,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${locationLat}, ${locationLng}`,
      price: generateInt(0, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: generateInt(0, MAX_ROOMS),
      guests: generateInt(GUESTS_COUNT_MIN, GUESTS_COUNT_MAX),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};
// eslint-disable-next-line no-unused-vars
const generateOffers = () => new Array(OFFER_AMOUNT).fill('').map((counter, index) => createOffer(index + 1));


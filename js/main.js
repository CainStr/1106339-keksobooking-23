const MAX_ARRAY_LENGTH = 10;
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
const getRandomArray = (number) => generateInt(0, number.length - 1);

const createOffer = (index) => {
  const addingZero = () => {
    if (index < MAX_ARRAY_LENGTH && index > 0) {
      return `0${index}`;
    }
    if (index === MAX_ARRAY_LENGTH || index === MAX_ARRAY_LENGTH) {
      return index;
    }
  };
  const avatarUrl = `img/avatars/user${addingZero(index)}.png`;
  const locationLat = generateFractional(MIN_LAT, MAX_LAT, NUMBER_AFTER_ZERO);
  const locationLng = generateFractional(MIN_LNG, MAX_LNG, NUMBER_AFTER_ZERO);
  const photosArray = PHOTOS.slice(getRandomArray(PHOTOS), (getRandomArray(PHOTOS) + 1));
  const featuresArray = FEATURES.slice(getRandomArray(FEATURES), (getRandomArray(FEATURES) + 1));
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
      features: `${featuresArray.join(' | ')}`,
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: `${photosArray.join(' | ')}`,
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};
// eslint-disable-next-line no-unused-vars
const generateOffers = () => new Array(OFFER_AMOUNT).fill('').map((counter, index) => createOffer(index + 1));

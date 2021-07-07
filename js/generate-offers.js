import {
  DESCRIPTIONS, MAX_LAT, NUMBER_AFTER_ZERO, MAX_LNG, PHOTOS, MIN_LNG, MIN_LAT, FEATURES, CHECKINS,
  CHECKOUTS, TITLES, TYPES, GUESTS_COUNT_MAX, GUESTS_COUNT_MIN, MAX_ROOMS, MAX_PRICE, OFFER_AMOUNT
} from './data.js';

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

export {generateOffers};

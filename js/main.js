const maxArrayLength = 10;
const minArrayLength = 0;
const numbersAfterZero = 4;
const guestsCountMin = 1;
const guestsCountMax = 5;

const generateInt = (min, max) => {
  if (max > min && min >= minArrayLength) {
    return Number(Math.round(Math.random() * (max - min) + min));
  }

  throw new RangeError('Проверь числа');
};

const generateFractional = (min, max, afterTheSign) => {
  if (max > min && min >= minArrayLength) {
    return Number((Math.random() * (max - min) + min).toFixed(afterTheSign));
  }

  throw new RangeError('Проверь числа!');
};

const offer = {
  titlesArray: ['Квартира с не самыми лучшими соседями', 'Лучше доплатить за кондиционер :)', 'Лучшее предложение',
    'Это место ты запомнишь навсегда', 'Вид на море', 'Обычное место', 'Самое дешевое место',
    'Кладовка и то больше', 'Иногда орет сосед', 'Вид на крематорий'],
  typesArray: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  checkinArray: ['12:00', '13:00', '14:00'],
  checkoutArray: ['12:00', '13:00', '14:00'],
  featuresArray: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  photosArray: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
  descriptionArray: [' нет парковочного места',
    ' происходят странные вещи',
    ' врезаются перелетные птицы в стекло',
    ' толстенные стены, здесь вам ничего не грозит'],
};

const getRandomArrayElement = (elements) => generateInt(minArrayLength, elements.length - 1);

const addingZero = () => {
  for (let numberAvatar = 0; numberAvatar < maxArrayLength; numberAvatar++) {
    if (numberAvatar < maxArrayLength && numberAvatar > minArrayLength) {
      return `0${numberAvatar}`;
    }
    if (numberAvatar === maxArrayLength || numberAvatar === minArrayLength) {
      return numberAvatar;
    }
  }
};
const commentForDescription = 'В добавок';
const createOffers = () => ({
  offer: {
    Title: offer.titlesArray[getRandomArrayElement(offer.titlesArray)],
    Description: `${commentForDescription},${offer.descriptionArray[getRandomArrayElement(offer.descriptionArray)]}`,
    Type: offer.typesArray[getRandomArrayElement(offer.typesArray)],
    Rooms: Number(((Math.random()) * 1000).toFixed()),
    Guests: generateInt(guestsCountMin, guestsCountMax),
    Price: Number(((Math.random()) * 1000000).toFixed()),
    Checkin: offer.checkinArray[getRandomArrayElement(offer.checkinArray)],
    Checkout: offer.checkoutArray[getRandomArrayElement(offer.checkoutArray)],
    Features: offer.featuresArray[getRandomArrayElement(offer.featuresArray)],
    Photos: offer.photosArray[getRandomArrayElement(offer.photosArray)],
  },
});
const similarOffers = new Array(maxArrayLength);
for (let index = 0; index < similarOffers.length; index++) {
  similarOffers[index] = createOffers();

}

const lat = (min, max) => (generateFractional(min, max, numbersAfterZero));
const lng = (min, max) => (generateFractional(min, max, numbersAfterZero));

for (let index = 0; index < similarOffers.length; index++) {
  const locationLat = lat(35.65000, 35.70000);
  const locationLng = lng(139.70000, 139.80000);
  Object.assign(similarOffers[index].offer, {
    address: `${locationLat}, ${locationLng}`,
  });
  Object.assign(similarOffers[index], {
    location: {lat: locationLat, lng: locationLng},
  });
  Object.assign(similarOffers[index], {
    author: {
      avatar: `img/avatars/user${addingZero() + (index + 1)}.png`,
    },
  });
}

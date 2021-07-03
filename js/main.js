const generateInt = (min, max) => {
  if (max > min && min >= 0) {
    return Math.round(Math.random() * (max - min) + min);
  }

  throw new RangeError('Проверь числа');
};

const generateFractional = (min, max) => {
  if (max > min && min >= 0) {
    return Number((Math.random() * (max - min) + min).toFixed(4));
  }

  throw new RangeError('Проверь числа!');
};

const offer = {
  title: ['Квартира с не самыми лучшими соседями', 'Лучше доплатить за кондиционер :)', 'Лучшее предложение',
    'Это место ты запомнишь навсегда', 'Вид на море', 'Обычное место', 'Самое дешевое место',
    'Кладовка и то больше', 'Иногда орет сосед', 'Вид на крематорий'],
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
};

const maxArrayLength = 10;
const minArrayLength = 0;
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

const createOffers = () => ({
  offer: {
    Title: offer.title[getRandomArrayElement(offer.title)],
    Type: offer.type[getRandomArrayElement(offer.type)],
    Rooms: ((Math.random()) * 1000).toFixed(),
    Guests: generateInt(1, 5),
    Price: ((Math.random()) * 1000000).toFixed(),
    Checkin: offer.checkin[getRandomArrayElement(offer.checkin)],
    Checkout: offer.checkout[getRandomArrayElement(offer.checkout)],
    Features: offer.features[getRandomArrayElement(offer.features)],
    Photos: offer.photos[getRandomArrayElement(offer.photos)],
  },
});


const similarOffers = new Array(maxArrayLength);
for (let index = 0; index < similarOffers.length; index++) {
  similarOffers[index] = createOffers();

}

const lat = (min, max) => (generateFractional(min, max));
const lng = (min, max) => (generateFractional(min, max));

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


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

// offer, объект — содержит информацию об объявлении. Состоит из полей:
const offer = {
  title: ['Квартира с не самыми лучшими соседями', 'Лучше доплатить за кондиционер :)', 'Лучшее предложение',
    'Это место ты запомнишь навсегда', 'Вид на море', 'Обычное место', 'Самое дешевое место',
    'Кладовка и то больше', 'Иногда орет сосед', 'Вид на крематорий'],
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
};

const getRandomArrayElement = (elements) => generateInt(0, elements.length - 1);

const addingZero = () => {
  const fractional = generateInt(0, 10);
  if (fractional < 10 && fractional > 0) {
    return `0${fractional}`;
  }
  if (fractional == 10 || fractional == 0) {
    return fractional;
  }
};

const createOffers = () => ({
  author: {
    avatar: `img/avatars/user${addingZero()}.png`,
  },
  offer: {
    Title: getRandomArrayElement(offer.title),
    Type: getRandomArrayElement(offer.type),
    Rooms: ((Math.random(0)) * 1000).toFixed(),
    Guests: generateInt(1, 5),
    Price: ((Math.random(0)) * 1000000).toFixed(),
    Checkin: getRandomArrayElement(offer.checkin),
    Checkout: getRandomArrayElement(offer.checkout),
    Features: getRandomArrayElement(offer.features),
  },
});

const similarOffers = new Array(10);
for (let j = 0; j < similarOffers.length; j++) {
  similarOffers[j] = createOffers();
}
const lat = (min, max) => (generateFractional(min, max));
const lng = (min, max) => (generateFractional(min, max));

for (let i = 0; i < similarOffers.length; i++) {
  const locationLat = lat(35.65000, 35.70000);
  const locationLng = lng(139.70000, 139.80000);
  Object.assign(similarOffers[i].offer, {
    address: locationLat + ', ' + locationLng,
  });
  Object.assign(similarOffers[i], {
    location: {lat: locationLat, lng: locationLng},
  });
}
console.log(similarOffers);
// for( let d = 0 ; d < 10 ; d++) {
//   if (similarOffers[d].avatar = similarOffers[d + 1].avatar) {
//     delete similarOffers[d].avatar;
//   }
//
//   console.log(createOffers());
// }

const generateFractional = (min, max) => {
  if (max > min && min >= 0) {
    return Math.round(Math.random() * (max - min) + min);
  }

  throw new RangeError('Проверь числа');
};

// eslint-disable-next-line no-console
console.log(generateFractional(0, 10));

const generateInt = (min, max) => {
  if (max > min && min >= 0) {
    return Number((Math.random() * (max - min) + min).toFixed(4));
  }

  throw new RangeError('Проверь числа!');
};


// eslint-disable-next-line no-console
console.log(generateInt(0, 10));

// author, объект — описывает автора. Содержит одно поле:
let fractional = generateFractional(0,10);
const addingZero = ()=> {
  if(fractional< 10) {
    return `0${fractional}`;
  }
  if(fractional == 10){
    return fractional;
  }
};
const author ={avatar: `img/avatars/user${addingZero()}.png`};

// eslint-disable-next-line no-console
console.log(author.avatar);


// offer, объект — содержит информацию об объявлении. Состоит из полей:
const offer= {
  title: ['Квартира с не самыми лучшими соседями', 'Лучше доплатить за кондиционер :)', 'Лучшее предложение',
    'Это место ты запомнишь навсегда', 'Вид на море', 'Обычное место', 'Самое дешевое место',
    'Кладовка и то больше', 'Иногда орет сосед', 'Вид на крематорий'],

  address: '{{location.lat}}, {{location.lng}}',
  price:((Math.random(0,))*1000000).toFixed(),
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  rooms: ((Math.random(0,))*1000).toFixed(),
  guests: generateFractional(1,5),
  checkin:['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
};
const numberArrayOffer = generateFractional(0, offer.type.length-1);
const createOffers =() => {

  return {
    offerTitle: offer.title[numberArrayOffer],
    offerType :offer.type[numberArrayOffer],
    offerRooms: offer.rooms,
  };
};

const similarOffers = new Array(10).fill(null).map(()=>createOffers());
console.log(similarOffers)
console.log(offer.type[numberArrayOffer]);
console.log(numberArrayOffer);
console.log(offer.price);
console.log(offer.rooms);
console.log(offer.guests);

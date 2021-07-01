const generateInt = (min, max) => {
  if (max > min && min >= 0) {
    return Math.round(Math.random() * (max - min) + min);
  }

  throw new RangeError('Проверь числа');
};

// eslint-disable-next-line no-console
console.log(generateInt(0, 10));

const generateFractional = (min, max) => {
  if (max > min && min >= 0) {
    return Number((Math.random() * (max - min) + min).toFixed(4));
  }

  throw new RangeError('Проверь числа!');
};


// eslint-disable-next-line no-console
console.log(generateFractional(35.65000, 35.70000));

// author, объект — описывает автора. Содержит одно поле:

const addingZero = ()=> {
  const fractional = generateInt(0,10);
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
  // address: {location: {lat: generateFractional(35.65000, 35.70000), lng:generateFractional(139.70000, 139.80000)}},
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  checkin:['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
};
// const numberArrayOffer = generateInt(0, offer.type.length-1);
console.log(offer.address);
const  getRandomArrayElement = (elements) => {
  return elements[generateInt(0, elements.length-1)];
};

const lat=(min, max) => (generateFractional(min, max));
const lng = (min, max) => (generateFractional(min, max));
lat(35.65000, 35.70000);
console.log(lng(35.6500, 35.7000))
const createOffers =() => ({
  author: {
    avatar:`img/avatars/user${addingZero()}.png`,
  },
  // location: {lat: `${lat()}`, lng:generateFractional(139.70000, 139.80000)},
  offer:{
    Title: getRandomArrayElement(offer.title),

    Type :getRandomArrayElement(offer.type),
    Rooms: ((Math.random(0))*1000).toFixed(),
    Guests: generateInt(1,5),
    Price:((Math.random(0))*1000000).toFixed(),
    Checkin: getRandomArrayElement(offer.checkin),
    Checkout: getRandomArrayElement(offer.checkin),
    Features: getRandomArrayElement(offer.features),
  },
});

// const similarOffers = new Array(10).fill(null).map(()=>createOffers());
// const q =(min,max)=>(lat(min, max)) ;

const similarOffers = new Array(10);
for( let j = 0 ; j < similarOffers.length ; j++) {
  similarOffers[j] = createOffers();
}

for(let i=0; i<similarOffers.length ; i++) {
  const q= lat(35.65000, 35.70000);
  const r =  lng(139.70000, 139.80000);
  Object.assign(similarOffers[i].offer, {
    address: q + ', ' + r,

    // address:[lat(35.65000, 35.70000), lng(139.70000, 139.80000)],
  });
  Object.assign(similarOffers[i],{
    location: {lat: q, lng: r},

  });
  console.log(similarOffers[i].offer.address)
}


// for( let d = 0 ; d < 10 ; d++) {
//   if (similarOffers[d].avatar = similarOffers[d + 1].avatar) {
//     delete similarOffers[d].avatar;
//   }
//
//   console.log(createOffers());
// }

console.log(similarOffers);

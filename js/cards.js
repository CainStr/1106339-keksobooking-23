// import {generateOffers} from './generate-offers.js';

// const map = document.querySelector('#map-canvas');
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
//
// const offers = generateOffers();

const typeDictionary = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const fillFeatures = (features, block) => {
  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  new Array(block).forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
};

const fillPhotos = (photo, block, photosArray) => {
  block.innerHTML = '';
  photosArray.forEach((item) => {
    const newPhoto = photo.cloneNode(true);
    newPhoto.src = item;
    block.appendChild(newPhoto);
  });
};

const fillAvatar = (avatar, avatarElement) => {
  avatarElement.src = avatar;
};

const renderCard = ({author, offer}) => {
  const {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    description,
    photos,
    features,
  } = offer;

  const {
    avatar,
  } = author;

  const offerElement = similarOfferTemplate.cloneNode(true);
  const titleElement = offerElement.querySelector('.popup__title');
  const addressElement = offerElement.querySelector('.popup__text--address');
  const priceElement = offerElement.querySelector('.popup__text--price');
  const typeElement = offerElement.querySelector('.popup__type');
  const placement = offerElement.querySelector('.popup__text--capacity');
  const timeOfPlacement = offerElement.querySelector('.popup__text--time');
  const featureElement = offerElement.querySelector('.popup__features');
  const descriptionElement = offerElement.querySelector('.popup__description');
  const photosElement = offerElement.querySelector('.popup__photos');
  const photo = offerElement.querySelector('.popup__photo');
  const avatarElement = offerElement.querySelector('.popup__avatar');

  titleElement.textContent = title ? title : titleElement.remove();
  addressElement.textContent = address ? address : addressElement.remove();
  priceElement.textContent = price ? `${price} ₽/ночь` : priceElement.remove();
  typeElement.textContent = typeDictionary ? typeDictionary[type] : typeElement.remove();
  placement.textContent = rooms && guests ? `${rooms} комнаты для ${guests} гостей` : placement.remove();
  timeOfPlacement.textContent = checkin && checkout ? `Заезд после ${checkin}, выезд до ${checkout}` : timeOfPlacement.remove();
  descriptionElement.textContent = description ? description : descriptionElement.remove();

  if (features) {
    fillFeatures(features, featureElement);

  } else {
    console.log(featureElement);
    featureElement.remove();
  }

  if (photos && photos.length !== 0) {
    fillPhotos(photo, photosElement, photos);
  } else {
    photosElement.remove();
  }

  if (avatar) {
    fillAvatar(avatar, avatarElement);
  } else {
    avatarElement.remove();
  }
  return offerElement;
};

export {renderCard};
//
// for (let i = 0; i<offers.length ; i++) {
//   const card = renderCard(offers[i]);
//   // console.log(offers[i])
//   map.appendChild(card);
// }
// console.log(map);

import {generateOffers} from './generate-offers.js';

const map = document.querySelector('#map-canvas');
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');

const offers = generateOffers();

const typeDictionary = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const fillFeatures = (features, block) => {
  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  block.forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
};
// eslint-disable-next-line no-console

const fillPhotos = (photo, block, src ) => {
  const newPic = photo.cloneNode(true);
  src.forEach((item) => {
    newPic.src = item;
    block.appendChild(newPic);
  });


};

const renderCard = ({offer}) => {
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

  const offerElement = similarOfferTemplate.cloneNode(true);
  const titleElement = offerElement.querySelector('.popup__title');
  const addressElement = offerElement.querySelector('.popup__text--address');
  const priceElement = offerElement.querySelector('.popup__text--price');
  const typeElement = offerElement.querySelector('.popup__type');
  const placement = offerElement.querySelector('.popup__text--capacity');
  const timeOfPlacement = offerElement.querySelector('.popup__text--time');
  const featureElement = offerElement.querySelectorAll('.popup__feature');
  const descriptionElement = offerElement.querySelector('.popup__description');

  const photosElement = offerElement.querySelector('.popup__photos');
  const photo = offerElement.querySelector('.popup__photo');
  // const avatarElement = offerElement.querySelector('.popup__avatar');

  titleElement.textContent = title ? title : titleElement.remove();
  address ? addressElement.textContent = address : addressElement.remove();
  price ? priceElement.textContent = (`${price} ₽/ночь`) : priceElement.remove();
  type ? typeElement.textContent = typeDictionary[type] : typeElement.remove();
  rooms && guests ? placement.textContent = `${rooms} комнаты для ${guests} гостей` : placement.remove();
  checkin && checkout ? timeOfPlacement.textContent = `Заезд после ${checkin}, выезд до ${checkout}` : timeOfPlacement.remove();
  description ? descriptionElement.textContent = description : descriptionElement.remove();

  if (features) {
    fillFeatures(features, featureElement);
  } else {
    featureElement.remove();
  }

  // if (photos.length>-1) {
    fillPhotos(photo, photosElement, photos);
  // } else {
  //   photosElement.remove();
  // }
  console.log(photos);
  return offerElement;
};


// eslint-disable-next-line no-console
// if (card.author.avatar) {
//   avatar.src = card.author.avatar;
// } else {
//   avatar.classList.add('visually-hidden');
// }

const card = renderCard(offers[0]);
map.appendChild(card);

import {generateOffers} from './generate-offers.js';

const listOffers = document.querySelector('#map-canvas');
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarOffers = generateOffers();

const typeRUS = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

similarOffers.forEach((card) => {
  const offerElement = similarOfferTemplate.cloneNode(true);
  card.offer.title ?
    offerElement.querySelector('.popup__title').textContent = card.offer.title :
    offerElement.querySelector('.popup__title').remove();

  card.offer.address ?
    offerElement.querySelector('.popup__text--address').textContent = card.offer.address :
    offerElement.querySelector('.popup__text--address').remove();

  card.offer.price ?
    offerElement.querySelector('.popup__text--price').textContent = (`${card.offer.price} ₽/ночь`) :
    offerElement.querySelector('.popup__text--price').remove();

  card.offer.type ?
    offerElement.querySelector('.popup__type').textContent = typeRUS[card.offer.type] : offerElement.querySelector('.popup__type').remove();

  card.offer.rooms && card.offer.guests ?
    offerElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей` :
    offerElement.querySelector('.popup__text--capacity').remove();

  card.offer.checkin && card.offer.checkout ?
    offerElement.querySelector('.popup__text--time ').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}` :
    offerElement.querySelector('.popup__text--time ').remove();

  if (card.offer.features) {
    const modifiers = card.offer.features.map((feature) => `popup__feature--${feature}`);
    offerElement.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];
      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });
  }
  if (card.offer.description) {
    offerElement.querySelector('.popup__description').textContent = card.offer.description;
  }

  const photos = offerElement.querySelector('.popup__photos');
  const photo = offerElement.querySelector('.popup__photo');

  if (card.offer.photos.length !== 0) {
    card.offer.photos.forEach((item) => {
      photo.src = item;
      const newPic = photo.cloneNode(true);
      newPic.src = item;
      photos.appendChild(newPic);
    });
  } else {
    photos.classList.add('visually-hidden');
  }


  //
  // card.offer.photos.forEach((item) =>{
  //   const photos= document.querySelector('.popup__photos');
  //   console.log(photos)
  //   const newPic = photos.createElement('img');
  //   newPic.classList.add('popup__photo');
  //   newPic.src=item.textContent;
  //   newPic.setAttribute('src', item);
  //   photos.appendChild(newPic);

  // });}

  // eslint-disable-next-line no-console
  const avatar = offerElement.querySelector('.popup__avatar');
  if (card.author.avatar) {
    avatar.src = card.author.avatar;
  } else {
    avatar.classList.add('visually-hidden');
  }

  listOffers.appendChild(offerElement);
});


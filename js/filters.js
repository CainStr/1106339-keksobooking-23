import {offersFromFetchInPromise, createCustomMarker, removeMarkers, resetForm} from './map.js';
import {debounce} from './utils/debounce.js';

const priceValue = {
  'any': {
    MIN: 0,
    MAX: Infinity,
  },
  'low': {
    MIN: 0,
    MAX: 10000,
  },
  'middle': {
    MIN: 10000,
    MAX: 50000,
  },
  'high': {
    MIN: 50000,
    MAX: Infinity,
  },
};

const mapFiltersForm = document.querySelector('.map__filters');
const isType = (offer, filter) => filter !== 'any' ? offer.offer.type && offer.offer.type === filter : offer;
const isPrice = (offer, filter) => filter === 'any' || (offer.offer.price >= priceValue[filter].MIN && offer.offer.price <= priceValue[filter].MAX);
const isRooms = (offer, filter) => filter === 'any' || offer.offer.rooms === Number(filter);
const isGuests = (offer, filter) => filter === 'any' || offer.offer.guests === Number(filter);
const isFeature = (offer, features) => {
  const checkFeatures = Array.from(features).reduce((acc, current) => (current.checked && acc.push(current.value), acc), []);
  return checkFeatures.every((feature) => offer.offer.features && offer.offer.features.includes(feature));
};

const drawFilterOnMap =(evt) => {
  evt.preventDefault();
  removeMarkers();
  resetForm();
  const type = mapFiltersForm.querySelector('#housing-type').value;
  const price = mapFiltersForm.querySelector('#housing-price').value;
  const rooms = mapFiltersForm.querySelector('#housing-rooms').value;
  const guests = mapFiltersForm.querySelector('#housing-guests').value;
  const features = mapFiltersForm.querySelectorAll('.map__checkbox');

  offersFromFetchInPromise
    .then((offersFromServer) => offersFromServer.filter((elem) => isType(elem, type)
        && isPrice(elem, price)
        && isRooms(elem, rooms)
        && isGuests(elem, guests)
        && isFeature( elem, features),
    ))
    .then((filterOffers) => createCustomMarker(filterOffers));
  mapFiltersForm.removeEventListener('change',  debounce(drawFilterOnMap, 500));

};

mapFiltersForm.addEventListener('change',  debounce(drawFilterOnMap, 500));

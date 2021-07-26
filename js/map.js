import {changeStatusPage, DEACTIVATION} from './page-status.js';
import {renderCard} from './cards.js';
import {createFetch} from './fetch.js';

const offersFromFetchInPromise = createFetch();

const MAX_QUANTITY_MARKERS = 10;
const MAP_SCALE = 12;
const TOKYO_COORDINATES = {
  lat: 35.68154,
  lng: 139.78336,
};

const icon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    changeStatusPage(DEACTIVATION);
  })
  .setView(
    TOKYO_COORDINATES, MAP_SCALE,
  );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const generalIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const tokyoMarker = L.marker(
  TOKYO_COORDINATES,
  {
    draggable: true,
    icon: generalIcon,
  },
);

tokyoMarker.addTo(map);

tokyoMarker.on('moveend', (evt) => {
  const userCoordinate = evt.target.getLatLng();
  const lat = userCoordinate.lat.toFixed(5);
  const lng = userCoordinate.lng.toFixed(5);
  address.value = `${lat},  ${lng}`;
});

const resetForm = () => {
  tokyoMarker.setLatLng(TOKYO_COORDINATES);
  map.setView(
    TOKYO_COORDINATES,
    MAP_SCALE);
};

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  resetForm();
});

const markerGroup = L.layerGroup().addTo(map);

const createCustomMarker = (offers) => {

  for (let item = 0; item < Math.min(offers.length, MAX_QUANTITY_MARKERS); item++) {
    const offersItem = offers[item];
    const lat = offersItem.location.lat;
    const lng = offersItem.location.lng;
    const marker = L.marker({
      lat,
      lng,
    },
    {
      icon,
    });

    marker
      .addTo(markerGroup)
      .bindPopup(renderCard(offers[item])),
    {
      keepInView: true,
    };
  }
};

const removeMarkers = () => {
  markerGroup.clearLayers();
};

offersFromFetchInPromise
  .then((offersFromServer) => createCustomMarker(offersFromServer));

export {removeMarkers, resetForm, offersFromFetchInPromise, createCustomMarker};


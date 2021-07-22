import {changeStatusPage} from './page-status.js';
import {generateOffers} from './generate-offers.js';
import {renderCard} from './cards.js';

const MAP_SCALE = 12;
const TOKYO_COORDINATES = {
  lat: 35.68154,
  lng: 139.78336,
};
const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    changeStatusPage(false);
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


const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  tokyoMarker.setLatLng(TOKYO_COORDINATES);
  map.setView(
    TOKYO_COORDINATES,
    MAP_SCALE);
});

const markerGroup = L.layerGroup().addTo(map);

const createCustomMarker = (offers) => {

  offers.forEach((item) => {
    const lat = item.location.lat;
    const lng = item.location.lng;
    const title = item.offer.title;

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker({
      lat,
      lng,
      title,
    },
    {
      icon,
    });

    marker
      .addTo(markerGroup)
      .bindPopup(renderCard(item)),
    {
      keepInView: true,
    };
  });
};

createCustomMarker(generateOffers());

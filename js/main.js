import {
  shutDownDocument,
  turningOnDocument
} from './no-active-document.js';
import {
  setTitleValidator
} from './form-utils/check-title-validity.js';
import {
  setMaxPriceValidator
} from './form-utils/price-input.js';
import {
  setSyncCountCapacity
} from './form-utils/ensure-available-capacilty.js';
import {
  setSyncMinPrice
} from './form-utils/set-Price.js';
import {
  syncCheckInCheckOutTime,
} from './form-utils/timein-timout.js';
import {
  formatAddress
} from './form-utils/format-address.js';
import {
  createLoader,
  sendData
} from './load.js';
import {
  showAlert
} from './show-alert.js';
import {
  renderTagMarkers,
  changingType,
  changingPrice,
  changingRooms,
  changingGuests,
  changingFeatures
} from './form-utils/render-tag-markers.js';
import {
  throttle
} from './utils/throttle.js';
import {
  INITIAL_LAT,
  INITIAL_LNG,
  INITIAL_MARKER_LAT,
  INITIAL_MARKER_LNG,
  INITIAL_ZOOM
} from './settings.js';

const allForms = [...document.forms];
shutDownDocument(allForms);

const priceInput = document.querySelector('#price');
const titleInput = document.querySelector('#title');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const typeHouse = document.querySelector('#type');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const inputAddress = document.querySelector('#address');

setTitleValidator(titleInput);

setMaxPriceValidator(priceInput);

setSyncCountCapacity(roomNumber, capacity);

setSyncMinPrice(typeHouse, priceInput);

syncCheckInCheckOutTime(timein, timeout);

// Map

const map = L.map('map-canvas').on('load', () => {
  turningOnDocument(allForms);
  inputAddress.value = formatAddress(INITIAL_MARKER_LAT, INITIAL_MARKER_LNG);
}).setView([INITIAL_LAT, INITIAL_LNG], INITIAL_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker({
  lat: INITIAL_MARKER_LAT,
  lng: INITIAL_MARKER_LNG,
}, {
  draggable: true,
  icon: mainPinIcon,
});

const data = createLoader(showAlert);
const DELAY_FRAMES = 500;
data.then((array) => {
  renderTagMarkers(array, map);
  changingType(throttle(() => renderTagMarkers(array, map), DELAY_FRAMES));
  changingPrice(throttle(() => renderTagMarkers(array, map), DELAY_FRAMES));
  changingRooms(throttle(() => renderTagMarkers(array, map), DELAY_FRAMES));
  changingGuests(throttle(() => renderTagMarkers(array, map), DELAY_FRAMES));
  changingFeatures(throttle(() => renderTagMarkers(array, map), DELAY_FRAMES));
});

marker.addTo(map);

marker.on('move', (evt) => {
  inputAddress.value = formatAddress(evt.target._latlng.lat, evt.target._latlng.lng);
});

const adForm = document.querySelector('.ad-form');

adForm.onsubmit = (evt) => {
  evt.preventDefault();
  sendData(showAlert, new FormData(evt.target));
};

const formReset = document.querySelector('.ad-form__reset');
const features = document.querySelectorAll('.features input');
const description = document.querySelector('#description');
const imagesb = document.querySelector('#images');
const formPhoto = document.querySelector('.ad-form__photo');

formReset.onclick = (evt) => {
  evt.preventDefault();
  inputAddress.value = 'lat: 35.8039, lng: 139.6397';
  marker.setLatLng(L.latLng(35.8039, 139.6397));
  map.closePopup();
  titleInput.value = '';
  typeHouse.value = 'flat';
  priceInput.value = '';
  timein.value = '12:00';
  timeout.value = '12:00';
  roomNumber.value = '1';
  capacity.value = '1';
  features.forEach((elem) => elem.checked = false);
  description.value = '';
};

imagesb.onchange = () => {
  const reader = new FileReader();
  reader.onload = function (e) {
    formPhoto.style.backgroundImage = `url(${e.target.result})`;
    formPhoto.style.backgroundSize = 'cover';
  };

  reader.readAsDataURL(imagesb.files[0]);
};

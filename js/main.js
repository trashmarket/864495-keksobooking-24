import {
  shutDownDocument,
  turningOnDocument
} from './no-active-document.js';
import {
  checkTitleValidity
} from './form-utils/check-title-validity.js';
import {
  priceInputCustum
} from './form-utils/price-input.js';
import {
  ensureAvailableCapacilty
} from './form-utils/ensure-available-capacilty.js';
import {
  setPrice
} from './form-utils/set-Price.js';
import {
  timeinTimeout
} from './form-utils/timein-timout.js';
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
  MAX_LENGTH,
  MIN_LENGTH,
  MAX_PRICE
} from './settings.js';

const allForms = [...document.forms];
shutDownDocument(allForms);


// title form input

const titleInput = document.querySelector('#title');


titleInput.addEventListener('input', () => {
  checkTitleValidity(titleInput, MIN_LENGTH, MAX_LENGTH);
});

//price input

const priceInput = document.querySelector('#price');


priceInput.addEventListener('input', () => {
  priceInputCustum(priceInput, MAX_PRICE);
});

//rooms selekt

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityChildren = capacity.querySelectorAll('option');

roomNumber.addEventListener('input', () => {
  ensureAvailableCapacilty(roomNumber, capacityChildren);
});

// type house

const typeHouse = document.querySelector('#type');

typeHouse.addEventListener('input', () => {
  setPrice(typeHouse.value, priceInput);
});

// timein timeout

const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

timein.addEventListener('input', () => {
  timeinTimeout(timein, timeout);
});

timeout.addEventListener('input', () => {
  timeinTimeout(timeout, timein);
});

// Map
const inputAddress = document.querySelector('#address');
const map = L.map('map-canvas').on('load', () => {
  turningOnDocument(allForms);
  inputAddress.value = 'lat: 35.8039, lng: 139.6397';
}).setView([35.69, 139.77], 10);

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
  lat: 35.8039,
  lng: 139.6397,
}, {
  draggable: true,
  icon: mainPinIcon,
}, );

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
  inputAddress.value = `lat: ${evt.target._latlng.lat.toFixed(5)}, lng: ${evt.target._latlng.lng.toFixed(5)}`;
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

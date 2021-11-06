import { getRandomPositiveInteger } from './utils/get-random-positive-integer.js';
import { getRandomPositiveFloat } from './utils/get-random-positive-float.js';
//import{ generationOneCard } from './generation-card.js';
import { shutDownDocument } from './no-active-document.js';
import { turningOnDocument } from './active-document.js';
import { checkTitleValidity } from './form-utils/check-title-validity.js';
import { priceInputCustum } from './form-utils/price-input.js';
import { ensureAvailableCapacilty } from './form-utils/ensure-available-capacilty.js';
import { setPrice } from './form-utils/set-Price.js';
import { timeinTimeout } from './form-utils/timein-timout.js';
import { createLoader, sendData } from './load.js';
import { showAlert } from './show-alert.js';
import { renderTagMarkers, changingType, changingPrice } from './form-utils/render-tag-markers.js';
getRandomPositiveFloat(1.2323, 2.1122);
getRandomPositiveInteger(1,10);

const FORM_AD = document.querySelector('.ad-form');
const FORM_AD_CHILDREN = FORM_AD.querySelectorAll('fieldset');
const MAP_FILTER = document.querySelector('.map__filters');
const MAP_CHILDREN = MAP_FILTER.querySelectorAll('*');

shutDownDocument(FORM_AD, FORM_AD_CHILDREN, MAP_FILTER, MAP_CHILDREN);


// title form input

const titleInput = document.querySelector('#title');
const MIN_LENGTH = 20;
const MAX_LENGTH = 100;

titleInput.addEventListener('input', () => {
  checkTitleValidity(titleInput, MIN_LENGTH, MAX_LENGTH);
});

//price input

const priceInput = document.querySelector('#price');
const MAX_PRICE = 1000000;

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
  turningOnDocument(FORM_AD, FORM_AD_CHILDREN, MAP_FILTER, MAP_CHILDREN);
  inputAddress.value = 'lat: 35.8039, lng: 139.6397';
}).setView([35.69, 139.77], 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.8039,
    lng: 139.6397,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const data = createLoader(showAlert);
data.then((array) => {
  console.log(array);
  renderTagMarkers(array, map);
  changingType(() => renderTagMarkers(array, map));
  changingPrice(() => renderTagMarkers(array, map));
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

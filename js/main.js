import { getRandomPositiveInteger } from './utils/get-random-positive-integer.js';
import { getRandomPositiveFloat } from './utils/get-random-positive-float.js';
import { mockAuthor } from './data/mock/mock-author.js';
import { mockLocation } from './data/mock/mock-location.js';
import { mockOffer } from './data/mock/mock-offer.js';
import{ generationCard } from './generationCard.js';
import { shutDownDocument } from './no-active-document.js';
import { turningOnDocument } from './active-document.js';
//import './valid-fom.js';
import { checkTitleValidity } from './form-utils/check-title-validity.js';

getRandomPositiveFloat(1.2323, 2.1122);
getRandomPositiveInteger(1,10);

const createoObject = function (_item, index) {
  const location = mockLocation();
  return {
    author: mockAuthor(index),
    offer: mockOffer(location),
    location,
  };
};
const createArray = Array.from({length:10}, createoObject);

createArray;
const card = generationCard(createArray);
const display = document.querySelector('#map-canvas');
display.appendChild(card[0]);

const FORM_AD = document.querySelector('.ad-form');
const FORM_AD_CHILDREN = FORM_AD.querySelectorAll('fieldset');
const MAP_FILTER = document.querySelector('.map__filters');
const MAP_CHILDREN = MAP_FILTER.querySelectorAll('*');

shutDownDocument(FORM_AD, FORM_AD_CHILDREN, MAP_FILTER, MAP_CHILDREN);
turningOnDocument(FORM_AD, FORM_AD_CHILDREN, MAP_FILTER, MAP_CHILDREN);

// title form input

const titleInput = document.querySelector('#title');
const MIN_LENGTH = 20;
const MAX_LENGTH = 100;
titleInput.addEventListener('input', () => {
  checkTitleValidity(titleInput, MIN_LENGTH, MAX_LENGTH);
});

//price input

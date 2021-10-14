import { getRandomPositiveInteger } from './utils/get-random-positive-integer.js';
import { getRandomPositiveFloat } from './utils/get-random-positive-float.js';
import { mockAuthor } from './data/mock/mock-author.js';
import { mockLocation } from './data/mock/mock-location.js';
import { mockOffer } from './data/mock/mock-offer.js';
import{ generationCard } from './generationCard.js';
import { noActiveDocument } from './no-active-document.js';
import { activeDocument } from './active-document.js';

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

noActiveDocument();
activeDocument();

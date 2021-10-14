import {
  getRandomPositiveInteger
} from './utils/get-random-positive-integer.js';
import {
  getRandomPositiveFloat
} from './utils/get-random-positive-float.js';
import {
  generationCard
} from './generationCard.js';
import { mockAuthor } from './data/mock/mock-author.js';
import { mockLocation } from './data/mock/mock-location.js';
import { mockOffer } from './data/mock/mock-offer.js';
getRandomPositiveFloat(1.2323, 2.1122);
getRandomPositiveInteger(1, 10);



const createoObject = function (_item, index) {
  const location = mockLocation();
  return {
    author: mockAuthor(index),
    offer: mockOffer(location),
    location,
  };
};
const offers = Array.from({
  length: 10
}, createoObject);

offers;
const cardsHtml = generationCard(offers);
//console.log(card);
const display = document.querySelector("#map-canvas");

//cardsHtml.forEach((cardHtml)=>display.appendChild(cardHtml));

display.appendChild(cardsHtml[0])

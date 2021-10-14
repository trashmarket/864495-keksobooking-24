import {
  getRandomPositiveInteger
} from './utils/get-random-positive-integer.js';
import {
  getRandomPositiveFloat
} from './utils/get-random-positive-float.js';
import {
  arrFeatures,
  photosArr
} from './data.js';
import {
  generationCard
} from './generationCard.js';
import {
  getRandomIntInclusive
} from './utils/get-random-int-inclusive.js';
import {
  getRandomArbitrary
} from './utils/get-random-arbitrary.js';
import {
  randomArr
} from './utils/get-random-arr.js';
import { mockAuthor } from './data/mock/mock-author.js';
import { mockLocation } from './data/mock/mock-location.js';
getRandomPositiveFloat(1.2323, 2.1122);
getRandomPositiveInteger(1, 10);



const createoObject = function (_item, index) {
  return {
    author: mockAuthor(index),
    offer: {
      title: 'Элитный дом',
      address: location.lat, //<-- Показывает undefined не знаю как решить эту проблему.
      price: getRandomIntInclusive(1000000, 20000000),
      type: 'house',
      rooms: getRandomIntInclusive(1, 6),
      guests: getRandomIntInclusive(1, 10),
      checkin: `${getRandomIntInclusive(12, 14)}-00`,
      checkout: `${getRandomIntInclusive(12, 14)}-00`,
      features: randomArr(getRandomIntInclusive(0, 5), arrFeatures),
      description: 'Большие комнаты',
      photos: randomArr(getRandomIntInclusive(0, 2), photosArr),
    },
    location: mockLocation(),
  };
};
const createArray = Array.from({
  length: 10
}, createoObject);

createArray;
let card = generationCard(createArray);
//console.log(card);

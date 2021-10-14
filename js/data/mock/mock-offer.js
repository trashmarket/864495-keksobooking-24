import { getRandomIntInclusive } from '../../utils/get-random-int-inclusive.js';
import { randomArr } from '../../utils/random-arr.js';
import { arrFeatures,photosArr } from '../../data.js';

const MIN_ROOMS = 1;
const MAX_ROOMS = 6;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

export const mockOffer = (location) => ({
  title: 'Элитный дом',
  address: `lat: ${location.lat}, lng:${location.lng}`,
  price: getRandomIntInclusive(1000000, 20000000),
  type: 'house',
  rooms: getRandomIntInclusive(MIN_ROOMS, MAX_ROOMS),
  guests: getRandomIntInclusive(MIN_GUESTS, MAX_GUESTS),
  checkin: `${getRandomIntInclusive(12, 14)}-00`,
  checkout: `${getRandomIntInclusive(12, 14)}-00`,
  features: randomArr(getRandomIntInclusive(0, 5), arrFeatures),
  description: 'Большие комнаты',
  photos: randomArr(getRandomIntInclusive(0, 2), photosArr),
});

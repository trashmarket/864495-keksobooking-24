import { getRandomArbitrary } from '../../utils/get-random-arbitrary.js';

const LAT_MIN = 30.6;
const LAT_MAX = 36.12;

const LNG_MIN = 111.1;
const LNG_MAX = 140.24;

export const mockLocation = () => ({
  lat: getRandomArbitrary(LAT_MIN, LAT_MAX, 5),
  lng: getRandomArbitrary(LNG_MIN, LNG_MAX, 5),
});

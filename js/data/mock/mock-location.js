import { getRandomArbitrary } from '../../utils/get-random-arbitrary.js';

const LAT_MIN = 35.4;
const LAT_MAX = 36.22;

const LNG_MIN = 139.28;
const LNG_MAX = 140.24;

export const mockLocation = () => ({
  lat: getRandomArbitrary(LAT_MIN, LAT_MAX, 5),
  lng: getRandomArbitrary(LNG_MIN, LNG_MAX, 5),
});

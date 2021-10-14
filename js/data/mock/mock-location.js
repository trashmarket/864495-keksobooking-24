const LAT_MIN = 35.65;
const LAT_MAX = 35.7;

const LNG_MIN = 139.7;
const LNG_MAX = 139.8;
export const mockLocation = ()=>({
  lat: getRandomArbitrary(LAT_MIN, LAT_MAX, 5),
  lng: getRandomArbitrary(LNG_MIN, LNG_MAX, 5),
});

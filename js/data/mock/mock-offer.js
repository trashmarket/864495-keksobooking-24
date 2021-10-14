import { getRandomIntInclusive } from "../../utils/get-random-int-inclusive";
import { formatLocationAsAddress } from "./format-location";

export const mockOffer = (location) => ({
  title: 'Элитный дом',
  address: formatLocationAsAddress(location),
  price: getRandomIntInclusive(1000000, 20000000),
  type: 'house',
  rooms: getRandomIntInclusive(1, 6),
  guests: getRandomIntInclusive(1, 10),
  checkin: `${getRandomIntInclusive(12, 14)}-00`,
  checkout: `${getRandomIntInclusive(12, 14)}-00`,
  features: randomArr(getRandomIntInclusive(0, 5), arrFeatures),
  description: 'Большие комнаты',
  photos: randomArr(getRandomIntInclusive(0, 2), photosArr),
});

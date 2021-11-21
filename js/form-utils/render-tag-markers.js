import {
  generationOneCard,
  makePinIcon
} from '../generation-card.js';
import {
  COUNT_CARDS,
  PIN_CARD_URL
} from '../setting.js';
import {
  GuestsCount,
  HouseTypes,
  PriceRange,
  RoomCount
} from './set-Price.js';

const housingTypeSelector = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const houseRoomsSelector = document.querySelector('#housing-rooms');
const houseGuestsSelector = document.querySelector('#housing-guests');
const housingFeaturesSelector = document.querySelector('#housing-features');

let markerGroup = null;

const getHouseTypeFilter = (type) => {
  const settings = HouseTypes[type];
  if (typeof settings === 'object' || settings === null) {
    return settings.filter;
  }
  return undefined;
};

const applyPredict = (offer, pred) => {
  if (typeof pred === 'function') {
    return pred(offer);
  }
  return true;
};

const applyFeatures = (offerFeatures, filterFeatures) => {
  if (!Array.isArray(filterFeatures) || filterFeatures.length <= 0) {
    return true;
  }
  if (!Array.isArray(offerFeatures) || offerFeatures.length <= 0) {
    return false;
  }
  return filterFeatures.every((filter) => offerFeatures.some((offer) => offer === filter));
};

const makeFiltering = (data, filter) => {
  const typePredict = getHouseTypeFilter(filter.type);
  const pricePredict = PriceRange[filter.price];
  const roomPredict = RoomCount[filter.rooms];
  const guestsPredict = GuestsCount[filter.guests];
  return data.filter((item) => (
    applyPredict(item.offer, typePredict) &&
    applyPredict(item.offer, pricePredict) &&
    applyPredict(item.offer, roomPredict) &&
    applyPredict(item.offer, guestsPredict) &&
    applyFeatures(item.offer.features, filter.features)
  ));
};

const prepareFilter = ()=>(
  {
    type: housingTypeSelector.value,
    price: housingPrice.value,
    rooms: houseRoomsSelector.value,
    guests: houseGuestsSelector.value,
    features: [...housingFeaturesSelector.querySelectorAll('input[type=checkbox]')].filter((item) => item.checked).map((item) => item.value),
  }
);

const ensureMarkerGroup = (map) => {
  if (markerGroup) {
    markerGroup.clearLayers();
  } else {
    markerGroup = L.layerGroup().addTo(map);
  }
};

export const renderTagMarkers = (arrayData, map) => {
  ensureMarkerGroup(map);

  const filtered = makeFiltering(arrayData, prepareFilter());
  filtered.slice(0, COUNT_CARDS).forEach((tag) => {
    const iconTag = makePinIcon(PIN_CARD_URL);
    const tagMarker = L.marker(
      tag.location, {
        draggable: false,
        icon: iconTag,
      },
    );
    tagMarker.addTo(markerGroup).bindPopup(generationOneCard(tag));
  });
};


import {
  generationOneCard,
  makePinIcon
} from '../generation-card.js';
import {
  COUNT_CARDS,
  PIN_CARD_URL
} from '../settings.js';
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

const applyPred = (offer, pred) => {
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

const getHouseTypeFilter = (filterType)=>{
  const settings =HouseTypes[filterType];
  if(typeof settings === 'object' && settings !== null){
    return settings.filter;
  }
  return undefined;
};

const makeFiltering = (data, filter) => {
  const typePred = getHouseTypeFilter(filter.type);
  const pricePred = PriceRange[filter.price];
  const roomsPred = RoomCount[filter.rooms];
  const guestsPred = GuestsCount[filter.guests];

  return data.filter((record) => (
    applyPred(record.offer, typePred) &&
    applyPred(record.offer, pricePred) &&
    applyPred(record.offer, roomsPred) &&
    applyPred(record.offer, guestsPred) &&
    applyFeatures(record.offer.features, filter.features)
  ));
};

const prepareFilter = ()=>(
  {
    type: housingTypeSelector.value,
    price: housingPrice.value,
    rooms: houseRoomsSelector.value,
    guests: houseGuestsSelector.value,
    features: [...housingFeaturesSelector.querySelectorAll('input[type=checkbox]')].filter((e)=>e.checked).map((e)=>e.value),
  }
);

const ensureMarkerGroup = (map)=>{
  if(markerGroup === null)
  {
    markerGroup = L.layerGroup().addTo(map);
  } else {
    markerGroup.clearLayers();
  }
};

const renderTagMarkers = (arrayData, map) => {

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


export {
  renderTagMarkers
};

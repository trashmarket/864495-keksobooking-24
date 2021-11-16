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

let houseType = 'any';
let housePrice = 'any';
let houseRooms = 'any';
let houseGuest = 'any';
const houseFetaures = [];
const housingTypeSelector = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const houseRoomsSelekt = document.querySelector('#housing-rooms');
const houseGuestsSelekt = document.querySelector('#housing-guests');
const housingFeaturesSelekt = document.querySelector('#housing-features');

let markerGroup;

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

const makeFiltering = (data, filter) => {
  const typePred = HouseTypes[filter.type];
  const pricePred = PriceRange[filter.price];
  const roomsPred = RoomCount[filter.rooms];
  const guestsPred = GuestsCount[filter.guests];

  return data.filter((offer) => (
    applyPred(offer, typePred) &&
    applyPred(offer, pricePred) &&
    applyPred(offer, roomsPred) &&
    applyPred(offer, guestsPred) &&
    applyFeatures(offer.features, filter.features)
  ));
};

const prepareFilter = ()=>(
  {
    type: housingTypeSelector.value,
    price: housingPrice.value,
    rooms: houseRoomsSelekt.value,
    guests: houseGuestsSelekt.value,
    features: [...housingFeaturesSelekt.querySelectorAll('input[type=checkbox]')].filter((e)=>e.checked).map((e)=>e.value),
  }
);

const ensureMarkerGroup = (map)=>{
  if(markerGroup !== null)
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

const changinFunction = (selektor) => {
  markerGroup.clearLayers();
  const type = selektor.value;
  return type;
};

const changingType = (cb) => {
  housingTypeSelector.addEventListener('input', () => {
    houseType = changinFunction(housingTypeSelector);
    cb();
  });
};

const changingPrice = (cb) => {
  housingPrice.addEventListener('input', () => {
    housePrice = changinFunction(housingPrice);
    cb();
  });
};

const changingRooms = (cb) => {
  houseRoomsSelekt.addEventListener('input', () => {
    houseRooms = changinFunction(houseRoomsSelekt);
    cb();
  });
};

const changingGuests = (cb) => {
  houseGuestsSelekt.addEventListener('input', () => {
    houseGuest = changinFunction(houseGuestsSelekt);
    cb();
  });
};

const changingFeatures = (cb) => {
  housingFeaturesSelekt.addEventListener('click', (event) => {
    if (event.target.closest('.map__checkbox')) {
      markerGroup.clearLayers();
      const featuresValue = event.target.value;
      const featuresIndex = houseFetaures.indexOf(featuresValue);
      if (featuresIndex !== -1) {
        houseFetaures.splice(featuresIndex, 1);
      } else {
        houseFetaures.push(featuresValue);
      }
      cb();
    }
  });
};

export {
  renderTagMarkers,
  changingType,
  changingPrice,
  changingRooms,
  changingGuests,
  changingFeatures
};

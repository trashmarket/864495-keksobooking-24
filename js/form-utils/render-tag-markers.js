import { generationOneCard } from '../generation-card.js';
const COUNT_CARDS = 10;
let houseType = 'any';
let housePrice = 'any';
const HOUSE_ROOMS = 'any';
const HOUSE_FEATURES = '';
const housingTypeSelector = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');

let markerGroup;

const renderTagMarkers = (arrayData, map) => {
  markerGroup = L.layerGroup().addTo(map);
  arrayData.slice(0, COUNT_CARDS).filter((tag) => {
    if (houseType === 'any' || tag.offer.type === houseType ) {
      return true;
    }
  }).filter((tag) => {
    if (housePrice === 'any') {
      return true;
    }
    if (housePrice === 'middle') {
      if (tag.offer.price >= 10000 && tag.offer.price <= 50000) {
        return true;
      }
    }
    if (housePrice === 'low') {
      if (tag.offer.price <= 10000) {
        return true;
      }
    }
    if (housePrice === 'high') {
      if (tag.offer.price >= 50000) {
        return true;
      }
    }
  }).forEach((tag) => {
    const iconTag = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });
    const tagMarker = L.marker(
      tag.location,
      {
        draggable: true,
        icon: iconTag,
      },
    );
    tagMarker.addTo(markerGroup).bindPopup(generationOneCard(tag));
  });
};

const changingType = (cb) => {
  housingTypeSelector.addEventListener('input', () => {
    markerGroup.clearLayers();
    const type = housingTypeSelector.value;
    houseType = type;
    cb();
  });
};

const changingPrice = (cb) => {
  housingPrice.addEventListener('input', () => {
    markerGroup.clearLayers();
    const price = housingPrice.value;
    housePrice = price;
    cb();
  });
};

export {renderTagMarkers, changingType, changingPrice};

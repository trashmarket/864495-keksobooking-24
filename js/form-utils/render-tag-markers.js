import { generationOneCard } from '../generation-card.js';
const COUNT_CARDS = 30;
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

const renderTagMarkers = (arrayData, map) => {
  markerGroup = L.layerGroup().addTo(map);

  arrayData.slice(20, COUNT_CARDS).filter((tag) => {
    if ((houseType === 'any' || tag.offer.type === houseType)
    && (houseRooms === 'any' || tag.offer.rooms === +houseRooms)
    && (houseGuest === 'any' || tag.offer.guests === +houseGuest)
    ) {
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
  }).filter((tag) => {
    if (houseFetaures.join() === '') {
      return true;
    }

    if (tag.offer.features) {
      const array = tag.offer.features.map((item) => {
        for (let i=0; i < houseFetaures.length; i++) {
          if (item === houseFetaures[i]){
            return item;
          }
        }
      });

      houseFetaures.sort();
      array.sort();
      if (houseFetaures.join('') === array.join('')){
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
    if (event.target.closest('.map__checkbox')){
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

export {renderTagMarkers, changingType, changingPrice, changingRooms, changingGuests, changingFeatures};

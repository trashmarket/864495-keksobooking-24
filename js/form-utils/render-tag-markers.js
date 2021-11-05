import { generationOneCard } from '../generation-card.js';
const COUNT_CARDS = 10;
const renderTagMarkers = (arrayData, map) => {
  arrayData.slice(0, COUNT_CARDS).forEach((tag) => {
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
    tagMarker.addTo(map).bindPopup(generationOneCard(tag));
  });
};

export {renderTagMarkers};

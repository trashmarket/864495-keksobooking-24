import { setTypeTextContent } from './form-utils/set-Price.js';
const card = document.querySelector('#card').content;
const cardElement = card.querySelector('.popup');

const generationOneCard = (house) => {
  const newCard = cardElement.cloneNode(true);
  newCard.querySelector('.popup__title').textContent = house.offer.title;
  newCard.querySelector('.popup__text--address').textContent = house.offer.address;
  newCard.querySelector('.popup__text--price').textContent = `${house.offer.price} Рублей`;
  newCard.querySelector('.popup__type').textContent = setTypeTextContent(house.offer.type);
  newCard.querySelector('.popup__text--capacity').textContent = `${house.offer.rooms} комнаты для ${house.offer.guests}`;
  newCard.querySelector('.popup__text--time').textContent = `Заезд после ${house.offer.checkin}, выезд до ${house.offer.checkout}`;
  newCard.querySelector('.popup__features').innerHTML = (house.offer.features) ? house.offer.features.map((item)=> `<li class="popup__feature popup__feature--${item}">${item}</li>`).join(' ') : '';
  newCard.querySelector('.popup__description').textContent = house.offer.description;
  newCard.querySelector('.popup__photos').innerHTML = house.offer.photos ? house.offer.photos.map((item)=>`<img src="${item}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join(' ') : '';
  newCard.querySelector('.popup__avatar').src = house.author.avatar;
  return newCard;
};

const generationCard = function (cards) {
  return cards.map(generationOneCard);
};

//console.log(arr);
export {generationCard, generationOneCard};

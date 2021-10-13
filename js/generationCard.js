const card = document.querySelector('#card').content;
const cardElement = card.querySelector('.popup');
const map = document.querySelector('#map-canvas');
let arr = [];

const similarListFragment = document.createDocumentFragment();
let type = '';
const chengType = function (text) {
  type = text;
};
const generationCard = function (createArray) {
  createArray.forEach((house) => {

    switch (house.offer.type) {
      case 'house': chengType('дом');
        break;
    }

    const newCard = cardElement.cloneNode(true);
    newCard.querySelector('.popup__title').textContent = house.offer.title;
    newCard.querySelector('.popup__text--address').textContent = house.offer.address;
    newCard.querySelector('.popup__text--price').textContent = `${house.offer.price} Рублей`;
    newCard.querySelector('.popup__type').textContent = type;
    newCard.querySelector('.popup__text--capacity').textContent = `${house.offer.rooms} комнаты для ${house.offer.guests}`;
    newCard.querySelector('.popup__text--time').textContent = `Заезд после ${house.offer.checkin}, выезд до ${house.offer.checkout}`;
    newCard.querySelector('.popup__features').innerHTML = house.offer.features.map((item)=> `<li class="popup__feature popup__feature--${item}">${item}</li>`).join(' ');
    newCard.querySelector('.popup__description').textContent = house.offer.description;
    newCard.querySelector('.popup__photos').innerHTML = house.offer.photos.map((item)=>`<img src="${item}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join(' ');
    newCard.querySelector('.popup__avatar').src = house.author.avatar;
    arr.push(newCard);
    return arr;//<=== Не работает ретюрн пора походу вязть консультацию есть не понятки.
    similarListFragment.appendChild(newCard);
  });
};

map.appendChild(similarListFragment);

console.log(arr);
export {generationCard};

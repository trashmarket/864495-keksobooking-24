import { PRICE_RANGE_HIGHT, PRICE_RANGE_LOW } from '../settings.js';

export const HouseTypes = {
  bungalow:{
    price: 0,
    label: 'Бунгало',
    filter: (offer)=>offer.type === 'bungalow',
  },
  flat: {
    price: 1000,
    label: 'Квартира',
    filter: (offer)=>offer.type === 'flat',
  },
  hotel:{
    price: 3000,
    label: 'Отель',
    filter: (offer)=>offer.type === 'hotel',
  },
  palace:{
    price:10000,
    label: 'Дворец',
    filter: (offer)=>offer.type === 'palace',
  },
  house: {
    price: 5000,
    label: 'Дом',
    filter: (offer)=>offer.type === 'house',
  },
};

export const PriceRange = {
  low:(offer)=>offer.price<PRICE_RANGE_LOW,
  middle: (offer)=>offer.price<PRICE_RANGE_HIGHT && offer.price >=PRICE_RANGE_LOW,
  high: (offer)=>offer.price>= PRICE_RANGE_HIGHT,
};

const setPrice = (type, priceInput) => {
  const value = HouseTypes[type].price;
  priceInput.placeholder = value;
  priceInput.min = value;
};

const setTypeTextContent = (typeHouse) =>  HouseTypes[typeHouse].label;

export const setSyncMinPrice = (typeHouse, priceInput)=>{
  typeHouse.addEventListener('input', () => {
    setPrice(typeHouse.value, priceInput);
  });
};

export {setPrice, setTypeTextContent};


export const HouseTypes = {
  bungalow:{
    price: 0,
    label: 'Бунгало',
  },
  flag: {
    price: 1000,
    label: 'Квартира',
  },
  hotel:{
    price: 3000,
    label: 'Отель',
  },
  palace:{
    price:10000,
    label: 'Дворец',
  },
  house: {
    price: 5000,
    label: 'Дом',
  },
};

const setPrice = (type, priceInput) => {
  priceInput.placeholder = HouseTypes[type].price;
};

const setTypeTextContent = (typeHouse) =>  HouseTypes[typeHouse].label;

export {setPrice, setTypeTextContent};


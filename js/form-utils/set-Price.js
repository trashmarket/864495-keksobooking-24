export const HouseTypes = {
  bungalow:{
    price: 0,
    label: 'Бунгало',
  },
  flat: {
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


const setting = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  palace:10000,
  house: 5000,
};

const rusLang = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  palace: 'Дворец',
  house: 'Дом',
};

const setPrice = (type, priceInput) => {
  priceInput.placeholder = setting[type];
};

const setTypeTextContent = (typeHouse) => {
  const text = rusLang[typeHouse];
  return text;
};

export {setPrice, setTypeTextContent};


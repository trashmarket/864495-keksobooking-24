import { MAX_PRICE } from '../settings.js';

const getValidationMessage = (price)=> (price > MAX_PRICE? `Превысили на ${price - MAX_PRICE} рублей`: '');
const getMinValidationMessage = (price, minPrice) => (price<minPrice?'Увеличьте цену': '');

export const priceInputCustom = (priceInput) => {
  const value = +priceInput.value;
  const minPrice = +priceInput.min;
  priceInput.setCustomValidity(getMinValidationMessage(value,minPrice) ||getValidationMessage(value));
  priceInput.reportValidity();
};

export const setMaxPriceValidator = (control)=>{
  control.addEventListener('input',()=>priceInputCustom(control));
};

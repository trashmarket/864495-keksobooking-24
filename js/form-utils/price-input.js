import { MAX_PRICE } from '../settings.js';

const getValidationMessage = (price)=> (price > MAX_PRICE? `Превысили на ${price - MAX_PRICE} рублей`: '');
export const priceInputCustum = (priceInput) => {
  priceInput.setCustomValidity(getValidationMessage(priceInput.value));
  priceInput.reportValidity();
};

export const setMaxPriceValidator = (control)=>{
  control.addEventListener('input',()=>priceInputCustum(control));
};

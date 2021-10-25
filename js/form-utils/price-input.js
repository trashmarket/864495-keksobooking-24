export const priceInputCustum = (priceInput, maxPrice) => {
  const valuePrice = priceInput.value;

  if (valuePrice > maxPrice) {
    priceInput.setCustomValidity(`Превысили на ${valuePrice - maxPrice} рублей`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
};

export const priceInputCustum = (priceInput, maxPrice) => {
  const valuePrice = priceInput.value;

  if (valuePrice > maxPrice) {
    priceInput.setCustomValidity(`Привысили на ${valuePrice - maxPrice} рублей`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
};

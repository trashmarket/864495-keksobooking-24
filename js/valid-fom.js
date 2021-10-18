// price

const priceInput = document.querySelector('#price');
const MAX_PRICE = 1000000;

priceInput.addEventListener('input', () => {
  const valuePrice = priceInput.value;

  if (valuePrice > MAX_PRICE) {
    priceInput.setCustomValidity(`Привысили на ${valuePrice - MAX_PRICE} рублей`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});

// roomNumber

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityChildren = capacity.querySelectorAll('option');

roomNumber.addEventListener('input', () => {
  const valueRooms = +roomNumber.value;

  for (let i = 0; i < capacityChildren.length; i++) {
    if (capacityChildren[i].value > valueRooms) {
      capacityChildren[i].disabled = true;
    } else {
      capacityChildren[i].disabled = false;
    }
  }
});

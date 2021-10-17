const titleInput = document.querySelector('#title');
const MIN_LENGTH = 20;
const MAX_LENGTH = 100;

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_LENGTH) {
    titleInput.setCustomValidity(`еще пожалуйста ${MIN_LENGTH - valueLength}`);
  } else if (valueLength > MAX_LENGTH) {
    titleInput.setCustomValidity(`нужно удалить ${valueLength - MAX_LENGTH}`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

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

import { MAX_LENGTH, MIN_LENGTH } from '../settings.js';

const getValidationOnLong = (currentLength) => (
  currentLength > MAX_LENGTH ?
    `нужно удалить ${currentLength - MAX_LENGTH}` :
    ''
);

const getValidationMessage = (currentLength) => (
  currentLength < MIN_LENGTH ?
    `еще пожалуйста ${MIN_LENGTH - currentLength}` :
    getValidationOnLong(currentLength)
);


export const checkTitleValidity = function (titleInput) {
  titleInput.setCustomValidity(getValidationMessage(titleInput.value.length));
  titleInput.reportValidity();
};

export const setTitleValidator = (control) => {
  control.addEventListener('input',()=>checkTitleValidity(control));
};

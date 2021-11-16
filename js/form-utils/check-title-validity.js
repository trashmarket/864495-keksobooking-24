const getValidationOnLong = (currentLength, maxLength) => (
  currentLength > maxLength ?
    `нужно удалить ${currentLength - maxLength}` :
    ''
);

const getValidationMessage = (currentLength, minLength, maxLength) => (
  currentLength < minLength ?
    `еще пожалуйста ${minLength - currentLength}` :
    getValidationOnLong(currentLength, maxLength)
);


export const checkTitleValidity = function (titleInput, minLength, maxLength) {
  titleInput.setCustomValidity(getValidationMessage(titleInput.value.length, minLength, maxLength));
  titleInput.reportValidity();
};

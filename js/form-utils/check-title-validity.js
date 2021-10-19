export const checkTitleValidity = function (titleInput, minLength, maxLength) {
  const valueInput = titleInput.value.length;

  if (valueInput < minLength) {
    titleInput.setCustomValidity(`еще пожалуйста ${minLength - valueInput}`);
  } else if (valueInput > maxLength) {
    titleInput.setCustomValidity(`нужно удалить ${valueInput - maxLength}`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
};

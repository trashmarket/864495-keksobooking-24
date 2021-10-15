const shutDownDocument = function (form, formChildren, mapForm, mapFormChildren) {
  form.classList.add('ad-form--disabled');
  mapForm.classList.add('ad-form--disabled');
  formChildren.forEach((item) => {
    item.disabled = true;
  });

  mapFormChildren.forEach((item) => {
    item.disabled = true;
  });
};

export { shutDownDocument };

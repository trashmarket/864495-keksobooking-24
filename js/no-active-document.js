const shutDownDocument = function (form, formChildren, mapForm, mapFormChildren) {
  form.classList.add('ad-form--disabled');
  formChildren.forEach((item) => {
    item.disabled = true;
  });

  mapForm.classList.add('ad-form--disabled');
  mapFormChildren.forEach((item) => {
    item.disabled = true;
  });
};

export { shutDownDocument };

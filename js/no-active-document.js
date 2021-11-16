const shutDownDocument = function (form, formChildren, mapForm, mapFormChildren) {
  form.classList.add('ad-form--disabled');
  [...form.elements].forEach((item) => {
    item.disabled = true;
  });

  mapForm.classList.add('ad-form--disabled');
  [...mapForm.elements].forEach((item) => {
    item.disabled = true;
  });
};

export { shutDownDocument };

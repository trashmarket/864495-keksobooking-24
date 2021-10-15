export const turningOnDocument = function (form, formChildren, mapForm, mapFormChildren) {
  form.classList.remove('ad-form--disabled');
  mapForm.classList.remove('ad-form--disabled');
  formChildren.forEach((item) => {
    item.disabled = false;
  });

  mapFormChildren.forEach((item)=>{
    item.disabled = false;
  });
};

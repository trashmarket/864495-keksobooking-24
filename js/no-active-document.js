const settings = {
  disabled: {
    action: 'add',
    flag: true,
  },
  enabled: {
    action: 'remove',
    flag: false,
  },
};
const setFormState = (form, state) => {
  form.classList[state.action]('ad-form--disabled');
  [...form.elements].forEach((item) => {
    item.disabled = state.flag;
  });
};

const shutDownDocument = function (forms) {
  forms.forEach((form)=>setFormState(form, settings.disabled));
};
const turningOnDocument = function(forms){
  forms.forEach((form)=>setFormState(form, settings.enabled));
};

export {
  shutDownDocument,
  turningOnDocument
};

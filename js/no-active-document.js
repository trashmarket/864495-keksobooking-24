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

const shutDownDocument = function ([form, mapForm]) {
  setFormState(form, settings.disabled);

  setFormState(mapForm, settings.disabled);
};

export {
  shutDownDocument
};

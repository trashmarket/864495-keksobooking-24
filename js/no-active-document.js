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

export {
  shutDownDocument
};

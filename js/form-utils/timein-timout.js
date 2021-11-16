export const syncDependentWithChanged = (documentFirst, documentSecond) => {
  documentSecond.value = documentFirst.value;
};

const syncFirstSecond = (changed, dependent) => {
  changed.addEventListener('input', () => syncDependentWithChanged(changed, dependent));
};

export const syncCheckInCheckOutTime = (checkInInput, checkOutInput) => {
  syncFirstSecond(checkInInput, checkOutInput);
  syncFirstSecond(checkOutInput, checkInInput);
};

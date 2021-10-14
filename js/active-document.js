export const activeDocument = function () {
  const FORM_AD = document.querySelector('.ad-form');
  const FORM_AD_CHILDREN = FORM_AD.children;
  const MAP_FILTER = document.querySelector('.map__filters');
  const MAP_CHILDREN = MAP_FILTER.children;
  FORM_AD.classList.remove('ad-form--disabled');
  MAP_FILTER.classList.remove('ad-form--disabled');

  for (let i = 0; i < FORM_AD_CHILDREN.length; i++) {
    FORM_AD_CHILDREN[i].disabled = false;
  }

  for (let i = 0; i < MAP_CHILDREN.length; i++) {
    MAP_CHILDREN[i].disabled = false;
  }
};

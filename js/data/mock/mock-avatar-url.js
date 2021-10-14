const NUMBER_OF_USERS_IMG = 11;

const widthNuber = function (numImg) {
  return numImg.toString().padStart(2, 0);
};

const createImgNumber = function (index) {
  const numImg = 1 + (index % NUMBER_OF_USERS_IMG);
  return widthNuber(numImg);
};

export { createImgNumber };

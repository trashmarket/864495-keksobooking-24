const NUMBER_OF_USER_IMGS = 11;
const formatWithLeadingZero = function(aNumber){
  return aNumber.toString().padStart(2,'0');
}
const createImgNumber = function (index) {
  const numImg = 1+(index % NUMBER_OF_USER_IMGS);
  return formatWithLeadingZero(numImg);
};

export const getAvatarUrl = (index) => `img/avatars/user${  createImgNumber(index) }.png`

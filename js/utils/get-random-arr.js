export const randomArr = function (num, arr) {
  const arrNew = [];

  for (let i = num; i < arr.length; i++) {
    arrNew.push(arr[i]);
  }
  return arrNew;
};

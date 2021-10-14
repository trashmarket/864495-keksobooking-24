export {getRandomIntInclusive};
function getRandomIntInclusive(num1, num2) {

  if (num1 < 0 || num2 < 0) {
    return 'Меньше нуля';
  }

  if (num1 === num2) {
    return 'Два числа равны друг другу';
  }

  num1 = num1 < num2 ?  Math.ceil(num1) : Math.floor(num1);
  num2 = num2 > num1 ? Math.floor(num2) : Math.ceil(num2);

  if (num1 < num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  } else {
    return Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
  }
}

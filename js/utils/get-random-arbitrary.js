export function getRandomArbitrary(num1, num2, fixed) {
  if (num1 < 0 || num2 < 0) {
    return 'Меньше нуля';
  }

  if (num1 === num2) {
    return 'Два числа равны друг другу';
  }

  if (num1 < num2) {
    return (Math.random() * (num2 - num1) + num1).toFixed(fixed);
  } else {
    return (Math.random() * (num1 - num2) + num2).toFixed(fixed);
  }
}

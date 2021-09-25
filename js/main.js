function getRandomIntInclusive(num1, num2) {

  if (num1 < 0 || num2 < 0) {
    return 'Меньше нуля';
  }

  if (num1 === num2) {
    return 'Два числа равны друг другу';
  }

  num1 = num1 < num2 ?  Math.ceil(num1) : Math.floor(num1);
  num2 = num2 > num1 ? Math.floor(num2) : Math.floor(num2);

  if (num1 < num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  } else {
    return Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
  }
}

getRandomIntInclusive(5, 4);

//console.log(getRandomIntInclusive(1, 5))

function getRandomArbitrary(num1, num2, fixed) {
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

//console.log(getRandomArbitrary(3, 5.1, 5));
getRandomArbitrary(3, 5.1, 5);

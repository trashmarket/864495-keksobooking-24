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


getRandomArbitrary(3, 5.1, 5);
let numImg = 0;

const createImgNumber = function () {
  numImg++;
  return numImg < 10 ? '0' + numImg : numImg;

};

const arrFeatures = ['wifi','dishwasher','parking','washer','elevator','conditioner'];
const photosArr = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const randomArr = function (num, arr) {
  const arrNew = [];

  for (let i = num; i < arr.length; i++) {
    arrNew.push(arr[i]);
  }
  return arrNew;
};


const createoObject = function () {
  return {
    author: {
      avatar: `img/avatars/user${  createImgNumber() }.png`,
    },
    offer: {
      title: 'Элитный дом',
      address: location.lat,//<-- Показывает undefined не знаю как решить эту проблему.
      price: getRandomIntInclusive(1000000, 20000000),
      type: 'house',
      rooms: getRandomIntInclusive(1, 6),
      guests: getRandomIntInclusive(1, 10),
      checkin: getRandomIntInclusive(12, 14) + '-00',
      checkout: getRandomIntInclusive(12, 14) + '-00',
      features: randomArr(getRandomIntInclusive(0, 5), arrFeatures),
      description: 'Большие комнаты',
      photos:  randomArr(getRandomIntInclusive(0, 3), photosArr),
    },
    location: {
      lat: getRandomArbitrary(35.65000, 35.70000, 5),
      lng: getRandomArbitrary(139.70000, 139.80000, 5),
    },
  };
};
const createArray = Array.from({length:10}, createoObject);

console.log(createArray);

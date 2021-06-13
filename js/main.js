const generateFractional = (min, max) => {
  if (max > min && min >= 0) {
    return Math.floor(Math.random() * (max - min) + min);
  } else {
    throw new RangeError('Проверь числа');
  }
};

// eslint-disable-next-line no-console
console.log(generateFractional(0, 10));

const generateInt = (min, max) => {
  if (max > min && min >= 0) {
    return Number((Math.random() * (max - min) + min).toFixed(4));
  }

  throw new RangeError('Проверь числа!');
};

// eslint-disable-next-line no-console
console.log(generateInt(0, 10));

const randomConverterFractional = (min, max) => {
  if (max > min && min >= 0) {
    return Math.floor(Math.random() * (max - min) + min);
  } else {
    throw new RangeError('Проверь числа');
  }
};

randomConverterFractional(0, 10);

const randomConverterInteger = (min, max) => {
  if (max > min && min >= 0) {
    return Math.random() * (max - min) + min;
  } else {
    throw new RangeError('Проверь числа!');
  }
};

randomConverterInteger(0, 10).toFixed(4);

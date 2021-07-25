const generateInt = (min, max) => {
  if (max > min && min >= 0) {
    return Math.round(Math.random() * (max - min) + min);
  }
  throw new RangeError('Проверь числа');
};

const generateFractional = (min, max, afterTheSign) => {
  if (max > min && min >= 0) {
    return (Math.random() * (max - min) + min).toFixed(afterTheSign);
  }

  throw new RangeError('Проверь числа!');
};

const getRandomArrayElement = (elements) => elements[generateInt(0, elements.length - 1)];

const getRandomArray = (array) => (
  array.slice(0, generateInt(0, array.length))
);

export {
  generateInt,
  generateFractional,
  getRandomArrayElement,
  getRandomArray
};

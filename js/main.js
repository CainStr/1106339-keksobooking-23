// function randomIntegers(min, max) {
//   if (max > min && min >= 0) {
//     return Math.floor(Math.random() * (max - min) + min);
//   } else {
//     alert('Проверь числа');
//   }
// }
// randomIntegers(-1, 10);
// или этот вариант--->

const randomIntegers = (min, max) => (max > min && min >= 0) ?
  Math.floor(Math.random() * (max - min) + min) :
  // eslint-disable-next-line no-alert
  alert('Проверь числа');
randomIntegers(0, 10);


const randomFractional = (min, max) => (max > min && min >= 0) ?
  Math.random() * (max - min) + min :
  // eslint-disable-next-line no-alert
  alert('Проверь числа');
randomFractional(0, 10);

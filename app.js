function filterNumbers(numbers, condition) {
  if (typeof condition !== 'function') {
    return undefined;
  }
  const result = [];
  for (let num of numbers) {
    if (!condition(num)) {
      result.push(num);
    }
  }
  return result;
}

const deleteNegative = x => x < 0;

const numbers = [-1, 1, 2, 5, 0, -10, -12, 13];

console.log(filterNumbers(numbers, deleteNegative));
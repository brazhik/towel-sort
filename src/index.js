
module.exports = function towelSort(matrix) {
  let result = [];

  if (matrix !== undefined) {
    matrix.map((value, index) => ((index + 1) % 2 === 0) ? value.reverse() : value).forEach((value) => result.push(...value));
  }

  return result;
}

// console.log(module.exports([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(module.exports());

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let newArray = [];
  let subArray = [];

  for (let i = 0; i < arr.length; i++) {
    subArray.push(arr[i]);

    if (subArray.length === size) {
      newArray.push(subArray);
      subArray = [];
    }
  }
  if (subArray.length) {
    newArray.push(subArray);
  }
  return newArray;
};

console.log(chunk([1, 2, 3, 4, 5], 2));

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredArray = new Array();
  arr.forEach((num, i) => {
    if (fn(arr[i], i)) filteredArray.push(arr[i]);
  });
  return filteredArray;
};

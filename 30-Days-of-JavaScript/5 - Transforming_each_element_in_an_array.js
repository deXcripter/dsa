/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  var array = arr;
  for (const arrays of array) {
    fn(arrays[arr], arr);
  }
};

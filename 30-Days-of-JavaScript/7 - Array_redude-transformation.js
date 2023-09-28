/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }

  var reducedArray = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      reducedArray = fn(init, nums[0]);
    } else if (i > 0) {
      reducedArray = fn(reducedArray, nums[i]);
    }
  }
  return reducedArray;
};

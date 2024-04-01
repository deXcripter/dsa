/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let total = init;
  let final = 0;

  nums.forEach((num, i) => {
    total += fn(total, num);
  });

  return total;
};

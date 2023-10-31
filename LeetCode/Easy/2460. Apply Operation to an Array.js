/**
 * @param {number[]} nums
 * @return {number[]}
 */
const applyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] *= 0;
    }
  }
  let zeros = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros.push(nums[i]);
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.concat(zeros);
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));

// Link
// https://leetcode.com/problems/apply-operations-to-an-array/submissions/

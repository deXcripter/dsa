/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let tempArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      tempArr.push(nums[i]);
      nums.splice(i, 1);
      i -= 1;
    }
  }
  nums.push(...tempArr);
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

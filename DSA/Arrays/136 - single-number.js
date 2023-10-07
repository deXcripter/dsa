/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    let found = true;

    for (let j = 0; j < length; j++) {
      if (i != j) {
        if (nums[i] == nums[j]) {
          found = false;
          continue;
        }
      }
    }
    return nums[i];
  }
};

singleNumber([1, 1, 3, 5, 2, 3, 2, 5, 9, 7, 7]);

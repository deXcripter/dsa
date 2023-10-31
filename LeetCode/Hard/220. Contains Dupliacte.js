/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (j - i <= indexDiff) {
        if (nums[j] - nums[i] < 0) {
          let pos = (nums[j] - nums[i]) * -1;
          if (pos <= valueDiff) {
            return true;
          }
        } else {
          if (nums[j] - nums[i] <= valueDiff) return true;
        }
      }
    }
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));

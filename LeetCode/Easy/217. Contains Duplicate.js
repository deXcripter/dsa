// link https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsDuplicate([1, 3, 2, 6, 34, 123, 34, 12]));

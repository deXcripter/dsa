/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroPointer = 0;

  /**
   * Iterate through the nums arr and anytime you find a value != 0, replace it at the current index of the nonZeroPointer
   * variable, then increment the variable by one so you dont override it.
   * Do nothing if its a zero since we are not interested in it.
   */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroPointer] = nums[i];
      nonZeroPointer++;
    }
  }

  /**
   * At this point, we have successfully transferred all non-zero elements to the beginning of the array,
   * but we now have to clear them out at the end: eg [1,3,0,5,0] becomes [1,3,5,5,0]
   * In this case, the nonZeroPointer should point at index 3, so we start overriding from index 3.
   */
  while (nonZeroPointer < nums.length) {
    nums[nonZeroPointer] = 0;
    nonZeroPointer++;
  }

  console.log(nums);
};

// moveZeroes([1, 2, 4, 0, 0, 1, 0, 3, 0, 5]);
// moveZeroes([0, 1, 0, 3, 12]);
// moveZeroes([0, 1]);
moveZeroes([1, 3, 0, 5, 0]);
// moveZeroes([12, 23, 1, 0, 0, 0, 0, 0, 0, 1, 2, 1, 32, 1]);

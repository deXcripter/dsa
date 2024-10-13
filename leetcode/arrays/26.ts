/**
 *
 * @param nums [1,1,2]
 * @returns [1,2]
 */

function removeDuplicates(nums: number[]): number {
  let k = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

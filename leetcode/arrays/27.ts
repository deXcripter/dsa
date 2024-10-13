/**
 * @param nums
 * @param val
 * TOPICS - ARRAY & TWO-POINTERS
 */

function removeElement(nums: number[], val: number): number {
  if (nums.length === 1) {
    if (nums[0] === val) return 0;
    else return nums[0];
  }
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      nums[right] = val;
      right--;
    } else {
      left++;
    }
  }

  return left;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([1], 1));
console.log(removeElement([3, 3], 3));

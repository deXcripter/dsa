/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // handle the case where it is one
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let middle;

  while (leftPointer <= rightPointer) {
    middle = Math.floor((leftPointer + rightPointer) / 2);
    console.log(leftPointer, middle, rightPointer);

    if (nums[middle] < target) {
      leftPointer = middle + 1;
    } else if (nums[middle] > target) {
      rightPointer = middle - 1;
    } else return middle;
  }

  return leftPointer;
};

// console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
// console.log(searchInsert([1, 3, 4], 2)); // Output: 1
// console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4

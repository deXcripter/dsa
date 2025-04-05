/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let mIndex = m - 1;
  let nIndex = n - 1;
  let pointer = m + n - 1;

  while (nIndex >= 0) {
    if (nums1[mIndex] > nums2[nIndex]) {
      nums1[pointer] = nums1[mIndex];
      mIndex--;
      pointer--;
    } else {
      nums1[pointer] = nums2[nIndex];
      pointer--;
      nIndex--;
    }
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([4, 0, 0, 0], 1, [1, 2, 2, 3], 4));
console.log(merge([1, 2, 4, 5, 6, 0], 5, [3], 1));

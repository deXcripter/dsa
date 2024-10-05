/**
 * @param arr [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]
 * @param val 12
 * @returns 9
 *
 * time complexity -> O(log(n))
 */

const binarySearch = (arr: number[], val: number): number => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  console.log("Works only on sorted arrays");

  while (arr[middle] !== val && left <= right) {
    if (arr[middle] < val) left = middle + 1;
    if (arr[middle] > val) right = middle - 1;
    middle = Math.floor((right + left) / 2);
  }
  if (arr[middle] === val) return middle;
  else return -1;
};

export default binarySearch;

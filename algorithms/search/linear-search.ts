/**
 *
 * @param arr [1, 2, 4, 6, 4, 2, 2, 21]
 * @param val 2
 * @returns 1
 *
 *  Time complexity: O(n)
 *  Space complexity: O(1)
 *
 */

const linearSearch = (arr: number[], val: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

console.log(linearSearch([1, 2, 4, 6, 4, 2, 2, 21], 2));

// [1,2,3,4,5,6,7,8] 8
const binarySearch = (arr: number[], val: number): number => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (arr[middle] !== val && left < right) {
    if (arr[middle] < val) left = middle + 1;
    if (arr[middle] > val) right = middle - 1;
    middle = Math.floor((right + left) / 2);
  }
  if (arr[middle] === val) return middle;
  else return -1;
};

export default binarySearch;

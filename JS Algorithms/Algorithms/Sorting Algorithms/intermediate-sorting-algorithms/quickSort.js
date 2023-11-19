function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const pivot = (arr, start=0, end=arr.length + 1) =>{

  let pivot = start;
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[pivot] > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex)
return swapIndex;
}

const quickSort = (arr, left=0, right=arr.length - 1) => {
  if (left < right){
  let pivotIndex = pivot(arr, left, right)
  quickSort(arr, left, pivotIndex-1);
  quickSort(arr, pivotIndex+1, right)}
  return arr;
}


/* 
Best time complexity: O(n log n)
Worrst time complexity: O(n2)
Best time complexity: O(n log n)

Space complexity: O(log n)
*/
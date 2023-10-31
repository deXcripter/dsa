function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

function bubbleSort (arr) {
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1]) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
};

function merging(arr1, arr2){
  let result =[];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){
     if (arr1[i] < arr2[j]){
      result.push(arr1[i])
      i++;
     }
     else{
      result.push(arr2[i])
      j++;
     }
  }
  while (i < arr1.length){
      result.push(arr1[i])
      i++
  }    while (j < arr2.length){
      result.push(arr2[j])
      j++
  }
  return result;
}

function mergeSort (arr) {
    if (arr.length <= 1) return arr;
    let average = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,average))
    let right = mergeSort(arr.slice(average))
    return merging(left, right)

}

exports.mergeSort = mergeSort;
exports.bubbleSort =bubbleSort;
exports.selectionSort = selectionSort;
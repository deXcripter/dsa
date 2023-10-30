function bubbleSort(arr) {
  //// BUBBLE SORT ALGORITHM

  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         let temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //       }
  //     }
  //   }

  //// OPTIMISED BUBBLE SORT ALGORITHM

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
}

console.log(bubbleSort([4, 287, 45, 3, 46, 312, 1, 23, 32, 412, 43, 2112, 1]));

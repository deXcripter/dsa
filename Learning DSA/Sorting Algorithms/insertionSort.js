/*  Strength
    - When your array is nearly sorted
    - It works very well if for some reason you need your data to be continously sorted
*/

function insetionSort(arr) {
  // From the second index, loop through the array. Select i as your selected value
  for (let i = 1; i < arr.length; i++) {
    let selected = arr[i];

    // Backtrack with j beginning at minus i, and if j < selected value, replace arr[j + 1] with arr[j]
    for (var j = i - 1; j >= 0 && arr[j] > selected; j--) {
      arr[j + 1] = arr[j];
    }
    // Finally, you insert the current value in the proper position
    arr[j + 1] = selected;
  }
  return arr;
}

console.log(insetionSort([1, 5, 2, 3, -2]));

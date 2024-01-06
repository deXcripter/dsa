// eslint-disable-next-line no-unused-vars
function miniMaxSum(arr) {
  let mini = arr[0] + arr[1] + arr[2] + arr[3];
  let max = 0;
  let maxSum = 0;
  let miniSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    // inner loop
    for (let j = 0; j < arr.length; j += 1) {
      if (j !== i) {
        maxSum += arr[j];
        miniSum += arr[j];
      }
    }
    // inner loop

    if (maxSum > max) {
      max = maxSum;
    }
    if (miniSum < mini) {
      mini = miniSum;
    }
    maxSum = 0;
    miniSum = 0;
  }
  console.log(`${mini} ${max}`);
  return [mini, max];
}

// console.log(miniMaxSum([1, 2, 3, 4, 5]));
// console.log(
//   miniMaxSum([140638725, 436257910, 953274816, 734065819, 362748590]),
// );

/* eslint-disable eqeqeq */
/* The positve difference between the left and right sides of a multidimension array */

function diagonalDifference(arr) {
  let rightDiagonal = 0;
  let leftDiagonal = 0;
  let extraHand = arr[0].length - 1;

  for (let i = 0; i < arr.length; i += 1) {
    rightDiagonal += arr[i][i];
    leftDiagonal += arr[extraHand][i];

    extraHand -= 1;
  }

  return Math.abs(rightDiagonal - leftDiagonal);
}

// console.log(
//   diagonalDifference([
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9],
//   ]),
// );

// console.log(
//   diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
//   ]),
// );

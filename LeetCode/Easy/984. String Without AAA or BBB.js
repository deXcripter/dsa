/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  // Declaring global variables
  let longer;
  let shorter;
  let longerB;
  let shorterA;
  let arr = [];

  /// Fetched the longest value
  if (a > b) {
    longer = a;
    shorter = b;
  } else {
    longerB = b;
    shorterA = a;
  }

  if (longerB) {
    for (let i = 0; i < longerB; i++) {
      arr.push("b");
      if (arr[i] === arr[i - 1] && arr[i + 1] === arr[i - 2]) {
        for (let j = 0; j < shorterA; j++) {
          arr.push("a");
          console.log(arr[j]);
        }
      }
    }
    return arr;
  }
};

console.log(strWithout3a3b((a = 3), (b = 5)));

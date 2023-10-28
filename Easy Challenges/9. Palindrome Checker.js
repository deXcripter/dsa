/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  num = x.toString();

  let arr = [];

  for (const val of num) {
    arr.push(val);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }

  return true;
};
console.log(isPalindrome(-1));

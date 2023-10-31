/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let sentence = s.trim();
  sentence = sentence.split(" ");
  let count = 1;
  for (let i = 1; i < sentence[sentence.length - 1].length; i++) {
    count += 1;
  }
  return count;
};

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let increment = 0;

  for (i = 0; i < words.length; i++) {
    for (j = i + 1; j < words.length; j++) {
      if (words[i][0] == words[j][1] && words[i][1] == words[j][0]) {
        increment += 1;
      }
    }
  }
  return increment;
};

console.log(maximumNumberOfStringPairs(["ku", "dd", "gu", "uk"]));

// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/?envType=daily-question&envId=2023-12-01

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function (word1, word2) {
  const str1 = word1.join().replaceAll(',', '');
  const str2 = word2.join().replaceAll(',', '');

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i += 1) {
    if (str1[i] !== str2[i]) return false;
  }
  return true;
};

// console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bcd']));

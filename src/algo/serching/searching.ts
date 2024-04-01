/**
 * The function should accept an array and a value
 * Loop through the array and check if the current array element is equal to the value
 * If found, return the index of the element in which it was found, otherwise return -1
 */

type alphaNum = number | string;

const linearSearch = (arr: alphaNum[], val: alphaNum) => {
  if (typeof val === "string") {
    for (let i = 0; i < arr.length; i++) {
      if (arr.at(i) === val) return i;
    }
    return -1;
  }
};

export = linearSearch;

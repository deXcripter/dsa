/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    if (obj.length < 1) return true;
    return false;
  } else {
    if (Object.entries(obj).length < 1) return true;
    return false;
  }
};

console.log(isEmpty({ name: "john" }));
console.log(isEmpty({ name: "john", bool: true }));
console.log(isEmpty(["some", 2]));
console.log(isEmpty({}));
console.log(isEmpty([]));

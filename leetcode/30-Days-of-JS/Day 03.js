/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (toBeVal) {
      if (toBeVal === val) return true;
      throw new Error("Not Equal");
    },
    notToBe: function (notToBeVal) {
      if (notToBeVal !== val) return true;
      throw new Error("Equal");
    },
  };
};

console.log(expect(1).notToBe("1"));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

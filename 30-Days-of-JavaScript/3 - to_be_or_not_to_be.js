/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
  return {
    toBe: function (secondVal) {
      if (val === secondVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (secondVal) {
      if (val !== secondVal) {
        return true;
      } else if (val === val2) {
        throw new Error("Equal");
      }
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

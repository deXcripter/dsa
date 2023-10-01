/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const records = {};

  return function (...args) {
    let check = JSON.stringify(args);

    if (check in records) {
      return records[check];
    }
    records[check] = fn(...args);
    return records[check];

    return record[number];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

"use strict";
function memoize(fn) {
    const cache = new Map();
    let increment = 0;
    return function (...args) {
        const key = JSON.stringify(args);
        if (args.length < 1)
            return;
        if (cache.get(key) !== undefined) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        increment++;
        return cache.get(key);
    };
}
// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// memoizedFn(0, 0); // 5
// memoizedFn(0, 0); // 5
// memoizedFn(); // 5
// console.log(callCount); // 1

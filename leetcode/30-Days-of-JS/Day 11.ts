type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache = new Map();
  let increment: number = 0;

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.get(key)) {
      return cache.get(key);
    }

    cache.set(key, fn(...args));
    console.log(key);
    increment++;
    return cache.get(key);
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(0, 0); // 5
memoizedFn(0, 0); // 5
memoizedFn(); // 5
console.log(callCount); // 1

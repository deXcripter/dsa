/**
 * @param {number} n
 * @return {Function} counter
 */

/*
SOLUTION
if you look carefully at the problem in the "counter.txt" file, we we're asked to return a "counter function" that increments an integer "n".

To do this, we first need to create a function that accepts a parameter "n", and within that function, create yet another function (counter functon) that increments the value of n, and returns.

NOTE: if n = 10, and we run the code 10 times, we will see
output = {10, 11, 12, 13, 14};
 
the reason for this is stated in the "counter.txt" file
 */

function createCounter(n) {
  return function () {
    return n++;
  };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

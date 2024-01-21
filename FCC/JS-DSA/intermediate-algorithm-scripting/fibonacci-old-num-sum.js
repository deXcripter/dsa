function sumFibs(num) {
  let fib = [1, 1];
  let sum = 2;
  let i = 2;
  while (fib[i - 1] + fib[i - 2] <= num) {
    fib.push(fib[i - 1] + fib[i - 2]);
    if (fib[i] % 2 === 1) {
      sum += fib[i];
    }
    i++;
  }
  return sum;
}

sumFibs(4);

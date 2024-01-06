//link => https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

function divisibleSumPairs(n: number, k: number, ar: [number]) {
  // Write your code here
  let num = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (j !== i && (ar[i] + ar[j]) % k === 0) {
        num = num + 1;
      }
    }
  }
  return num;
}

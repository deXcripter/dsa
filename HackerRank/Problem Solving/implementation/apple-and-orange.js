// link=> https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countA = 0;
  let countB = 0;

  const newApples = apples.map((length) => length + a);
  const newOranges = oranges.map((length) => length + b);

  for (let i = 0; i < newApples.length; i += 1) {
    if (newApples[i] >= s && newApples[i] <= t) countA += 1;
  }
  for (let i = 0; i < newOranges.length; i += 1) {
    if (newOranges[i] >= s && newOranges[i] <= t) countB += 1;
  }

  // console.log(countA, countB);
  return [countA, countB];
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));

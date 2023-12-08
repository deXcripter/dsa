// link => https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

// eslint-disable-next-line no-unused-vars
function breakingRecords(scores) {
  let min = 0;
  let max = 0;
  let minimum = scores[0];
  let maximum = scores[0];

  for (let i = 1; i < scores.length; i += 1) {
    if (scores[i] > maximum) {
      max += 1;
      maximum = scores[i];
    } else if (scores[i] < minimum) {
      min += 1;
      minimum = scores[i];
    }
  }

  return [max, min];
}

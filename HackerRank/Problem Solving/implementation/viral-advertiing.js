// link => https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true

function viralAdvertising(n) {
  let reach;
  let people = 5;
  let cumulative = 0;

  for (let i = 0; i < n; i += 1) {
    reach = Math.floor(people / 2) * 3;
    cumulative += Math.floor(people / 2);
    people = reach;
  }
  return cumulative;
}

console.log(viralAdvertising(4));

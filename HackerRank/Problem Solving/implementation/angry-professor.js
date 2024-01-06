// link => https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true

function angryProfessor(k, a) {
  let hold = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] <= 0) hold += 1;
    if (hold >= k) return 'NO';
  }

  return 'YES';
}

console.log(angryProfessor(3, [-2, -4, 6, 9]));

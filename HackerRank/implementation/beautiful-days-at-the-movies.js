// link => https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true

function beautifulDays(i, j, k) {
  // function to reverse a number //
  const reverse = (num) => {
    const reversedNumber = parseInt(
      num.toString().split('').reverse().join(''),
      10,
    );
    return reversedNumber;
  };
  //
  let count = 0;

  while (i <= j) {
    const rev = reverse(i);

    if (Math.abs(i - rev) % k === 0) {
      count += 1;
    }

    i += 1;
  }

  return count;
}

console.log(beautifulDays(20, 23, 6));

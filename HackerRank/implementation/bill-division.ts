// link => https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < bill.length; i += 1) {
    if (i !== k) {
      sum += bill[i];
    }
  }
  const half = sum / 2;
  if (half === b) {
    return console.log('Bon Appetit');
  }
  return console.log(b - half);
}

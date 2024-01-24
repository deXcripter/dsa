function smallestCommons(arr) {
  const array = [...arr];
  const [min, max] = array.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => min + i);
  const gcd = (a, b) => (!b ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

console.log(smallestCommons([1, 5]));

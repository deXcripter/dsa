function maxFrequencyElements(nums: number[]): number {
  const map = {} as any;
  let maxValue: number = 0;
  let freq: number = 1;

  for (const val of nums) {
    map[val] = (map[val] || 0) + 1;
  }

  for (const val in map) {
    if (maxValue < parseInt(map[val])) {
      maxValue = parseInt(map[val]);
      freq = 1;
    } else if (maxValue === parseInt(map[val])) freq++;
  }

  return maxValue * freq;
}

console.log(maxFrequencyElements([10, 12, 12, 11, 9, 9, 6, 19, 11]));

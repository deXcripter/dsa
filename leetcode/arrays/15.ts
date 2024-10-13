// TODO - solve after solving 2-sum II

function threeSum(nums: number[]): number[][] {
  const map = new Map();
  const arr: [number[]] = [[]];
  arr.pop();
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (map.has(sum)) {
        map.set(sum, [...map.get(sum), [i, j]]);
      } else {
        map.set(sum, [[i, j]]);
      }
    }
  }
  return [[]];
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

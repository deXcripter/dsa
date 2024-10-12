// TODO - solve after solving 2-sum II

function threeSum(nums: number[]): number[][] {
  const map = new Map();
  const arr: [number[]] = [[]];
  arr.pop();
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      map.set(nums[j], j);
      let sum = nums[i] + nums[j + 1];
      console.log(nums[i], sum, nums[j + 1]);
      if (map.has(sum) && sum * 2 === 0 && j !== i && map.get(sum) !== j + 1) {
        // console.log(i, j + 1, map.get(sum));
        arr.push([nums[i], nums[j + 1], sum]);
      }
    }
  }
  return arr;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

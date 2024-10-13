// HASHMAP SOLUTION

function twoSumHashMap(numbers: number[], target: number): number[] {
  const map = new Map();

  for (let i = 1; i <= numbers.length; i++) {
    const diff = target - numbers[i - 1];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(numbers[i - 1], i);
  }

  return [];
}

// TWO POINTER SOLUTION

function twoSumTwoPointerSoln(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] < target) left++;
    else if (numbers[left] + numbers[right] > target) right--;
    else return [left + 1, right + 1];
  }

  return [];
}

console.log(twoSumTwoPointerSoln([2, 7, 11, 15], 9)); // [1, 2]

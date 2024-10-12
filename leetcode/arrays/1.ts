function twoSum(num: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < num.length; i++) {
    const diff = target - num[i];

    if (map.has(diff)) return [map.get(diff), i];
    map.set(num[i], i);
  }

  return [];
}

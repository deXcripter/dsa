const same = (arr1: number[], arr2: number[]): boolean => {
  // if (arr1.length !== arr2.length || arr1.length === 0) return false;

  let frequencyCounter1 = {} as any;
  let frequencyCounter2 = {} as any;

  // mapping them to the obj
  for (let val of arr1)
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;

  for (let val of arr2)
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

  for (let key in frequencyCounter1) {
    if (!(parseInt(key) ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[key])
      return false;
  }

  return true;
};

console.log(same([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]));

const removeDuplicates = function (nums) {
  const num = nums;
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] === num[i + 1]) {
      num.splice(i, 1);
      i -= 1;
    }
  }
  return num;
};

console.log(removeDuplicates([1, 1, 2]));

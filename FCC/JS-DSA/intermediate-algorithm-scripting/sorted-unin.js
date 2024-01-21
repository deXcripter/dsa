function uniteUnique(arr) {
  const args = [...arguments];
  const newArr = [];
  args.forEach((arg) => {
    arg.forEach((item) => {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    });
  });
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

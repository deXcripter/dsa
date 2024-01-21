const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  const newArr = [...arr];
  newArr.sort((a, b) => a - b);
  return newArr;
}

nonMutatingSort(globalArray);

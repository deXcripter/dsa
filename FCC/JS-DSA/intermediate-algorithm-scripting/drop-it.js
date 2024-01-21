function dropElements(arr, func) {
  const array = [...arr];

  for (let i = 0; i < array.length; i += 1) {
    // console.log((array[i]))
    // console.log(func(array[i]), i);
    if (func(array[i])) {
      return array.splice(i, array.length);
    }
    if (i === array.length - 1) return [];
  }

  return array;
}

console.log(dropElements([1, 2, 3, 4], (n) => n >= 3));

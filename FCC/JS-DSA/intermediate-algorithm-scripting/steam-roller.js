function steamrollArray(arr) {
  const array = [...arr];
  const newArray = [];

  const flatten = (ar) => {
    ar.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        newArray.push(item);
      }
    });
  };

  flatten(array);

  return newArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

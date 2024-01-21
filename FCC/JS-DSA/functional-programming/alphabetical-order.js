function alphabeticalOrder(arr) {
  // eslint-disable-next-line no-nested-ternary
  return arr.sort((a, b) => {
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return 1;
  });
}

alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']);

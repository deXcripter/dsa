function addTogether() {
  let args = [...arguments];
  if (
    args.length === 2 &&
    typeof args[0] === 'number' &&
    typeof args[1] === 'number'
  ) {
    return args[0] + args[1];
  }
  if (args.length === 1 && typeof args[0] === 'number') {
    const a = args[0];
    return function (b) {
      if (typeof b === 'number') {
        return a + b;
      }
    };
  }
}

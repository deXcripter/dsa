type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const result: MultiDimensionalArray = [];

  function recursionn(
    currentArray: MultiDimensionalArray,
    currentDepth: number
  ): void {
    for (const element of currentArray) {
      if (Array.isArray(element) && currentDepth < n) {
        recursionn(element, currentDepth + 1);
      } else {
        result.push(element);
      }
    }
  }

  recursionn(arr, 0);

  return result;
};

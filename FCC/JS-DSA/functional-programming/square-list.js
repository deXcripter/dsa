const squareList = (arr) => {
  const newArr = [];
  arr.filter((ar) => ar > 0 && ar % 1 === 0).map((el) => newArr.push(el * el));
  return newArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

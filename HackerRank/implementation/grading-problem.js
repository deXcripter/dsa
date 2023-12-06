// link => https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
  const rounder = (val) => {
    if (val % 5 === 0 && val !== 0) return val;

    let studentVal = val;
    const nextFive = Math.floor(val / 5) * 5 + 5;

    if (val + 2 >= nextFive) studentVal = nextFive;
    if (studentVal >= 40) return studentVal;
    return val;
  };

  const array = [];
  for (let i = 0; i < grades.length; i += 1) {
    array.push(rounder(grades[i]));
  }
  return array;
}

// console.log(
//   gradingStudents([
//     39, 27, 89, 56, 47, 38, 12, 98, 72, 85, 76, 72, 56, 23, 77, 25, 49, 4, 52,
//     71,
//   ]),
// );
console.log(gradingStudents([7, 27, 23, 65, 43, 0, 82, 0]));

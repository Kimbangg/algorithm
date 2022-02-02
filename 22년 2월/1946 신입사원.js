const solution = (n, grade) => {
  let result = 1;
  const arr = Array.from({ length: n }).fill(0);
  // n * log-n
  grade.sort((a, b) => a[0] - b[0]);

  grade.forEach((someOneGrade, idx) => {
    arr[someOneGrade[0]] = someOneGrade[1];
  });

  let minGrade = arr[1];

  for (let i = 2; i <= arr.length; i++) {
    if (minGrade > arr[i]) {
      minGrade = arr[i];
      result += 1;
    }
  }

  return result;
};

const n = 7;
const grade = [
  [3, 6],
  [7, 3],
  [4, 2],
  [1, 4],
  [5, 7],
  [2, 5],
  [6, 1],
];

console.log(solution(n, grade));

const solution = (A, B, N, savedButton) => {
  let minMove = 1001;

  savedButton.forEach(number => {
    minMove > Math.abs(number - B) + 1 ? (minMove = Math.abs(number - B) + 1) : minMove;
  });

  if (minMove > Math.abs(A - B)) {
    return Math.abs(A - B);
  }

  return minMove;
};

const [A, B] = [100, 15];
const N = 1;
const savedButton = [15];

console.log(solution(A, B, N, savedButton));

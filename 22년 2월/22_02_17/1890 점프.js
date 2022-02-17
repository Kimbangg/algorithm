const solution = () => {
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  dp[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        continue;
      }

      const moveRight = board[i][j] + i;
      const moveDown = board[i][j] + j;

      if (moveRight < n) {
        dp[moveRight][j] += dp[i][j];
      }

      if (moveDown < n) {
        dp[i][moveDown] += dp[i][j];
      }
    }
  }

  return dp[n - 1][n - 1];
};

const n = 4;
const board = [
  [2, 3, 3, 1],
  [1, 2, 1, 3],
  [1, 2, 3, 1],
  [3, 1, 1, 0],
];

console.log(solution(n, board));

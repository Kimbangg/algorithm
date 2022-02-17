const solution = (n, m, maze) => {
  const dp = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    dp[0][i] = maze[0][i];

    if (i !== 0) {
      dp[0][i] = dp[0][i - 1] + maze[0][i];
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (j === 0) {
        dp[i][j] = maze[i][j] + dp[i - 1][j];
        continue;
      }
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + maze[i][j];
    }
  }

  return dp[n - 1][m - 1];
};

const [n, m] = [3, 3];
const maze = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

console.log(solution(n, m, maze));

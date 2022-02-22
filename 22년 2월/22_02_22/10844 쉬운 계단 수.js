const solution = n => {
  const dp = Array.from({ length: n }, (_, i) => Array(10).fill(0));

  for (let i = 1; i < 10; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][1];
      } else if (j === 9) {
        dp[i][j] = dp[i - 1][8];
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
      }
    }
  }

  return dp[n - 1];
};

const n = 2;

console.log(solution(n));

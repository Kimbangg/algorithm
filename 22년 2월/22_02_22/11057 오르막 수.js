const solution = n => {
  const dp = Array.from({ length: n }, (_, i) => Array(10).fill(0));

  for (let i = 0; i < 10; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < j + 1; k++) {
        dp[i][j] += dp[i - 1][k];
      }
    }
  }

  console.log(dp);
};

const n = 3;

console.log(solution(n));

const solution = (n, wines) => {
  const dp = Array(n).fill(0);
  dp[0] = wines[0];
  dp[1] = wines[0] + wines[1];
  dp[2] = Math.max(wines[0] + wines[2], wines[1] + wines[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + wines[i], dp[i - 3] + wines[i - 1] + wines[i]);
    dp[i] = Math.max(dp[i - 1], dp[i]);
  }

  return Math.max(...dp);
};

const n = 6;
const wines = [6, 10, 13, 9, 8, 1];

solution(n, wines);

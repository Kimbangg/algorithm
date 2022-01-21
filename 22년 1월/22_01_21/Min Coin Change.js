const solution = sum => {
  const dp = [0, -1, 1, 1, 2, 1, 2];

  if (sum <= 6) return dp[6];

  for (let i = 7; i <= sum; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 3], dp[i - 5]) + 1;
  }

  return dp[sum];
};

console.log(solution(11));

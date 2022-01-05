const solution = (n, stair) => {
  const dp = [];

  dp[0] = stair[0];
  dp[1] = stair[0] + stair[1];
  dp[2] = Math.max(stair[1] + stair[2], stair[0] + stair[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 3] + stair[i - 1] + stair[i], dp[i - 2] + stair[i]);
  }

  return dp[n - 1];
};

const n = 6;
const stairInfomation = [10, 20, 15, 25, 10, 20];
solution(stairInfomation);

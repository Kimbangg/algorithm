const solution = (n, sticker) => {
  const dp = Array.from({ length: 2 }, () => Array(n).fill(0));

  dp[0][0] = sticker[0][0];
  dp[1][0] = sticker[1][0];

  dp[0][1] = sticker[0][1] + sticker[1][0];
  dp[1][1] = sticker[1][1] + sticker[0][0];

  for (let i = 2; i < n; i++) {
    dp[0][i] = Math.max(dp[1][i - 2], dp[1][i - 1]) + sticker[0][i];
    dp[1][i] = Math.max(dp[0][i - 2], dp[0][i - 1]) + sticker[1][i];
  }

  return Math.max(...dp.flat());
};

const n = 5;
const sticker = [
  [50, 10, 100, 20, 40],
  [30, 50, 70, 10, 60],
];

console.log(solution(n, sticker));

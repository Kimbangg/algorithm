const solution = (n, payForDays) => {
  const dp = Array.from({ length: n + 1 }).fill(0);

  for (let i = 0; i < n; i++) {
    const day = payForDays[i][0];
    const pay = payForDays[i][1];
    const endDay = day + i;

    if (endDay > n + 1) {
      continue;
    }

    for (let j = endDay; j <= n; j++) {
      dp[j] = Math.max(dp[i] + pay, dp[j]);
    }

    console.log(dp);
  }

  return dp[n];
};

const n = 10;

const payForDays = [
  [5, 10],
  [5, 9],
  [5, 8],
  [5, 7],
  [5, 6],
  [5, 10],
  [5, 9],
  [5, 8],
  [5, 7],
  [5, 6],
];

solution(n, payForDays);

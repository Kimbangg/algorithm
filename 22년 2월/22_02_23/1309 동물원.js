const solution = n => {
  const mod = 9901;
  const dp = Array(n + 1).fill(1);
  dp[1] = 3;

  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] * 2 + dp[i - 2];
    dp[i] %= mod;
  }

  return dp[n];
};

const n = 3;
console.log(solution(n));

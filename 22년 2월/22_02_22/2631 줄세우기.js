const solution = (n, line) => {
  const dp = Array(n).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (line[j] < line[i]) {
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }
    dp[i] += 1;
  }

  return n - Math.max(...dp);
};

const N = 7;

const line = [3, 7, 5, 2, 6, 1, 4];

console.log(solution(N, line));

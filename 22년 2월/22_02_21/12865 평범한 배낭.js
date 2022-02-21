const solution = (N, K, backpacks) => {
  const dp = Array.from({ length: N + 1 }, (_, i) => Array(K + 1).fill(0));

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < K + 1; j++) {
      const weight = backpacks[i][0];
      const value = backpacks[i][1];

      if (j < weight) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(value + dp[i - 1][j - weight], dp[i - 1][j]);
      }
    }
  }

  return dp[N][K];
};

const [N, K] = [4, 7];
const backpacks = [
  [0, 0],
  [6, 13],
  [4, 8],
  [3, 6],
  [5, 12],
];

console.log(solution(N, K, backpacks));

// const solution = (N, K, backpacks) => {
//   const dp = Array.from({ length: N }, (_, i) => Array(K + 1).fill(-1));

//   for (let i = 0; i < N; i++) {
//     dp[i][0] = 0;
//   }

//   dp[0][backpacks[0][0]] = backpacks[0][1];

//   for (let i = 0; i < N - 1; i++) {
//     for (let j = 0; j <= K; j++) {
//       if (dp[i][j] !== -1) {
//         const sumofBackpacks = j + backpacks[i + 1][0];
//         if (sumofBackpacks <= K) {
//           dp[i + 1][sumofBackpacks] = dp[i][j] + backpacks[i + 1][1];
//         }
//       }
//     }
//   }

//   console.log(Math.max(...dp.flat()));
// };

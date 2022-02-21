const solution = (N, numbers) => {
  const dp = Array(N).fill(0);

  dp[0] = numbers[0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] < numbers[i]) {
        dp[i] = Math.max(dp[i], dp[j] + numbers[i]);
      }
    }
  }

  return Math.max(...dp);
};

const N = 10;
const numbers = [1, 100, 2, 50, 60, 3, 5, 6, 7, 8];

console.log(solution(N, numbers));

// const solution = (N, numbers) => {
//   const dp = Array(N).fill(0);

//   dp[0] = numbers[0];

//   for (let i = 1; i < N; i++) {
//     let sum = 0;
//     let compared = -1;
//     const standard = numbers[i];
//     for (let j = 0; j < i; j++) {
//       if (numbers[j] < standard && compared < numbers[j]) {
//         sum += numbers[j];
//         compared = numbers[j];
//       }
//     }
//     dp[i] = standard + sum;
//   }

//   return Math.max(...dp);
// };

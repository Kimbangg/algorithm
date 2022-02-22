const solution = (A, B) => {
  const strLen = A.length;

  const dp = Array.from({ length: A.length + 1 }, (_, i) =>
    Array(strLen + 1).fill(0)
  );

  for (let i = 1; i <= strLen; i++) {
    for (let j = 1; j <= strLen; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[strLen][strLen];
};

const A = 'ACAYKP';
const B = 'CAPCAK';

solution(A, B);

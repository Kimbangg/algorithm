const solution = (n, boxes) => {
  const dp = Array(n).fill(0);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    const temp = [];

    for (let j = 0; j < i; j++) {
      if (boxes[i] > boxes[j]) {
        temp.push(dp[j] + 1);
      }
    }

    if (temp.length === 0) {
      dp[i] = 1;
    } else {
      dp[i] = Math.max(...temp);
    }
  }

  return dp[n - 1];
};

const n = 8;
const boxes = [1, 6, 2, 5, 7, 3, 5, 6];

console.log(solution(n, boxes));

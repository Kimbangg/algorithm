const solution = (n, wires) => {
  wires.sort((a, b) => a[0] - b[0]);

  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (wires[j][1] < wires[i][1] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  return n - Math.max(...dp);
};

const n = 8;

const wires = [
  [1, 8],
  [3, 9],
  [2, 2],
  [4, 1],
  [6, 4],
  [10, 10],
  [9, 7],
  [7, 6],
];

console.log(solution(n, wires));

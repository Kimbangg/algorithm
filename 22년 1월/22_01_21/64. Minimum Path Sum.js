/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const row = grid.length;
  const column = grid[0].length;

  const dp = Array.from({ length: row }, () => Array(column).fill(0));
  dp[0][0] = grid[0][0];

  for (let i = 1; i < column; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
        continue;
      }

      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[row - 1][column - 1];
};

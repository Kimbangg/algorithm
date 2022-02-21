const solution = (countOfMusic, start, maxVolume, canAdjust) => {
  let result = -1;
  const dp = Array.from({ length: canAdjust.length + 1 }, () =>
    Array(maxVolume + 1).fill(0)
  );

  dp[0][start] = 1;

  for (let i = 0; i < countOfMusic; i++) {
    for (let j = 0; j <= maxVolume; j++) {
      if (dp[i][j] === 1) {
        if (j + canAdjust[i] <= maxVolume) {
          dp[i + 1][j + canAdjust[i]] = 1;
        }
        if (j - canAdjust[i] >= 0) {
          dp[i + 1][j - canAdjust[i]] = 1;
        }
      }
    }
  }

  for (let i = 0; i <= maxVolume; i++) {
    if (dp[countOfMusic][i] === 1) {
      result = i;
    }
  }

  return result;
};
// 곡의 개수, 시작 볼륨, 최대 볼륨
const [N, S, M] = [14, 40, 243];

const canAdjust = [74, 39, 127, 95, 63, 140, 99, 96, 154, 18, 137, 162, 14, 88];

console.log(solution(N, S, M, canAdjust));

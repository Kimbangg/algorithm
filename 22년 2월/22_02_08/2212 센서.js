const solution = (sensorCount, centerCount, sensorLocation) => {
  if (centerCount >= sensorCount) {
    return 0;
  }

  sensorLocation.sort((a, b) => a - b);
  const gapDistance = [];

  for (let i = 1; i < sensorLocation.length; i++) {
    gapDistance.push(sensorLocation[i] - sensorLocation[i - 1]);
  }

  gapDistance.sort((a, b) => b - a);
  gapDistance.splice(0, centerCount - 1);

  const result = gapDistance.reduce((sum, cur) => {
    return sum + cur;
  });

  return result;
};

const sensorCount = 6;
const centerCount = 2;
const sensorLocation = [1, 6, 9, 3, 6, 7];

console.log(solution(sensorCount, centerCount, sensorLocation));

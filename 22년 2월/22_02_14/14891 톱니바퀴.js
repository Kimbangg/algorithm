const gearRotation = (gear, direction) => {
  if (direction === -1) {
    const pole = gear.shift();
    gear.push(pole);
  } else {
    const pole = gear.pop();
    gear.unshift(pole);
  }

  return gear;
};

const solution = (gears, rotationCount, rotationWays) => {
  let result = 0;
  const [leftReach, rightReach] = [6, 2];
  const maxGearCount = gears.length - 1;

  for (let i = 0; i < rotationCount; i++) {
    let rightRotationDirection = rotationWays[i][1];
    let leftRotationDirection = rotationWays[i][1];
    const selectedIdx = rotationWays[i][0] - 1;

    for (let j = selectedIdx; j < maxGearCount; j++) {
      if (gears[j][rightReach] === gears[j + 1][leftReach]) {
        break;
      }

      rightRotationDirection *= -1;
      gears[j + 1] = gearRotation(gears[j + 1], rightRotationDirection);
    }

    for (let k = selectedIdx; k > 0; k--) {
      if (gears[k][leftReach] === gears[k - 1][rightReach]) {
        break;
      }

      leftRotationDirection *= -1;

      gears[k - 1] = gearRotation(gears[k - 1], leftRotationDirection * -1);
    }

    gears[selectedIdx] = gearRotation(gears[selectedIdx], rotationWays[i][1]);
  }

  gears.forEach((gear, idx) => {
    if (gear[0] === 1) {
      result += Math.pow(2, idx);
    }
  });

  return result;
};

const gears = [
  [1, 0, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
];

const rotationCount = 2;
const rotationWays = [
  [3, -1],
  [1, 1],
];

console.log(solution(gears, rotationCount, rotationWays));

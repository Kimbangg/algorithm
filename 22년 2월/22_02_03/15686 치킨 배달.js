const findBiggerIdx = (idxArr, location) => {
  let max = 0;
  let idx = 0;

  for (let i = 0; i < idxArr.length; i++) {
    if (location[idxArr[i]][2] > max) {
      idx = idxArr[i];
    }
  }

  return idx;
};

const hasSameValue = (value, orderedDistance) => {
  const sameValueIdxArr = [];

  for (let i = 0; i < orderedDistance.length; i++) {
    if (value === orderedDistance[i][0]) {
      sameValueIdxArr.push(orderedDistance[i][1]);
    }
  }

  return sameValueIdxArr;
};

const voteDestoryedChickenHouse = (x, y, voteCount, location) => {
  const chickenDistance = [];

  // 개인 집에서 치킨 집까지의 거리를 구하는 로직
  for (let i = 0; i < location.length; i++) {
    const tempDistance = Math.abs(x - location[i][0]) + Math.abs(y - location[i][1]);
    chickenDistance.push([tempDistance, i]);
  }

  // 거리가 높은 순서대로 투표를 해서 제거할 생각이기 때문에, 내림차순으로 정렬하는 것이 맞다.
  chickenDistance.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < voteCount; i++) {
    if (i === voteCount - 1 && chickenDistance[i][0] !== chickenDistance[i - 1][0]) {
      const testSubject = chickenDistance[i][0];
      const sameValueIdxArr = hasSameValue(testSubject, chickenDistance);

      if (sameValueIdxArr.length >= 2) {
        const idx = findBiggerIdx(sameValueIdxArr, location);
        location[idx][2] += 1;
        continue;
      }
    }
    location[chickenDistance[i][1]][2] += 1;
  }

  return location;
};

const solution = (n, m, chickenRoad) => {
  let answer = 0;
  let customerCount = [];
  let chickenLocation = [];

  for (let i = 0; i < chickenRoad.length; i++) {
    for (let j = 0; j < chickenRoad[0].length; j++) {
      if (chickenRoad[i][j] === 2) {
        chickenLocation.push([i, j, 0]);
      }
    }
  }

  const needVotedCount = chickenLocation.length - m;

  for (let i = 0; i < chickenRoad.length; i++) {
    for (let j = 0; j < chickenRoad[0].length; j++) {
      if (chickenRoad[i][j] === 1) {
        customerCount.push([i, j]);
        chickenLocation = voteDestoryedChickenHouse(i, j, needVotedCount, chickenLocation);
      }
    }
  }

  chickenLocation.sort((a, b) => b[2] - a[2]);
  chickenLocation.splice(0, needVotedCount);

  for (let i = 0; i < customerCount.length; i++) {
    let min = 100;

    for (let j = 0; j < chickenLocation.length; j++) {
      const tempDistance =
        Math.abs(customerCount[i][0] - chickenLocation[j][0]) +
        Math.abs(customerCount[i][1] - chickenLocation[j][1]);

      if (tempDistance < min) {
        min = tempDistance;
      }
    }
    answer += min;
  }

  return answer;
};

const [n, m] = [5, 2];

const chickenRoad = [
  [0, 2, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [2, 0, 0, 1, 1],
  [2, 2, 0, 1, 2],
];

console.log(solution(n, m, chickenRoad));

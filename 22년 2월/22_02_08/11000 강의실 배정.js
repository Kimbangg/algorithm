const solution = (lectureCount, timeTable) => {
  // 최소 강의실 개수
  let minRoomCount = 0;
  const arr = [];

  for (let i = 0; i < timeTable.length; i++) {
    arr.push([timeTable[i][0], 1]);
    arr.push([timeTable[i][1], -1]);
  }

  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let cnt = 0;

  for (const [a, b] of arr) {
    cnt += b;
    // 순간적으로 가장 많은 강의실이 요구될 때, 그 강의실 수가 모든 수업을 운영하기 위한 최소 값이다.
    minRoomCount = Math.max(minRoomCount, cnt);
  }

  return minRoomCount;
};

// 강의의 개수
const lectureCount = 3;
const timeTable = [
  [1, 3],
  [2, 4],
  [3, 5],
];

console.log(solution(lectureCount, timeTable));

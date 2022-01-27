const meetingRooms2 = meetings => {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < meetings.length; i++) {
    arr.push([meetings[i][0], 1]);
    arr.push([meetings[i][1], -1]);
  }

  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let cnt = 0;

  for (let [a, b] of arr) {
    cnt += b;
    answer = Math.max(answer, cnt);
  }

  return answer;
};

const meetings = [
  [0, 30],
  [5, 15],
  [15, 25],
  [20, 30],
];

console.log(meetingRooms2(meetings));

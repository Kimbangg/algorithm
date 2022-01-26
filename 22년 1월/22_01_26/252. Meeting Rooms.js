const meetingRooms = costs => {
  costs.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < costs.length - 1; i++) {
    if (costs[i][1] > costs[i + 1][0]) return false;
  }

  return true;
};

const costs = [
  [0, 30],
  [5, 10],
  [15, 20],
];

console.log(meetingRooms(costs));

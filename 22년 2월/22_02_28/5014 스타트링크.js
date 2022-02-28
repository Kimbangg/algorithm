const bfs = (floor, clickCount) => {
  const queue = [floor, clickCount];

  while (queue.length) {
    floor = queue.shift();
    clickCount = queue.shift();

    if (floor === firmLocation) {
      return clickCount;
    }

    if (floor + up <= firmLocation && visited[floor + up] === 0) {
      queue.push(floor + up, clickCount + 1);
      visited[floor + up] = 1;
    }

    if (floor - down >= 1 && visited[floor - down] === 0) {
      queue.push(floor - down, clickCount + 1);
      visited[floor - down] = 1;
    }
  }

  return 'use the stairs';
};

// 최단 경로를 찾는 문제는 BFS가 확실히 많이 나온다.
// 경우의 수처럼, 특정 상황을 저장해야한다면 DP를 썼을 것 같아.
const [building, curLocation, firmLocation, up, down] = [10, 1, 10, 2, 1];
const visited = Array.from({ length: building + 1 }).fill(0);

console.log(bfs(curLocation, 0));

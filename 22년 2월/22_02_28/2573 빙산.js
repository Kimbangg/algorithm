const isEntireMelted = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] !== 0) return false;
    }
  }

  return true;
};

const checkAround = (x, y) => {
  let waterCount = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
      continue;
    }

    if (map[nx][ny] === 0) {
      waterCount += 1;
    }
  }

  return waterCount;
};

const meltIceberg = shallowMap => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (shallowMap[i][j] !== 0) {
        const aroundWaterCount = checkAround(i, j);

        shallowMap[i][j] =
          shallowMap[i][j] - aroundWaterCount <= 0
            ? 0
            : shallowMap[i][j] - aroundWaterCount;
      }
    }
  }

  return shallowMap;
};

const bfs = (x, y, field) => {
  const queue = [x, y];

  while (queue.length) {
    x = queue.shift();
    y = queue.shift();

    visited[x][y] = 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }

      if (field[nx][ny] !== 0 && visited[nx][ny] === 0) {
        queue.push(nx, ny);
      }
    }
  }
};

const solution = (n, m, field) => {
  let result = 0;

  while (true) {
    // 완전히 녹아버렸다면 '0' 을 Return
    if (isEntireMelted()) {
      return 0;
    }

    result += 1;
    let iceBergCount = 0;
    const visited = Array.from({ length: m }, (_, i) => Array(n).fill(0));

    const shallowMap = field.map(arr => [...arr]);

    // 1년이 지난 뒤에 빙산의 모양을 임시로 저장한다.
    const meltedIceBerg = meltIceberg(shallowMap);
    field = meltedIceBerg;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (visited[i][j] !== 0 && field[i][j] !== 0) {
          bfs(i, j, field);
          iceBergCount += 1;
        }
      }
    }

    if (iceBergCount === 2) {
      return result;
    }
  }
};

const [n, m] = [5, 7];

// 이동 좌표 [ 좌, 우, 하, 상]
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const map = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 2, 4, 5, 3, 0, 0],
  [0, 3, 0, 2, 5, 2, 0],
  [0, 7, 6, 2, 4, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

solution(n, m, map);

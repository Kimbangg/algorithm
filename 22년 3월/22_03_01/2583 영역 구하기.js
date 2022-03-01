const solution = () => {
  const answer = [];
  const map = Array.from({ length: n }, (_, i) => Array(m).fill(0));
  const visited = Array.from({ length: n }, (_, i) => Array(m).fill(0));

  const bfs = (x, y) => {
    let size = 1;
    const queue = [x, y];

    while (queue.length) {
      x = queue.shift();
      y = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          continue;
        }

        if (map[nx][ny] === 0 && visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          queue.push(nx, ny);
          size += 1;
        }
      }
    }

    return size;
  };

  // 주어진 정보를 바탕으로 map을 초기화
  for (let i = 0; i < coordinates.length; i++) {
    const axiosX = [n - coordinates[i][1] - 1, coordinates[i][0]];
    const axiosY = [n - coordinates[i][3], coordinates[i][2] - 1];

    for (let j = axiosY[0]; j <= axiosX[0]; j++) {
      for (let k = axiosX[1]; k <= axiosY[1]; k++) {
        map[j][k] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0 && visited[i][j] === 0) {
        visited[i][j] = 1;
        const size = bfs(i, j);
        answer.push(size);
      }
    }
  }

  return answer.sort((a, b) => a - b);
};

const [n, m, k] = [5, 7, 3];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const coordinates = [
  [0, 2, 4, 4],
  [1, 1, 2, 5],
  [4, 0, 6, 2],
];

console.log(solution());

const solution = (n, m, farm) => {
  let answer = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = Array.from({ length: n }, () => Array(m).fill(0));

  const bfs = (x, y) => {
    const queue = [x, y];

    while (queue.length) {
      visited[x][y] = 1;

      x = queue.shift();
      y = queue.shift();

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          continue;
        }

        if (farm[nx][ny] === 0 && visited[nx][ny] === 0) {
          farm[nx][ny] = farm[x][y] + 1;
          queue.push(nx, ny);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (farm[i][j] === 1 && visited[i][j] === 0) {
        bfs(i, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (farm[i][j] === 0) return -1;

      answer = answer < farm[i][j] ? (answer = farm[i][j]) : answer;
    }
  }

  return answer - 1;
};

const n = 5;
const m = 6;

const farm = [
  [-1, 1, 0, 0, 0, 0],
  [0, -1, -1, -1, 0],
  [0, -1, -1, -1, 0],
  [0, -1, -1, -1, 0],
  [0, 0, 0, 0, 0],
];

console.log(solution(n, m, farm));

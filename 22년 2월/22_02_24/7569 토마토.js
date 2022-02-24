const bfs = (height, row, col) => {
  const queue = [row, col, height];

  while (queue.length) {
    visited[height][row][col] = 1;
    row = queue.shift();
    col = queue.shift();
    height = queue.shift();

    for (let k = 0; k < 6; k++) {
      const nx = row + dx[k];
      const ny = col + dy[k];
      const nz = height + dz[k];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || nz < 0 || nz >= h) {
        continue;
      }

      if (farm[nz][nx][ny] === 0 && visited[nz][nx][ny] === 0) {
        farm[nz][nx][ny] = farm[height][row][col] + 1;
        queue.push(nx, ny, nz);
      }
    }
  }
};

const [m, n, h] = [5, 3, 2];

const farm = [
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
];

const visited = [
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
];

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

for (let height = 0; height < h; height++) {
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (farm[height][row][col] === 1) {
        bfs(height, row, col);
      }
    }
  }
}

console.log(farm);

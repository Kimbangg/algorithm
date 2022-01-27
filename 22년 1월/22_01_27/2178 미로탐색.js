const pathFinding = (n, m, maze) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = Array.from({ length: n }, () => Array(m).fill(0));

  const BFS = (x, y) => {
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

        if (maze[nx][ny] === 1 && visited[nx][ny] === 0) {
          maze[nx][ny] = maze[x][y] + 1;
          queue.push(nx, ny);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maze[i][j] === 1 && visited[i][j] === 0) {
        BFS(i, j);
        break;
      }
    }
  }

  console.log(maze);
};

const n = 4;
const m = 6;

const maze = [
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
];

pathFinding(n, m, maze);

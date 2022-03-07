const solution = () => {
  let answer = 0;

  const bfs = (x, y, visited) => {
    let count = 0;
    const queue = [x, y];

    visited[x][y] = 1;

    while (queue.length) {
      x = queue.shift();
      y = queue.shift();

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          continue;
        }

        if (island[nx][ny] === 'L' && visited[nx][ny] === 0) {
          queue.push(nx, ny);
          visited[nx][ny] = visited[x][y] + 1;
        }
      }
    }

    return Math.max(...visited.flat());
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (island[i][j] === 'L') {
        const visited = Array.from({ length: n }, () => Array(m).fill(0));
        const count = bfs(i, j, visited);

        answer = answer < count - 1 ? count - 1 : answer;
      }
    }
  }

  return answer;
};

const [n, m] = [5, 7];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const island = [
  ['W', 'L', 'L', 'W', 'W', 'W', 'L'],
  ['L', 'L', 'L', 'W', 'L', 'L', 'L'],
  ['L', 'W', 'L', 'W', 'L', 'W', 'W'],
  ['L', 'W', 'L', 'W', 'L', 'L', 'L'],
  ['W', 'L', 'L', 'W', 'L', 'W', 'W'],
];

solution();

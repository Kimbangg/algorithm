const solution = (n, picture) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let canSee = 0;
  let cantSee = 0;

  let visited = Array.from({ length: n }, () => Array(n).fill(0));

  const BFS = (x, y, cur) => {
    const queue = [x, y];

    while (queue.length) {
      x = queue.shift();
      y = queue.shift();

      visited[x][y] = 1;

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
          continue;
        }

        if (picture[nx][ny] === cur && visited[nx][ny] === 0) {
          queue.push(nx, ny);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cur = picture[i][j];
      if (cur === 'R' || cur === 'G' || cur === 'B') {
        if (visited[i][j] === 0) {
          BFS(i, j, cur);
          canSee += 1;
        }
      }
    }
  }
};

const n = 5;
const picture = [
  ['R', 'R', 'R', 'B', 'B'],
  ['G', 'G', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'R', 'R'],
  ['B', 'B', 'R', 'R', 'R'],
  ['R', 'R', 'R', 'R', 'R'],
];

solution(n, picture);

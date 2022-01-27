const solution = (n, m, field) => {
  let answer = 0;

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

        if (nx < 0 || nx >= n || ny < 0 || ny > m) {
          continue;
        }

        if (field[nx][ny] === 1 && visited[nx][ny] === 0) {
          field[nx][ny] = 0;
          queue.push(nx, ny);
        }
      }
    }
  };

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (field[row][col] === 1 && visited[row][col] === 0) {
        answer += 1;
        BFS(row, col);
      }
    }
  }

  console.log(answer);
};

const n = 6;
const m = 10;

const field = [
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
];

solution(n, m, field);

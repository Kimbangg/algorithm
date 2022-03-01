const solution = () => {
  let hour = 0;
  const answer = [];

  const bfs = (x, y, visited) => {
    let cnt = 0;
    const queue = [x, y];
    visited[x][y] = 1;

    while (queue.length) {
      x = queue.shift();
      y = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny] === 1) {
          continue;
        }

        if (cheese[nx][ny] === 0) {
          visited[nx][ny] = 1;
          queue.push(nx, ny);
        } else if (cheese[nx][ny] === 1) {
          visited[nx][ny] = 1;
          cheese[nx][ny] = 0;
          cnt += 1;
        }
      }
    }

    answer.push(cnt);
    return cnt;
  };

  while (true) {
    hour += 1;

    const visited = Array.from({ length: n }, () => Array(m).fill(0));

    const cnt = bfs(0, 0, visited);

    if (cnt === 0) break;
  }
  console.log(hour - 1);
  console.log(answer);
};

const [n, m] = [13, 12];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const cheese = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

solution();

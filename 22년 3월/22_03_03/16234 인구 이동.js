const solution = () => {
  let days = 0;

  const bfs = (x, y, visited) => {
    let count = 0;
    const union = [];
    const queue = [x, y];
    visited[x][y] = 1;

    while (queue.length) {
      x = queue.shift();
      y = queue.shift();

      union.push([x, y]);
      count += countries[x][y];

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
          continue;
        }

        const peopleGap = Math.abs(countries[nx][ny] - countries[x][y]);

        if (visited[nx][ny] === 0) {
          if (L <= peopleGap && peopleGap <= R) {
            visited[nx][ny] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }

    count /= union.length;

    for (const country of union) {
      const [x, y] = country;
      countries[x][y] = count;
    }

    return union.length;
  };

  while (true) {
    const visited = Array.from({ length: N }, () => Array(N).fill(0));

    const union = bfs(0, 0, visited);

    if (union === 1) {
      return days;
    }

    days += 1;
  }
};

const [N, L, R] = [2, 20, 50];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const countries = [
  [50, 30],
  [20, 40],
];

console.log(solution());

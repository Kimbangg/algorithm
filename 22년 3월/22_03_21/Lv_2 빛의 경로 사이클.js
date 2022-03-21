function solution(grid) {
  const result = [];
  const visited = Array.from(Array(grid.length), () =>
    Array.from(Array(grid[0].length), () => Array(4).fill(false))
  );
  const pos = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const checkIsCycled = (rdx, cdx, idx) => {
    let count = 0;

    while (true) {
      if (visited[rdx][cdx][idx]) break;

      visited[rdx][cdx][idx] = true;
      count++;

      rdx += pos[idx][0];
      cdx += pos[idx][1];

      if (rdx < 0) rdx = visited.length - 1;
      if (rdx >= visited.length) rdx = 0;
      if (cdx < 0) cdx = visited[0].length - 1;
      if (cdx >= visited[0].length) cdx = 0;

      if (grid[rdx][cdx] === 'L') idx = [2, 3, 1, 0][idx];
      if (grid[rdx][cdx] === 'R') idx = [3, 2, 0, 1][idx];
    }

    return count;
  };

  visited.forEach((row, rdx) => {
    row.forEach((col, cdx) => {
      col.forEach((isVisited, idx) => {
        if (!isVisited) {
          result.push(checkIsCycled(rdx, cdx, idx));
        }
      });
    });
  });

  return result.sort((a, b) => a - b);
}

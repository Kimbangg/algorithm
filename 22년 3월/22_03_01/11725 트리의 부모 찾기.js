const solution = () => {
  const answer = [];
  const graph = Array.from({ length: n + 1 }, () => Array());
  const visited = Array(n + 1).fill(0);

  nodeInfo.forEach(info => {
    const [from, to] = info;

    graph[from].push(to);
    graph[to].push(from);
  });

  const bfs = start => {
    const queue = [start];
    visited[start] = 1;

    while (queue.length) {
      start = queue.shift();

      for (let i = 0; i < graph[start].length; i++) {
        const next = graph[start][i];

        if (!visited[next]) {
          visited[next] = 1;
          answer[next] = start;
          queue.push(next);
        }
      }
    }
  };

  bfs(1);

  console.log(answer);
};

// [1, 6], [6, 3]
const n = 7;
const nodeInfo = [
  [1, 6],
  [6, 3],
  [3, 5],
  [4, 1],
  [2, 4],
  [4, 7],
];

solution();

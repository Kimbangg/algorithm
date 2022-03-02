const solution = () => {
  const result = [];
  const graph = Array.from({ length: n + 1 }, () => Array());

  const bfs = (start, visited) => {
    const nums = Array(n + 1).fill(0);
    const queue = [start];

    visited[start] = 1;

    while (queue.length) {
      start = queue.shift();

      for (let i = 0; i < graph[start].length; i++) {
        const next = graph[start][i];

        if (visited[next] === 0) {
          nums[next] = nums[start] + 1;
          visited[next] = 1;
          queue.push(next);
        }
      }
    }

    const sum = nums.reduce((a, b) => a + b);

    return sum;
  };

  relations.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  for (let i = 1; i < n + 1; i++) {
    const visited = Array(n + 1).fill(0);
    result.push(bfs(i, visited));
  }

  const min = Math.min(...result);
  return result.findIndex(num => num === min) + 1;
};

const [n, m] = [5, 5];

const relations = [
  [1, 3],
  [1, 4],
  [4, 5],
  [4, 3],
  [3, 2],
];

console.log(solution());

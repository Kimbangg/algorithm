const bfs = (x, y) => {
  const queue = [x, y];

  while (queue.length) {
    x = queue.shift();
    y = queue.shift();

    if (Math.abs(festival[0] - x) + Math.abs(festival[1] - y) <= 1000) {
      return 'happy';
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] === 0) {
        // 모든 편의점을 들르지 않아도 편의점에 도착하는 경우가 존재하기 때문에 BFS를 사용
        if (Math.abs(store[i][0] - x) + Math.abs(store[i][1] - y) <= 1000) {
          queue.push(store[i][0], store[i][1]);
          visited[i] = 1;
        }
      }
    }

    return 'sad';
  }
};

// 편의점 개수
const n = 2;

const home = [0, 0];

const store = [
  [2000, 1000],
  [2000, 2000],
];
const festival = [2000, 1000];
const visited = Array(n).fill(0);

console.log(bfs(home[0], home[1]));

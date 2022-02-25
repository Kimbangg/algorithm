function solution(rows, columns, queries) {
  var answer = [];
  let matrix = Array.from(new Array(rows), () => Array(columns).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = i * columns + j + 1;
    }
  }

  queries.forEach(query => {
    const [x1, y1, x2, y2] = query.map(q => q - 1);
    const queue = [];

    for (let i = 0; i < y2 - y1; i++) queue.push(matrix[x1][y1 + i]);
    for (let i = 0; i < x2 - x1; i++) queue.push(matrix[x1 + i][y2]);
    for (let i = 0; i < y2 - y1; i++) queue.push(matrix[x2][y2 - i]);
    for (let i = 0; i < x2 - x1; i++) queue.push(matrix[x2 - i][y1]);

    queue.unshift(queue.pop());
    answer.push(Math.min(...queue));

    for (let i = 0; i < y2 - y1; i++) matrix[x1][y1 + i] = queue.shift();
    for (let i = 0; i < x2 - x1; i++) matrix[x1 + i][y2] = queue.shift();
    for (let i = 0; i < y2 - y1; i++) matrix[x2][y2 - i] = queue.shift();
    for (let i = 0; i < x2 - x1; i++) matrix[x2 - i][y1] = queue.shift();
  });
  return answer;
}

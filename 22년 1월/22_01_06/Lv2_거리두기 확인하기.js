const solution = places => {
  const SIZE = 5;
  const move = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  const checkAround = (start, room, checked) => {
    const maximumMove = 2;
    const queue = [start];

    const isValid = (x, y) => x >= 0 && y >= 0 && x < SIZE && y < SIZE;
    const isAvailable = (x, y, checked) => isValid(x, y) && checked[x][y] === 0;

    while (queue.length > 0) {
      const [x, y, moveCount] = queue.shift();

      // 처음을 제외하고, 나머지 자리가 P면 맨해튼 규칙에 어긋나므로 즉시 false를 리턴
      if (moveCount !== 0 && room[x][y] === 'P') return false;

      move.forEach(([mx, my]) => {
        const px = x + mx;
        const py = y + my;

        if (isAvailable(px, py, checked) && room[px][py] !== 'X') {
          if (moveCount < maximumMove) {
            checked[px][py] = 1;
            queue.push([px, py, moveCount + 1]);
          }
        }
      });
    }
    return true;
  };

  const checkIsFollowRule = room => {
    const checked = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        // 사람이 아닌 경우에는 탐색 할 필요 X
        if (room[i][j] !== 'P') continue;

        checked[i][j] = 1;
        if (!checkAround([i, j, 0], room, checked)) return 0;
      }
    }

    return 1;
  };

  return places.map(checkIsFollowRule);
};

const solution = (n, m, cranes, boxes) => {
  let answer = 0;
  let craneMove = n;

  cranes.sort((a, b) => b - a);
  boxes.sort((a, b) => b - a);

  while (boxes.length !== 0) {
    answer += 1;

    for (const crane of cranes) {
      if (!boxes.length) break;

      for (let box of boxes) {
        if (crane >= box) {
          boxes.splice(boxes.indexOf(box), 1);
          break;
        }
      }
    }
  }

  return answer;
};

const n = 4;
const cranes = [18, 21, 17, 16];

const m = 9;
const boxes = [14, 12, 19, 19, 19, 19, 16, 1, 5];

// 예상 결과: 4
solution(n, m, cranes, boxes);

const solution = roomNumber => {
  const len = roomNumber.length;
  const count = new Array(10).fill(0);

  for (let i = 0; i < len; i++) {
    const elem = roomNumber[i];

    if (elem == 6) {
      count[9] += 1;
    } else {
      count[elem] += 1;
    }
  }

  const temp = count[9] / 2;

  count[6] = temp;
  count[9] = temp;

  return Math.max(...count);
};

const roomNumber = '9999';
console.log(solution(roomNumber));

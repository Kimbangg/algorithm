// 성공한 코드
const divideLocation = bookLocation => {
  const leftSection = [];
  const rightSection = [];

  bookLocation.forEach(location => {
    location < 0 ? leftSection.push(location) : rightSection.push(location);
  });

  rightSection.sort((a, b) => b - a);

  return [leftSection, rightSection];
};

const solution = (n, m, bookLocation) => {
  if (bookLocation.length === 1) {
    return bookLocation[0];
  }

  let result = 0;
  bookLocation.sort((a, b) => a - b);

  const maxDistance =
    Math.abs(bookLocation[0]) - Math.abs(bookLocation[bookLocation.length - 1]) >= 0
      ? Math.abs(bookLocation[0])
      : Math.abs(bookLocation[bookLocation.length - 1]);

  const [leftSection, rightSection] = divideLocation(bookLocation);

  for (let i = 0; i < leftSection.length; i += m) {
    result += Math.abs(leftSection[i]) * 2;
  }

  for (let i = 0; i < rightSection.length; i += m) {
    result += rightSection[i] * 2;
  }

  result -= maxDistance;

  return result;
};

const [n, m] = [8, 3];
const bookLocation = [-18, -9, -4, 50, 22, -26, 40, -45];

console.log(solution(n, m, bookLocation));

// 실패한 코드

const decideDirection = bookLocation => {
  return Math.abs(bookLocation[0]) - Math.abs(bookLocation[bookLocation.length - 1]) >= 0
    ? [bookLocation.length - 1, 0]
    : [0, bookLocation.length - 1];
};

const solution = (n, m, bookLocation) => {
  let result = 0;
  let moveDistance = m;

  if (bookLocation.length === 1) {
    return bookLocation[0];
  }

  bookLocation.sort((a, b) => a - b);

  // end 지점에 있는 책은 왕복 비용이 가장 크므로, 책을 제자리에 두고 0지점으로 돌아가지 않아야 최소 걸음 수로 작업을 끝낼 수 있다.
  const [start, end] = decideDirection(bookLocation);

  // 슬라이스를 하는 기준을 잡아야할 것 같다.
  for (let i = start; i < end; i += moveDistance) {
    let roundTrip = 2;
    const curDirection = bookLocation[i] > 0 ? 'right' : 'left';

    const maxBookWithOneMove = bookLocation.slice(i, i + m).filter(book => {
      if (curDirection === 'left' && book < 0) {
        return true;
      } else if (curDirection === 'right' && book > 0) {
        return true;
      }
    });

    moveDistance = maxBookWithOneMove.length;

    if (i + moveDistance - 1 === bookLocation.length - 1) {
      roundTrip = 1;
    }

    curDirection === 'left'
      ? (result += Math.abs(Math.min(...maxBookWithOneMove)) * roundTrip)
      : (result += Math.max(...maxBookWithOneMove) * roundTrip);
  }

  console.log(result);
};

const [n, m] = [8, 3];
const bookLocation = [-18, -9, -4, 50, 22, -26, 40, -45];

solution(n, m, bookLocation);

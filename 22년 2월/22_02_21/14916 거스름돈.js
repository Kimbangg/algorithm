const solution = n => {
  let cnt = 0;

  while (n > 0) {
    if (n % 5 === 0) {
      return n / 5 + cnt;
      break;
    }

    n -= 2;
    cnt += 1;
  }

  if (n < 0) {
    return -1;
  }
};

const n = 13;
console.log(solution(n));

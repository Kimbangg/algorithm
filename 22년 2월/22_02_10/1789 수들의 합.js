const solution = s => {
  let n = 1;

  while ((n * (n + 1)) / 2 <= s) {
    n += 1;
  }

  return n - 1;
};

const s = 200;
console.log(solution(s));

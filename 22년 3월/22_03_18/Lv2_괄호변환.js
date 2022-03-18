function solution(p) {
  let answer = '';
  let left = 0;
  let right = 0;

  let u, v;

  // 1. 빈 문자열인 경우 그대로 리턴해준다.
  if (p.length === 0) {
    return p;
  }

  // 2. u, v를 나눠준다.
  for (let i = 0; i < p.length; i++) {
    const curChar = p[i];

    curChar === '(' ? (left += 1) : (right += 1);

    if (left === right) {
      u = p.substr(0, i + 1);
      v = p.substr(i + 1, p.length);
      break;
    }
  }

  let cnt = 0;

  for (let i = 0; i < u.length; i++) {
    u[i] === '(' ? cnt++ : cnt--;

    if (cnt < 0) {
      // cnt < 0 이면 올바른 문자열이 아니므로 3-2를 수행한다.
      let str = '';
      str += `(${solution(v)})`;

      for (let j = 1; j < u.length - 1; j++) {
        u[j] === '(' ? (str += ')') : (str += '(');
      }

      return str;
    }
  }

  return u + solution(v);
}

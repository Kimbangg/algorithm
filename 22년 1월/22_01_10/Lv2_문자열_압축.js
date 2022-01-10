function solution(s) {
  //문자열 길이 1인 경우
  if (s.length === 1) return 1;

  let minLen = s.length;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let cnt = 1;
    let tempStr = '';

    for (let j = 0; j < s.length; j += i) {
      const current = s.substr(j, i);
      const next = s.substr(j + i, i);

      if (current === next) {
        cnt++;
      } else {
        cnt > 1 ? (tempStr += cnt + current) : (tempStr += current);
        cnt = 1;
      }
    }

    if (minLen > tempStr.length) minLen = tempStr.length;
  }
  return minLen;
}

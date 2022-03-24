function solution(s) {
  s = s.split('');
  let answer = 0;

  const dict = {
    ']': '[',
    '}': '{',
    ')': '(',
  };

  const checkIsCorrect = s => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      const curChar = s[i];

      if (!dict[curChar]) {
        stack.push(curChar);
      } else {
        if (stack[stack.length - 1] === dict[curChar]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    if (stack.length !== 0) {
      return false;
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      s.push(s.shift());
    }

    if (checkIsCorrect(s)) {
      answer += 1;
    }
  }

  return answer;
}

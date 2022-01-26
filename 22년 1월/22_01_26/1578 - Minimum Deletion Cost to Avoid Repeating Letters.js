const solution = (letter, cost) => {
  let curChar = '';
  let max = 0;
  let answer = 0;

  letter.split('').forEach((char, idx) => {
    if (char !== curChar) {
      curChar = char;
      max = cost[idx];
    } else {
      if (cost[idx] > max) {
        answer += max;
        max = cost[idx];
      } else {
        answer += cost[idx];
      }
    }
  });
};

const letter = 'bbbaaac';
const cost = [3, 1, 2, 1, 5, 3, 2];
solution(letter, cost);

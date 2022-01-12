function solution(numbers) {
  const strings = numbers.map(num => num + '');
  const answer = strings.sort((a, b) => b + a - (a + b)).join('');

  return answer[0] === '0' ? '0' : answer;
}

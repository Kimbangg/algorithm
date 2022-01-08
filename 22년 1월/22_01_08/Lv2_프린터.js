function solution(priorities, location) {
  var answer = 0;

  while (priorities.length !== 0) {
    const firstItem = priorities[0];

    if (priorities.some(num => num > firstItem)) {
      priorities.push(firstItem);
      priorities.shift(firstItem);
    } else {
      priorities.shift(firstItem);
      answer += 1;

      if (location === 0) break;
    }

    location -= 1;

    if (location < 0) {
      location = priorities.length - 1;
    }
  }

  return answer;
}

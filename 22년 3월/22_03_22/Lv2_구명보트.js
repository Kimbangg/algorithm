function solution(people, limit) {
  let answer = 0;

  let pointer = people.length - 1;

  people.sort((a, b) => b - a);

  for (let i = 0; i <= pointer; i++) {
    let cur = people[i];

    while (cur <= limit) {
      if (cur + people[pointer] <= limit) {
        cur += people[pointer];
        pointer -= 1;
      } else {
        break;
      }
    }

    answer += 1;
  }

  return answer;
}

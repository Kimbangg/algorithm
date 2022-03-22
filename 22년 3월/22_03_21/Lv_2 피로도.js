function solution(info, query) {
  var answer = [];
  let map = {};

  const combination = (infos, score, map, start) => {
    const key = infos.join('');
    const value = map[key];

    value ? map[key].push(score) : (map[key] = [score]);

    for (let i = start; i < infos.length; i++) {
      const combiArr = [...infos];
      combiArr[i] = '-';
      // 재귀로 불러서, 조합이 가능해지는거임.
      combination(combiArr, score, map, i + 1);
    }
  };

  const binarySearch = (map, queryKey, queryScore) => {
    let scoreArr = map[queryKey];

    if (scoreArr) {
      var start = 0;
      var end = scoreArr.length;

      while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (scoreArr[mid] >= queryScore) {
          // 현재 가르키는 값보다 내가 찾는 값이
          end = mid;
        } else if (scoreArr[mid] < queryScore) {
          start = mid + 1;
        }
      }

      return scoreArr.length - start;
    } else return 0;
  };

  // 1. -로 가능한 모든 조합 만들기
  for (let i = 0; i < info.length; i++) {
    let candidateInfo = info[i].split(' ');
    let score = candidateInfo.pop();

    combination(candidateInfo, score, map, 0);
  }

  for (const key in map) {
    map[key].sort((a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {
    const querys = query[i].replace(/ and /g, '').split(' ');
    const score = Number(querys.pop());

    answer.push(binarySearch(map, querys.join(''), score));
  }

  return answer;
}

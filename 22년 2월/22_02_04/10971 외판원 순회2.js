function solution(n, map) {
  let answer = Infinity;
  let minCostTravelRoute = [];
  const output = [];
  const startCount = 0;
  const permutationResult = [];
  const visited = Array(n).fill(0);

  const getPermutation = cnt => {
    if (cnt === n) {
      permutationResult.push(output.map(num => +num));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] === 1) continue;

      visited[i] = 1;
      output.push(i);
      getPermutation(cnt + 1);
      output.pop();
      visited[i] = 0;
    }
  };

  // 순열을 통해서 외판원이 갈 수 있는 모든 경로를 얻는다.
  getPermutation(startCount);

  // 모든 경우의 수를 순회하면서 최소 여행 비용을 계산
  for (let i = 0; i < permutationResult.length; i++) {
    let tempTravelCount = 0;
    let travelRoute = permutationResult[i];

    for (let j = 1; j < n; j++) {
      tempTravelCount += map[travelRoute[j - 1]][travelRoute[j]];
    }

    tempTravelCount += map[travelRoute[n - 1]][travelRoute[0]];

    if (answer > tempTravelCount) {
      answer = tempTravelCount;
      minCostTravelRoute = permutationResult[i];
    }
  }

  console.log(minCostTravelRoute);
  return answer;
}

const n = 4;

const map = [
  [0, 10, 15, 20],
  [5, 0, 9, 10],
  [6, 13, 0, 12],
  [8, 8, 9, 0],
];

console.log(solution(n, map));

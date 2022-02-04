const solution = (N, M, nums) => {
  const output = [];
  const combinationResult = [];
  const visited = Array(N).fill(0);

  // 조합은 같은 결과가 순서가 다르게 나와도 같은 값으로 취급하기 때문에
  // 중복된 수열이 생성되지 않는다.
  const getCombination = (idx, cnt) => {
    if (cnt === M) {
      combinationResult.push(output.map(num => +num));
    }

    for (let i = idx; i < N; i++) {
      if (visited[i] === 1) continue;

      visited[i] = 1;
      output.push(nums[i]);
      getCombination(i, cnt + 1);
      output.pop();
      visited[i] = 0;
    }
  };

  getCombination(0, 0);

  console.log(combinationResult);
};

const [N, M] = [4, 2];
const nums = Array.from({ length: N }, (v, i) => i + 1);

console.log(solution(N, M, nums));

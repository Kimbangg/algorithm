const getPermutation = (cnt, output, permu_arr, visited) => {
  if (cnt === M) {
    permu_arr.push(output.map(num => +num));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === 1) continue;

    visited[i] = 1;
    output.push(nums[i]);
    getPermutation(cnt + 1, output, permu_arr, visited);
    output.pop();
    visited[i] = 0;
  }
};

const solution = (N, M, nums) => {
  const output = [];
  const permutationResult = [];
  const visited = Array(N + 1).fill(0);

  getPermutation(0, output, permutationResult, visited);

  return permutationResult;
};

// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열을 만들어라.
const [N, M] = [3, 2];
const nums = Array.from({ length: N }, (v, i) => i + 1);

console.log(solution(N, M, nums));

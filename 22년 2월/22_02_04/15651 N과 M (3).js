const solution = (N, M, nums) => {
  const result = [];
  const output = [];

  // 중복 순열
  const getRepeatPermutation = cnt => {
    if (cnt === M) {
      result.push(output.map(num => +num));
      return;
    }

    for (let i = 1; i <= N; i++) {
      output.push(i);
      getRepeatPermutation(cnt + 1);
      output.pop();
    }
  };

  getRepeatPermutation(0);

  console.log(result);
};

const [N, M] = [4, 2];
const nums = Array.from({ length: N }, (v, i) => i + 1);

console.log(solution(N, M, nums));

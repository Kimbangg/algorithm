const solution = (N, M, nums) => {
  const result = [];
  const output = [];

  // 조합은 같은 결과가 순서가 다르게 나와도 같은 값으로 취급하기 때문에
  // 중복된 수열이 생성되지 않는다.
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

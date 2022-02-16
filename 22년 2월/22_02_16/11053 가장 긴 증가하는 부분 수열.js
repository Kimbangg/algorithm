const solution = () => {
  // 이전에 만들었던 값을 잘 이용했는지? (= 메모이제이션)
  const dp = Array(n).fill(1);

  // 이전 값과의 비교만 이루어질 경우, 전전 값보다는 작은데 전 값보다는 커서 발생하는 문제가 존재한다.
  for (let i = 1; i < n; i++) {
    const prevMax = Math.max(...numbers.slice(0, i));
    const maxLen = Math.max(...dp);

    if (numbers[i] > prevMax) {
      dp[i] = maxLen + 1;
    }
  }

  return Math.max(...dp);
};

const n = 6;
const numbers = [10, 20, 10, 30, 20, 50];

console.log(solution(n, numbers));

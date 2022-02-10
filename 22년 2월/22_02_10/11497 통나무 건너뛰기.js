const solution = (n, height) => {
  let result = 0;
  height.sort();

  for (let i = 2; i < height.length; i++) {
    result = Math.max(result, height[i] - height[i - 2]);
  }

  return result;
};

const n = 7;
const height = [13, 10, 12, 11, 10, 11, 12];
console.log(solution(n, height));

// Time Complexity: O(2^n)
const fib_naive = n => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    fib = fib_naive(n - 1) + fib_naive(n - 2);
    return fib;
  }
};

// Dynamic Programming PS : O(n) => Top Down
// 예를 들어서 (10000) 의 피보나치 수열 값을 알고 싶다고 가정해본다면, F(10000) ... F(2) 까지 함수 호출이 되어야한다.
// => Maximum Call Stack Depth Exceed
const fib_arr = [0, 1];

const fib_recur_dp = n => {
  if (n < fib_arr.length) {
    return fib_arr[n];
  } else {
    fib = fib_recur_dp(n - 1) + fib_recur_dp(n - 2);
    fib_arr.push(fib);
    return fib;
  }
};

// Bottom Up
// 시간 복잡도: O(n), 공간 복잡도 O(1)
const fib_dp = n => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  const fib_array = [0, 1];

  for (let i = 2; i <= n; i++) {
    num = fib_array[i - 2] + fib_array[i - 1];
    fib_array.push(num);
  }

  return fib_array[n];
};

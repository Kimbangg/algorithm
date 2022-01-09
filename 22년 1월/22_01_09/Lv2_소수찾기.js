function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(v => [v]);
  else {
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map(permutation => [fixed, ...permutation]);
      results.push(...attached);
    });
  }

  return results;
}

// 소수인지 판별
function isPrime(num) {
  // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
  // num > i
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
    }
  }
  // 소수는 1보다 큰 정수임으로
  // 1보다 작으면 false를 리턴한다
  return num > 1;
}

function solution(numbers) {
  let answer = 0;

  const candiArr = [];

  const splitArr = numbers.split('');
  for (let i = 1; i < numbers.length + 1; i++) {
    candiArr.push(...getPermutations(splitArr, i).map(v => Number(v.join(''))));
  }

  const candiSet = new Set(candiArr);
  candiSet.forEach(function (v) {
    if (isPrime(v)) answer++;
  });

  return answer;
}

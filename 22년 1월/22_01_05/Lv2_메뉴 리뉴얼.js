function getCombination(arr, limit) {
  const results = [];

  if (limit === 1) {
    return arr.map(value => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, limit - 1);
    const attached = combinations.map(combination => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
}

function solution(orders, course) {
  const answer = [];

  for (let i = 0; i < course.length; i++) {
    const result = {};
    let callCount = 0;

    orders.forEach(element => {
      getCombination(element.split(''), course[i]).forEach(combi => {
        const str = combi.sort().join('');

        result[str] = result[str] ? result[str] + 1 : 1;
        callCount = callCount < result[str] ? result[str] : callCount;
      });
    });

    if (callCount >= 2) {
      for (const [key, value] of Object.entries(result)) {
        if (value === callCount) {
          answer.push(key);
        }
      }
    }
  }

  return answer.sort();
}

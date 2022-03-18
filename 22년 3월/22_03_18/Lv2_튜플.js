function solution(s) {
  let answer = [];

  const arr = eval(s.replace(/{/g, '[').replace(/}/g, ']')).flat();

  const countObj = {};
  const sorted = [];

  arr.forEach(value => {
    countObj[value] = (countObj[value] || 0) + 1;
  });

  for (const n in countObj) {
    sorted.push([n, countObj[n]]);
  }

  sorted.sort((a, b) => {
    return b[1] - a[1];
  });

  answer = sorted.map(v => Number(v[0]));

  return answer;
}

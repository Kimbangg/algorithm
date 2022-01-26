// O (nlogn)
var twoCitySchedCost = function (costs) {
  let answer = 0;
  const remaining = Array.from({ length: costs.length / 2 }, () => costs.length / 2);

  costs.sort((a, b) => {
    return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
  });

  costs.forEach(cost => {
    const cheapIdx = cost[0] < cost[1] ? 0 : 1;

    if (remaining[cheapIdx] > 0) {
      remaining[cheapIdx] -= 1;
      answer += cost[cheapIdx];
    } else {
      remaining[1 - cheapIdx] -= 1;
      answer += cost[1 - cheapIdx];
    }
  });

  return answer;
};

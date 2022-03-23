const calExistingTime = (inHour, inMin, outHour, outMin) => {
  let existingTime = 0;

  if (outMin < inMin) {
    existingTime = (outHour - inHour - 1) * 60 + (outMin + 60) - inMin;
  } else {
    existingTime = (outHour - inHour) * 60 + (outMin - inMin);
  }

  return existingTime;
};

function solution(fees, records) {
  const map = {};
  const answer = [];

  records.forEach(record => {
    const [time, carID, history] = record.split(' ');

    switch (history) {
      case 'IN':
        map[carID] ? (map[carID][0] = time) : (map[carID] = [time, 0]);
        break;
      case 'OUT':
        const [outHour, outMin] = time.split(':').map(_ => Number(_));
        const [inHour, inMin] = map[carID][0].split(':').map(_ => Number(_));

        const existingTime = calExistingTime(inHour, inMin, outHour, outMin);

        map[carID][0] = null;
        map[carID][1] += existingTime;
        break;
    }
  });

  for (const key in map) {
    let totalExistingTime = 0;

    if (map[key][0] !== null) {
      const [inHour, inMin] = map[key][0].split(':').map(_ => Number(_));
      const extraTime = calExistingTime(inHour, inMin, 23, 59);

      totalExistingTime = extraTime + map[key][1];
    } else {
      totalExistingTime = map[key][1];
    }

    totalExistingTime > fees[0]
      ? answer.push([
          Number(key),
          fees[1] +
            Math.ceil((totalExistingTime - fees[0]) / fees[2]) * fees[3],
        ])
      : answer.push([Number(key), fees[1]]);
  }

  return answer.sort((a, b) => a[0] - b[0]).map(info => info[1]);
}

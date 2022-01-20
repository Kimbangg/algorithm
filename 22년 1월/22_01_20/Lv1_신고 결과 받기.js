function solution(id_list, report, k) {
  const reportList = {};
  const answer = Array.from({ length: id_list.length }).fill(0);

  id_list.map(userName => {
    reportList[userName] = [];
  });

  report.forEach(info => {
    const [reporter, target] = info.split(' ');

    if (!reportList[target].includes(reporter)) {
      reportList[target].push(reporter);
    }
  });

  for (const key in reportList) {
    if (reportList[key].length >= k) {
      reportList[key].forEach(user => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}

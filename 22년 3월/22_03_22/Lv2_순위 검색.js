function solution(info, query) {
  const answer = [];

  const findMatchedCount = (
    queryLan,
    queryPart,
    queryExp,
    queryFood,
    queryScore
  ) => {
    const nextInfo = info.filter(info => {
      const [lan, part, exp, food, score] = info.split(' ');

      if (queryLan !== lan && queryLan !== '-') return false;
      if (queryPart !== part && queryPart !== '-') return false;
      if (queryExp !== exp && queryExp !== '-') return false;
      if (queryFood !== food && queryFood !== '-') return false;
      if (Number(queryScore) > Number(score)) return false;

      return true;
    });

    return nextInfo.length;
  };

  query.forEach(req => {
    const [lan, part, exp, rest] = req.split('and');
    const [, food, score] = rest.split(' ');

    answer.push(
      findMatchedCount(lan.trim(), part.trim(), exp.trim(), food, score)
    );
  });

  return answer;
}

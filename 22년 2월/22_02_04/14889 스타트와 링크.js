const solution = (N, ability) => {
  const people = [];
  for (let i = 0; i < N; i++) people.push(i);

  const visited = new Array(N).fill(false);

  let LINK_TEAM = [];
  const START_TEAM = [];

  const findRemaingPeople = (people, team) => {
    let remaining = [];
    for (let i = 0; i < people.length; i++) {
      if (!team.includes(people[i])) remaining.push(people[i]);
    }
    return remaining;
  };

  function calcTeamPoint(points, team) {
    let sumOfPoint = 0;

    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        if (i === j) continue;
        sumOfPoint += points[team[i]][team[j]];
      }
    }
    return sumOfPoint;
  }

  const dfs = (idx, cnt) => {
    if (cnt === N / 2) {
      LINK_TEAM = findRemaingPeople(people, START_TEAM);
      const startTeamPoint = calcTeamPoint(ability, START_TEAM);
      const linkTeamPoint = calcTeamPoint(ability, LINK_TEAM);

      const pointGap = Math.abs(startTeamPoint - linkTeamPoint);

      answer = answer > pointGap ? pointGap : answer;

      return;
    }

    for (let i = idx; i < N; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      START_TEAM.push(i);
      dfs(i, cnt + 1);
      START_TEAM.pop();
      visited[i] = false;
    }
  };

  dfs(0, 0);

  return answer;
};

let answer = Number.MAX_SAFE_INTEGER;

const N = 6;

const ability = [
  [0, 1, 2, 3, 4, 5],
  [1, 0, 2, 3, 4, 5],
  [1, 2, 0, 3, 4, 5],
  [1, 2, 3, 0, 4, 5],
  [1, 2, 3, 4, 0, 5],
  [1, 2, 3, 4, 5, 0],
];

console.log(solution(N, ability));

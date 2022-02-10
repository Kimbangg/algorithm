const solution = (treeCount, daysForGrow) => {
  let result = 0;
  let asTimeGoesBy = treeCount;

  daysForGrow.sort((a, b) => b - a);

  const allPlanted = daysForGrow.map((tree, idx) => {
    asTimeGoesBy -= 1;
    return tree - asTimeGoesBy;
  });

  return Math.max(...allPlanted) + treeCount + 1;
};

const treeCount = 4;
const daysForGrow = [2, 3, 4, 3];

console.log(solution(treeCount, daysForGrow));

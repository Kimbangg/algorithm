const solution = (n, location) => {
  location.sort();
  return location[Math.floor((n - 1) / 2)];
};

const n = 4;
const location = [5, 1, 7, 9];
console.log(solution(n, location));

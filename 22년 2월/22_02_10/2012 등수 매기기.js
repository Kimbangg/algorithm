// O(n^2);
const solution = (studentCount, expectedRank) => {
  let result = 0;

  const swap = (a, b) => {
    [expectedRank[a], expectedRank[b]] = [expectedRank[b], expectedRank[a]];
  };

  for (let i = 0; i < expectedRank.length; i++) {
    if (expectedRank[i] !== i + 1) {
      const idx = expectedRank.findIndex(number => number === i + 1);

      if (idx !== -1) {
        swap(i, idx, expectedRank);
      }
    }
  }

  expectedRank.forEach((rank, idx) => {
    result += Math.abs(rank - (idx + 1));
  });

  return result;
};

// O(n)
const solution = (studentCount, expectedRank) => {
  let result = 0;
  const notDuplicated = Array.from({ length: studentCount }, (v, i) => i + 1);

  expectedRank.sort((a, b) => a - b);

  for (let i = 0; i < expectedRank.length; i++) {
    result += Math.abs(expectedRank[i] - notDuplicated[i]);
  }

  return result;
};

const studentCount = 5;
const expectedRank = [1, 1, 2, 3, 5];

console.log(solution(studentCount, expectedRank));

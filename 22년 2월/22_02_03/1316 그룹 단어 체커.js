const solution = (n, words) => {
  let counter = n;

  for (let i = 0; i < n; i++) {
    const map = {};

    for (let j = 0; j < words[i].length; i++) {
      if (!map[words[i][j]]) {
        words[i][j] = true;
      } else if (map[words[i][j]] && words[i][j - 1] === words[i][j]) {
        continue;
      } else {
        counter -= 1;
        break;
      }
    }
  }

  return counter;
};

const n = 3;

const words = ['happy', 'new', 'year'];

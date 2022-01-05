const findSuccess = progresses => {
  let successCount = 0;

  for (let i = 0; i < progresses.length; i++) {
    if (progresses[i] < 100) break;
    successCount += 1;
  }

  return successCount;
};

const solution = (progresses, speeds) => {
  const answer = [];

  while (progresses.length !== 0) {
    progresses = progresses.map((progress, index) => (progress += speeds[index]));

    if (progresses[0] >= 100) {
      const successCount = findSuccess(progresses);

      progresses.splice(0, successCount);
      speeds.splice(0, successCount);

      answer.push(successCount);
    }
  }

  return answer;
};

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds));

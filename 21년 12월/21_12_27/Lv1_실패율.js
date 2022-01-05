function solution(N, stages) {
  let totalPeople = stages.length
  const answer = []
  const stageProgress = new Array(N).fill(0)

  stages.forEach(stage => (stageProgress[stage - 1] = (stageProgress[stage - 1] || 0) + 1))

  stageProgress.forEach((progress, index) => {
    if (index < N) {
      answer.push([index + 1, progress / totalPeople])
      totalPeople -= progress
    }
  })

  answer.sort((a, b) => b[1] - a[1])

  return answer.map(per => per[0])
}

function solution(dartResult) {
  let answer = []
  let tmp = 0

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i].match(/[0-9]/)) {
      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
        tmp = 10
        i++
      } else tmp = dartResult[i]
    } else if (dartResult[i] === 'S') answer.push(Math.pow(tmp, 1))
    else if (dartResult[i] === 'D') answer.push(Math.pow(tmp, 2))
    else if (dartResult[i] === 'T') answer.push(Math.pow(tmp, 3))
    else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2
      answer[answer.length - 2] *= 2
    } else if (dartResult[i] === '#') answer[answer.length - 1] *= -1
  }

  return answer.reduce((acc, v) => acc + v)
}

const countDistance = (pressed, curHand) => {
  const axisX = Math.abs(pressed[0] - curHand[0])
  const axisY = Math.abs(pressed[1] - curHand[1])

  return axisX + axisY
}

const solution = (numbers, hand) => {
  let answer = ''
  let currentLeft = '*'
  let currentRight = '#'

  const fixed = {
    1: 'L',
    4: 'L',
    7: 'L',
    3: 'R',
    6: 'R',
    9: 'R',
  }

  const keyLocation = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  }

  for (let i = 0; i < numbers.length; i++) {
    const clicked = fixed[numbers[i]]

    if (clicked) {
      answer += clicked
      clicked === 'L' ? (currentLeft = numbers[i]) : (currentRight = numbers[i])
    } else {
      const leftDistance = countDistance(
        keyLocation[String(numbers[i])],
        keyLocation[String(currentLeft)]
      )
      const rightDistance = countDistance(
        keyLocation[String(numbers[i])],
        keyLocation[String(currentRight)]
      )

      if (leftDistance < rightDistance) {
        answer += 'L'
        currentLeft = numbers[i]
      } else if (leftDistance === rightDistance) {
        hand === 'left' ? (answer += 'L') : (answer += 'R')
        hand === 'left' ? (currentLeft = numbers[i]) : (currentRight = numbers[i])
      } else {
        answer += 'R'
        currentRight = numbers[i]
      }
    }
  }

  return answer
}

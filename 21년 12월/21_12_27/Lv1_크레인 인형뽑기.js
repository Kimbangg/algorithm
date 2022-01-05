const solution = (board, moves) => {
  let answer = 0
  const basket = []

  moves.forEach(value => {
    const doll = pickDoll(board, value - 1)

    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop()
        answer += 2
      } else {
        basket.push(doll)
      }
    }
  })
  return answer
}

const pickDoll = (board, location) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][location] !== 0) {
      const doll = board[i][location]
      board[i][location] = 0

      return doll
    }
  }
}

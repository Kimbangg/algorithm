function solution(n, arr1, arr2) {
  const answer = []
  for (let i = 0; i < n; i++) {
    const arr1Bin = arr1[i].toString(2).padStart(n, 0)
    const arr2Bin = arr2[i].toString(2).padStart(n, 0)

    let map_row = ''
    for (let j = 0; j < n; j++) {
      if (arr1Bin[j] === '1' || arr2Bin[j] === '1') {
        map_row += '#'
      } else {
        map_row += ' '
      }
    }
    answer.push(map_row)
  }
  return answer
}

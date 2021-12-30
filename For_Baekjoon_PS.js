const readInputLines = () => {
  return require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
}

const splitAndParseInt = string => {
  return string.split(' ').map(value => parseInt(value))
}

const calculator = (a, b, op) => {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
};

const solution = expression => {
  var answer = 0;

  const combinations = [
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['-', '*', '+'],
    ['-', '+', '*'],
  ];

  const arr = expression.split(/(\D)/);

  combinations.forEach(combination => {
    const operands = expression.match(/[0-9]+/g).map(Number);
    const operators = expression.match(/[\*\+\-]/g);

    combination.forEach(operator => {
      let index = operators.indexOf(operator);

      while (index !== -1) {
        operands[index] = calculator(operands[index], operands[index + 1], operator);

        operands.splice(index + 1, 1);
        operators.splice(index, 1);
        index = operators.indexOf(operator);
      }
    });

    if (answer < Math.abs(operands[0])) answer = Math.abs(operands[0]);
  });

  return answer;
};

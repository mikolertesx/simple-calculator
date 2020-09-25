const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '/': (num1, num2) => num2 === 0 ? 'Can\'t divide by 0':num1 / num2,
  'X': (num1, num2) => num1 * num2,
  '%': (num1, num2) => num1 % num2,
}

export default operations;
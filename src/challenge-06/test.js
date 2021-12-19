import sumPairs from './solution.js'

const cases = [
  {
    input: {
      numbers: [3, 5, 7, 2],
      result: 10,
    },
    expected: [3, 7],
  },
  {
    input: {
      numbers: [-3, -2, 7, -5],
      result: 10,
    },
    expected: null,
  },
  {
    input: {
      numbers: [2, 2, 3, 1],
      result: 4,
    },
    expected: [2, 2],
  },
  {
    input: {
      numbers: [6, 7, 1, 2],
      result: 8,
    },
    expected: [6, 2],
  },
  {
    input: {
      numbers: [0, 2, 2, 3, -1, 1, 5],
      result: 6,
    },
    expected: [1, 5],
  },
]

describe('#06', () => {
  test.each(cases)('#$# sumPairs()', ({input, expected}) => {
    expect(sumPairs(input.numbers, input.result)).toEqual(expected)
  })
})

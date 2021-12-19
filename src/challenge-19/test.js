import learn from './solution'

const cases = [
  {
    input: {
      time: 10,
      courses: [2, 3, 8, 1, 4],
    },
    expected: [0, 2],
  },
  {
    input: {
      time: 15,
      courses: [2, 10, 4, 1],
    },
    expected: [1, 2],
  },
  {
    input: {
      time: 25,
      courses: [10, 15, 20, 5],
    },
    expected: [0, 1],
  },
  {
    input: {
      time: 8,
      courses: [8, 2, 1],
    },
    expected: [1, 2],
  },
  {
    input: {
      time: 8,
      courses: [8, 2, 1, 4, 3],
    },
    expected: [3, 4],
  },
  {
    input: {
      time: 4,
      courses: [10, 14, 20],
    },
    expected: null,
  },
  {
    input: {
      time: 5,
      courses: [5, 5, 5],
    },
    expected: null,
  },
]

describe('#19', () => {
  test.each(cases)('#$# learn()', ({input, expected}) => {
    expect(learn(input.time, input.courses)).toEqual(expected)
  })
})

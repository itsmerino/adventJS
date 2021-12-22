import canCarry from './solution'

const cases = [
  {
    input: {
      capacity: 4,
      trip: [
        [2, 5, 8],
        [3, 6, 10],
      ],
    },
    expected: false,
  },
  {
    input: {
      capacity: 3,
      trip: [
        [1, 1, 5],
        [2, 2, 10],
      ],
    },
    expected: true,
  },
  {
    input: {
      capacity: 3,
      trip: [
        [2, 1, 5],
        [3, 5, 7],
      ],
    },
    expected: true,
  },
  {
    input: {
      capacity: 4,
      trip: [
        [2, 3, 8],
        [2, 5, 7],
      ],
    },
    expected: true,
  },
  {
    input: {
      capacity: 1,
      trip: [[2, 3, 8]],
    },
    expected: false,
  },
  {
    input: {
      capacity: 2,
      trip: [
        [1, 2, 4],
        [2, 3, 8],
      ],
    },
    expected: false,
  },
]

describe('#21', () => {
  test.each(cases)('#$# canCarry()', ({input, expected}) => {
    expect(canCarry(input.capacity, input.trip)).toEqual(expected)
  })
})

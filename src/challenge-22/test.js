import countDecorations from './solution'

const cases = [
  {
    input: {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    },
    expected: 6,
  },
  {
    input: {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    },
    expected: 28,
  },
]

describe('#22', () => {
  test.each(cases)('#$# countDecorations()', ({input, expected}) => {
    expect(countDecorations(input)).toEqual(expected)
  })
})

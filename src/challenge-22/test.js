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
]

describe('#22', () => {
  test.each(cases)('#$# countDecorations()', ({input, expected}) => {
    expect(countDecorations(input)).toEqual(expected)
  })
})

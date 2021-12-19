import checkSledJump from './solution.js'

const cases = [
  {input: [1, 2, 3, 2, 1], expected: true},
  {input: [0, 1, 0], expected: true},
  {input: [0, 3, 2, 1], expected: true},
  {input: [0, 1000, 1], expected: true},
  {input: [2, 4, 4, 6, 2], expected: false},
  {input: [1, 2, 3], expected: false},
  {input: [1, 2, 3, 2, 1, 2, 3], expected: false},
]

describe('#15', () => {
  test.each(cases)('#$# checkSledJump()', ({input, expected}) => {
    expect(checkSledJump(input)).toEqual(expected)
  })
})

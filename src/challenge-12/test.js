import getMinJump from './solution'

const cases = [
  {input: [5, 3, 6, 7, 9], expected: 4},
  {input: [2, 4, 6, 8, 10], expected: 7},
  {input: [1, 2, 3, 5], expected: 4},
  {input: [3, 7, 5], expected: 2},
  {input: [9, 5, 1], expected: 2},
]

describe('#12', () => {
  test.each(cases)('#$# getMinJump()', ({input, expected}) => {
    expect(getMinJump(input)).toEqual(expected)
  })
})

import getCoins from './solution'

const cases = [
  {input: 51, expected: [1, 0, 0, 0, 0, 1]},
  {input: 3, expected: [1, 1, 0, 0, 0, 0]},
  {input: 5, expected: [0, 0, 1, 0, 0, 0]},
  {input: 16, expected: [1, 0, 1, 1, 0, 0]},
  {input: 100, expected: [0, 0, 0, 0, 0, 2]},
]

describe('#10', () => {
  test.each(cases)('#$# getCoins()', ({input, expected}) => {
    expect(getCoins(input)).toEqual(expected)
  })
})

import maxProfit from './solution.js'

const cases = [
  {input: [39, 18, 29, 25, 34, 32, 5], expected: 16},
  {input: [10, 20, 30, 40, 50, 60, 70], expected: 60},
  {input: [18, 15, 12, 11, 9, 7], expected: -1},
  {input: [3, 3, 3, 3, 3], expected: -1},
]

describe('#08', () => {
  test.each(cases)('#$# maxProfit()', ({input, expected}) => {
    expect(maxProfit(input)).toEqual(expected)
  })
})

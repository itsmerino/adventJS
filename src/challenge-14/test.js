import missingReindeer from './solution'

const cases = [
  {input: [0, 2, 3], expected: 1},
  {input: [5, 6, 1, 2, 3, 7, 0], expected: 4},
  {input: [0, 1], expected: 2},
  {input: [3, 0, 1], expected: 2},
  {input: [9, 2, 3, 5, 6, 4, 7, 0, 1], expected: 8},
  {input: [0], expected: 1},
]

describe('#14', () => {
  test.each(cases)('#$# missingReindeer()', ({input, expected}) => {
    expect(missingReindeer(input)).toEqual(expected)
  })
})

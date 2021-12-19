import daysToXmas from './solution.js'

const cases = [
  {input: new Date('Dec 1, 2021'), expected: 24},
  {input: new Date('Dec 24, 2021 00:00:01'), expected: 1},
  {input: new Date('Dec 24, 2021 23:59:59'), expected: 1},
  {input: new Date('December 20, 2021 03:24:00'), expected: 5},
  {input: new Date('Dec 25, 2021'), expected: 0},
  {input: new Date('Dec 26, 2021'), expected: -1},
  {input: new Date('Dec 31, 2021'), expected: -6},
  {input: new Date('Jan 1, 2022 00:00:01'), expected: -7},
  {input: new Date('Jan 1, 2022 23:59:59'), expected: -7},
]

describe('#05', () => {
  test.each(cases)('#$# daysToXmas()', ({input, expected}) => {
    expect(daysToXmas(input)).toEqual(expected)
  })
})

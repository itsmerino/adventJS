import shouldBuyFidelity from './solution.js'

const cases = [
  {input: 1, expected: false},
  {input: 100, expected: true},
]

describe('#11', () => {
  test.each(cases)('#$# shouldBuyFidelity()', ({input, expected}) => {
    expect(shouldBuyFidelity(input)).toEqual(expected)
  })
})

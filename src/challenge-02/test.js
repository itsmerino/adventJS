import listGifts from './solution'

const cases = [
  {
    input: 'bici coche balón _playstation bici coche peluche',
    expected: {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    },
  },
]

describe('#02', () => {
  test.each(cases)('#$# listGifts()', ({input, expected}) => {
    expect(listGifts(input)).toEqual(expected)
  })
})

import wrapGifts from './solution'

const cases = [
  {input: ['📷', '⚽️'], expected: ['****', '*📷*', '*⚽️*', '****']},
  {input: ['🏈🎸', '🎮🧸'], expected: ['******', '*🏈🎸*', '*🎮🧸*', '******']},
  {input: ['📷'], expected: ['****', '*📷*', '****']},
]

describe('#13', () => {
  test.each(cases)('#$# wrapGifts()', ({input, expected}) => {
    expect(wrapGifts(input)).toEqual(expected)
  })
})

import fixFiles from './solution'

const cases = [
  {
    input: ['photo', 'postcard', 'photo', 'photo', 'video'],
    expected: ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'],
  },
  {
    input: ['file', 'file', 'file', 'game', 'game'],
    expected: ['file', 'file(1)', 'file(2)', 'game', 'game(1)'],
  },
  {
    input: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'],
    expected: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'],
  },
]

describe('#18', () => {
  test.each(cases)('#$# fixFiles()', ({input, expected}) => {
    expect(fixFiles(input)).toEqual(expected)
  })
})

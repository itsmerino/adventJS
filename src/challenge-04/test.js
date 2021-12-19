import createXmasTree from './solution'

const cases = [
  {input: 1, expected: '*\n#\n#'},
  {input: 3, expected: '__*__\n_***_\n*****\n__#__\n__#__'},
  {
    input: 5,
    expected:
      '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____',
  },
]

describe('#04', () => {
  test.each(cases)('#$# createXmasTree()', ({input, expected}) => {
    expect(createXmasTree(input)).toEqual(expected)
  })
})

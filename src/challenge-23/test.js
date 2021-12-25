import canReconfigure from './solution'

const cases = [
  {
    input: {
      from: 'BAL',
      to: 'LIB',
    },
    expected: true,
  },
  {
    input: {
      from: 'CON',
      to: 'JUU',
    },
    expected: false,
  },
  {
    input: {
      from: 'XBOX',
      to: 'XXBO',
    },
    expected: false,
  },
  {
    input: {
      from: 'XBOX',
      to: 'XOBX',
    },
    expected: true,
  },
  {
    input: {
      from: 'MMM',
      to: 'MID',
    },
    expected: false,
  },
  {
    input: {
      from: 'AA',
      to: 'MID',
    },
    expected: false,
  },
]

describe('#23', () => {
  test.each(cases)('#$# canReconfigure()', ({input, expected}) => {
    expect(canReconfigure(input.from, input.to)).toEqual(expected)
  })
})

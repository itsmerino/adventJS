import canMouseEat from './solution'

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
]

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
]

const cases = [
  {
    input: {
      direction: 'up',
      game: room,
    },
    expected: false,
  },
  {
    input: {
      direction: 'down',
      game: room,
    },
    expected: true,
  },
  {
    input: {
      direction: 'right',
      game: room,
    },
    expected: false,
  },
  {
    input: {
      direction: 'left',
      game: room,
    },
    expected: false,
  },
  {
    input: {
      direction: 'up',
      game: room2,
    },
    expected: false,
  },
  {
    input: {
      direction: 'down',
      game: room2,
    },
    expected: false,
  },
  {
    input: {
      direction: 'right',
      game: room2,
    },
    expected: true,
  },
  {
    input: {
      direction: 'left',
      game: room2,
    },
    expected: false,
  },
]

describe('#25', () => {
  test.each(cases)('#$# canMouseEat()', ({input, expected}) => {
    expect(canMouseEat(input.direction, input.game)).toEqual(expected)
  })
})

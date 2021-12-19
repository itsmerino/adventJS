import countSheeps from './solution'

const cases = [
  {
    input: [
      {name: 'Noa', color: 'azul'},
      {name: 'Euge', color: 'rojo'},
      {name: 'Navidad', color: 'rojo'},
      {name: 'Ki Na Ma', color: 'rojo'},
    ],
    expected: [
      {name: 'Navidad', color: 'rojo'},
      {name: 'Ki Na Ma', color: 'rojo'},
    ],
  },
]

describe('#01', () => {
  test.each(cases)('#$# countSheeps()', ({input, expected}) => {
    expect(countSheeps(input)).toEqual(expected)
  })
})

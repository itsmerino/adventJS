import isValid from './solution'

const cases = [
  {input: 'bici coche (balón) bici coche peluche', expected: true},
  {input: '(muñeca) consola bici', expected: true},
  {input: 'bici coche (balón bici coche', expected: false},
  {input: 'peluche (bici [coche) bici coche balón', expected: false},
  {input: '(peluche {) bici', expected: false},
  {input: '() bici', expected: false},
]

describe('#03', () => {
  test.each(cases)('#$# isValid()', ({input, expected}) => {
    expect(isValid(input)).toEqual(expected)
  })
})

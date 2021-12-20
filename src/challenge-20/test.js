import pangram from './solution'

const cases = [
  {
    input: 'Extraño pan de col y kiwi se quemó bajo fugaz vaho',
    expected: true,
  },
  {
    input: 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!',
    expected: true,
  },
  {
    input:
      'Esto es una frase larga pero no tiene todas las letras del abecedario',
    expected: false,
  },
  {
    input: 'De la a a la z, nos faltan letras',
    expected: false,
  },
]

describe('#20', () => {
  test.each(cases)('#$# pangram()', ({input, expected}) => {
    expect(pangram(input)).toEqual(expected)
  })
})

import contains from './solution.js'

const cases = [
  {
    input: {
      store: {
        estanteria1: {
          cajon1: {
            producto1: 'coca-cola',
            producto2: 'fanta',
            producto3: 'sprite',
          },
        },
        estanteria2: {
          cajon1: 'vacio',
          cajon2: {
            producto1: 'pantalones',
            producto2: 'camiseta',
          },
        },
      },
      product: 'camiseta',
    },
    expected: true,
  },
  {
    input: {
      store: {
        baul: {
          fondo: {
            objeto: 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando',
          },
        },
      },
      product: 'gameboy',
    },
    expected: false,
  },
]

describe('#07', () => {
  test.each(cases)('#$# contains()', ({input, expected}) => {
    expect(contains(input.store, input.product)).toEqual(expected)
  })
})

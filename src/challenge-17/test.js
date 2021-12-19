import countPackages from './solution.js'

const cases = [
  {
    input: {
      carriers: [
        ['dapelu', 5, ['midu', 'jelowing']],
        ['midu', 2, []],
        ['jelowing', 2, []],
      ],
      carrierID: 'dapelu',
    },
    expected: 9,
  },
  {
    input: {
      carriers: [
        ['lolivier', 8, ['camila', 'jesuspoleo']],
        ['camila', 5, ['sergiomartinez', 'conchaasensio']],
        ['jesuspoleo', 4, []],
        ['sergiomartinez', 4, []],
        ['conchaasensio', 3, ['facundocapua', 'faviola']],
        ['facundocapua', 2, []],
        ['faviola', 1, []],
      ],
      carrierID: 'camila',
    },
    expected: 15,
  },
]

describe('#17', () => {
  test.each(cases)('#$# countPackages()', ({input, expected}) => {
    expect(countPackages(input.carriers, input.carrierID)).toEqual(expected)
  })
})

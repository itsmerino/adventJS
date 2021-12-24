import checkIsSameTree from './solution'

const cases = [
  {
    input: {
      treeA: {
        value: 1,
        left: {value: 2, left: null, right: null},
        right: {value: 3, left: null, right: null},
      },
      treeB: {
        value: 1,
        left: {value: 2, left: null, right: null},
        right: {value: 3, left: null, right: null},
      },
    },
    expected: true,
  },
  {
    input: {
      treeA: {
        value: 1,
        left: {value: 2, left: null, right: null},
        right: {value: 3, left: null, right: null},
      },
      treeB: {
        value: 1,
        left: {
          value: 3,
          left: {value: 2, left: null, right: null},
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: {value: 4, left: null, right: null},
        },
      },
    },
    expected: false,
  },
  {
    input: {
      treeA: {
        value: 1,
        left: {
          value: 3,
          left: {value: 2, left: null, right: null},
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: {value: 4, left: null, right: null},
        },
      },
      treeB: {
        value: 1,
        left: {
          value: 3,
          left: {value: 2, left: null, right: null},
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: {value: 4, left: null, right: null},
        },
      },
    },
    expected: true,
  },
]

describe('#24', () => {
  test.each(cases)('#$# checkIsSameTree()', ({input, expected}) => {
    expect(checkIsSameTree(input.treeA, input.treeB)).toEqual(expected)
  })
})

import checkIsSameTree from './solution'

const tree = {
  value: 1,
  left: {value: 2, left: null, right: null},
  right: {value: 3, left: null, right: null},
}

const tree2 = {
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
}

const cases = [
  {
    input: {
      treeA: tree,
      treeB: tree,
    },
    expected: true,
  },
  {
    input: {
      treeA: tree,
      treeB: tree2,
    },
    expected: false,
  },
  {
    input: {
      treeA: tree2,
      treeB: tree2,
    },
    expected: true,
  },
]

describe('#24', () => {
  test.each(cases)('#$# checkIsSameTree()', ({input, expected}) => {
    expect(checkIsSameTree(input.treeA, input.treeB)).toEqual(expected)
  })
})

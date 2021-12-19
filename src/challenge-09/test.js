import groupBy from './solution.js'

const cases = [
  {
    input: {
      collection: [6.1, 4.2, 6.3],
      it: Math.floor,
    },
    expected: {6: [6.1, 6.3], 4: [4.2]},
  },
  {
    input: {
      collection: ['one', 'two', 'three'],
      it: 'length',
    },
    expected: {3: ['one', 'two'], 5: ['three']},
  },
  {
    input: {
      collection: [{age: 23}, {age: 24}],
      it: 'age',
    },
    expected: {23: [{age: 23}], 24: [{age: 24}]},
  },
  {
    input: {
      collection: [1397639141184, 1363223700000],
      it: timestamp => new Date(timestamp).getFullYear(),
    },
    expected: {2013: [1363223700000], 2014: [1397639141184]},
  },
  {
    input: {
      collection: [
        {title: 'JavaScript: The Good Parts', rating: 8},
        {title: 'Aprendiendo Git', rating: 10},
        {title: 'Clean Code', rating: 9},
      ],
      it: 'rating',
    },
    expected: {
      8: [{title: 'JavaScript: The Good Parts', rating: 8}],
      9: [{title: 'Clean Code', rating: 9}],
      10: [{title: 'Aprendiendo Git', rating: 10}],
    },
  },
]

describe('#09', () => {
  test.each(cases)('#$# groupBy()', ({input, expected}) => {
    expect(groupBy(input.collection, input.it)).toEqual(expected)
  })
})

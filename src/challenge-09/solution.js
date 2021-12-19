export default function groupBy(collection, it) {
  const isFunction = typeof it === 'function'

  return collection.reduce((groups, item) => {
    const key = isFunction ? it(item) : item[it]
    groups[key] = groups[key] ? [...groups[key], item] : [item]
    return groups
  }, {})
}

export default function canReconfigure(from, to) {
  if (from.length !== to.length) {
    return false
  }

  const original = {}
  const converted = {}

  for (let i = 0; i < from.length; i++) {
    const fromInUse = original[from[i]] && original[from[i]] !== to[i]
    const toInUse = converted[to[i]] && converted[to[i]] !== from[i]

    if (fromInUse || toInUse) {
      return false
    }

    original[from[i]] = to[i]
    converted[to[i]] = from[i]
  }

  return true
}

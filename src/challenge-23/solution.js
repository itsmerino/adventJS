export default function canReconfigure(from, to) {
  return from.length === to.length && new Set(from).size == new Set(to).size
}

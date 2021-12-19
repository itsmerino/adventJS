export default function decodeNumber(symbols) {
  const converter = {'.': 1, ',': 5, ':': 10, ';': 50, '!': 100}

  return symbols
    .split('')
    .reverse()
    .reduce((acc, cur, idx, src) => {
      const number = converter[cur]
      const previous = converter[src[idx - 1]]
      return previous > number ? acc - number : acc + number
    }, 0)
}

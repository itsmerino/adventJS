export default function pangram(letter) {
  const alphabet = Array.from('abcdefghijklmnñopqrstuvwxyz')
  const regex =
    /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi
  const normalized = letter
    .toLowerCase()
    .normalize('NFD')
    .replace(regex, '$1')
    .normalize()

  return alphabet.every(char => normalized.includes(char))
}

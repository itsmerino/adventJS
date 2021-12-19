export default function isValid(letter) {
  const includesEmptyParenthesis = letter.includes('()')
  const isLetterValid = letter.match(/(?:\()[^()\[\]{}]*?(?:\))/g) != null

  return !includesEmptyParenthesis && isLetterValid
}

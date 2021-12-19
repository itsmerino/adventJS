export default function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    const number1 = numbers[i]
    const number2 = result - number1
    const isPresent = [...numbers].slice(i + 1).indexOf(number2) > -1

    if (isPresent) {
      return [number1, number2]
    }
  }

  return null
}

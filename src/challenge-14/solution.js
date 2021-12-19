export default function missingReindeer(ids) {
  const numbers = ids.length
  const targetSum = (numbers * (numbers + 1)) / 2
  const realSum = ids.reduce((a, b) => a + b, 0)
  return targetSum - realSum
}

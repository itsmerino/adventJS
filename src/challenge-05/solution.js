export default function daysToXmas(date) {
  const xmas = new Date('Dec 25, 2021')
  const oneDayInMillis = 1000 * 60 * 60 * 24
  return Math.ceil((xmas - date) / oneDayInMillis)
}

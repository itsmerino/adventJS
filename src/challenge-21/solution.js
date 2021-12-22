export default function canCarry(capacity, trip) {
  let carry = []

  for (const step of trip) {
    for (let i = step[1]; i < step[2]; i++) {
      carry[i] = (carry[i] ?? 0) + step[0]
    }
  }

  return carry.every(step => capacity >= step)
}

export default function shouldBuyFidelity(times) {
  const normalPrice = 12 * times
  let fidelityPrice = 250

  for (let i = 1; i <= times; i++) {
    fidelityPrice += 12 * 0.75 ** i
  }

  return fidelityPrice < normalPrice
}

export default function getCoins(change) {
  return [50, 20, 10, 5, 2, 1]
    .map(coinValue => {
      const coin = parseInt(change / coinValue)
      change %= coinValue
      return coin
    })
    .reverse()
}

export default function maxProfit(prices) {
  let max = -1

  for (let i = 0; i < prices.length; i++) {
    const salesPrices = [...prices].slice(i + 1)
    const maxSalesPrice = Math.max(...salesPrices)
    const profit = maxSalesPrice - prices[i]
    const isBetterPrice = profit > 0 && max < profit

    if (isBetterPrice) {
      max = profit
    }
  }

  return max
}

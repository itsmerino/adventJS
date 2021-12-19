export default function checkSledJump(heights) {
  const max = heights.indexOf(Math.max(...heights))
  const firstIsMax = max === 0
  const lastIsMax = max === heights.length - 1

  if (firstIsMax || lastIsMax) {
    return false
  }

  return heights.every((height, idx, src) => {
    const isMax = idx === max
    const isRising = idx <= max && height < src[idx + 1]
    const isGoingDown = idx > max && src[idx - 1] > height
    return isMax || isRising || isGoingDown
  })
}

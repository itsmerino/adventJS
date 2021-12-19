export default function getMinJump(obstacles) {
  const end = Math.max(...obstacles) + 1

  for (let i = 1; i < end; i++) {
    const canFinish = obstacles.every(obstacle => obstacle % i !== 0)
    if (canFinish) {
      return i
    }
  }

  return -1
}

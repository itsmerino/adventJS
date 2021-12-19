export default function learn(time, courses) {
  let bestTime = 0
  let result = null

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const coursesTime = courses[i] + courses[j]
      const coursesOptimizeTime = coursesTime <= time && bestTime < coursesTime

      if (coursesOptimizeTime) {
        result = [i, j]
        bestTime = coursesTime
      }
    }
  }

  return result
}

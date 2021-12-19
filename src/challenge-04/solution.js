export default function createXmasTree(height) {
  let tree = ''

  for (let i = 1; i <= height; i++) {
    const asterisks = 2 * i - 1
    const underscores = height - i
    tree +=
      '_'.repeat(underscores) +
      '*'.repeat(asterisks) +
      '_'.repeat(underscores) +
      '\n'
  }

  for (let i = 0; i < 2; i++) {
    const underscores = height - 1
    tree += '_'.repeat(underscores) + '#' + '_'.repeat(underscores) + '\n'
  }

  return tree.trim()
}

export default function checkIsSameTree(treeA, treeB) {
  if (!treeA && !treeB) return true
  if (!treeA || !treeB) return false

  return (
    treeA.value === treeB.value &&
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeA.right, treeB.right)
  )
}

export default function countDecorations(bigTree) {
  return (
    bigTree.value +
    (bigTree.left ? countDecorations(bigTree.left) : 0) +
    (bigTree.right ? countDecorations(bigTree.right) : 0)
  )
}

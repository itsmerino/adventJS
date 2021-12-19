export default function countSheeps(sheeps) {
  const includes = (name, letter) => name.toLowerCase().includes(letter)

  return sheeps.filter(
    sheep =>
      sheep.color === 'rojo' &&
      includes(sheep.name, 'n') &&
      includes(sheep.name, 'a')
  )
}

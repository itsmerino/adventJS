export default function canMouseEat(direction, game) {
  let mouse = {}

  for (let i = 0; i < game.length; i++) {
    if (game[i].includes('m')) {
      mouse = {x: i, y: game[i].indexOf('m')}
      break
    }
  }

  const moves = {
    up: game?.[mouse.x - 1]?.[mouse.y],
    down: game?.[mouse.x + 1]?.[mouse.y],
    left: game?.[mouse.x]?.[mouse.y - 1],
    right: game?.[mouse.x]?.[mouse.y + 1],
  }

  return moves[direction] === '*'
}

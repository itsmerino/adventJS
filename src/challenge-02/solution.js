export default function listGifts(letter) {
  return letter
    .trim()
    .split(' ')
    .filter(gift => !gift.startsWith('_'))
    .reduce((gifts, gift) => {
      gifts[gift] = gifts[gift] ? gifts[gift] + 1 : 1
      return gifts
    }, {})
}

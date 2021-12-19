export default function wrapGifts(gifts) {
  const wrapper = []

  if (gifts.length > 0) {
    const size = gifts[0].length + 2
    wrapper.push('*'.repeat(size))
    gifts.forEach(gift => wrapper.push('*' + gift + '*'))
    wrapper.push('*'.repeat(size))
  }

  return wrapper
}

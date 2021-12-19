export default function contains(store, product) {
  for (const property in store) {
    const item = store[property]
    const productInStore = product === item

    if (productInStore) {
      return true
    }

    const productFinded = item instanceof Object && contains(item, product)

    if (productFinded) {
      return true
    }
  }

  return false
}

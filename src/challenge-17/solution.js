export default function countPackages(carriers, carrierID) {
  let subordinates = [carrierID]
  const isSubordinate = id => subordinates.includes(id)

  carriers.forEach(carrier => {
    if (isSubordinate(carrier[0])) {
      subordinates = subordinates.concat(carrier[2])
    }
  })

  return carriers.reduce((packages, carrier) => {
    if (isSubordinate(carrier[0])) {
      packages += carrier[1]
    }
    return packages
  }, 0)
}

export default function fixFiles(files) {
  const result = []
  const ocurrences = {}

  files.forEach(file => {
    const isRepeated = ocurrences[file] >= 1
    result.push(file + (isRepeated ? `(${ocurrences[file]})` : ''))
    ocurrences[file] = ocurrences[file] ? ++ocurrences[file] : 1
  })

  return result
}

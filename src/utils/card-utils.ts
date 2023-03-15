export const duplicateArray = <T>(array: T[]): T[] => {
  return array.concat(array)
}

export const sortarray = <T>(array: T[]): T[] => {
  return array.sort((a, b) => {
    return a.id - b.id
  })
} 
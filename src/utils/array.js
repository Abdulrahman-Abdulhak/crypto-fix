export const getLast = (arr = []) => {
  if (arr.length <= 0) return undefined

  return arr[arr.length - 1]
}

export const capitalizeString = (str) => str.toUpperCase()

const capitalizeString2 = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export { capitalizeString2 }

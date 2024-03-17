export function useFallbackName(fullName: FullName) {
  const firstName =
    typeof fullName === 'string' ? fullName.split(' ')[0] : fullName.firstName
  const lastName =
    typeof fullName === 'string' ? fullName.split(' ')[1] : fullName.lastName

  const firstLetterOfName = (value: string) => {
    return value.slice(0, 1)
  }

  return `${firstLetterOfName(firstName)}${firstLetterOfName(lastName)}`
}

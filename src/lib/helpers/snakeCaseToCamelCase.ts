const SNAKE_CASE_SEPARATOR = '_'

const snakeCaseStringToCameCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, group => group.toUpperCase().replace(SNAKE_CASE_SEPARATOR, ''))

// prettier-ignore
export const snakeCaseToCamelCase = <
  // Record<string, unknown> doesn't work correctly.
  Value extends string | Record<string, any>,
  Result = Value
>(value: Value): Result => {
  if (typeof value === 'string') {
    return snakeCaseStringToCameCase(value) as Result
  }

  const camelCaseEntries = Object.entries(value).map(([key, value]) => [
    snakeCaseStringToCameCase(key),
    value
  ])

  return Object.fromEntries(camelCaseEntries) as Result
}

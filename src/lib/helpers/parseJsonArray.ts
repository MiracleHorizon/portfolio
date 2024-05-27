export const parseJsonArray = (json: string): string[] => {
  try {
    return JSON.parse(json)
  } catch (err) {
    console.log(err)

    return []
  }
}

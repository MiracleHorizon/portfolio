export const parseProjectStack = (json: string): string[] => {
  try {
    return JSON.parse(json)
  } catch {
    return []
  }
}

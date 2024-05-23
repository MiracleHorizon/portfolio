const DEFAULT_CONTENT = ''

export async function getReadmeContent(readmePath: string | null): Promise<string> {
  // TODO: Link validation
  if (!readmePath || readmePath === '') {
    return DEFAULT_CONTENT
  }

  try {
    const response = await fetch(readmePath)

    if (!response.ok) {
      return DEFAULT_CONTENT
    }

    return response.text()
  } catch (err) {
    console.log(err)

    return DEFAULT_CONTENT
  }
}

export interface IStoredProject {
  id: number
  title: string
  description: string
  link_demo: string
  link_repo: string
  link_readme_md: string | null
  stack: string // Expected to be an array in JSON
  cover: string | null
}

export interface IProject {
  id: number
  title: string
  description: string
  linkDemo: string
  linkRepo: string
  linkReadme: string | null
  stack: string[]
  cover: string | null
}

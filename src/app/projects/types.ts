export interface IStoredProject {
  id: number
  title: string
  description: string
  link_repo: string
  link_demo: string
  link_readme_md: string | null
  stack: string | null // Expected to be an array in JSON or null
  cover: string | null
}

export interface IProject
  extends Omit<IStoredProject, 'link_repo' | 'link_demo' | 'link_readme_md'> {
  linkDemo: string
  linkRepo: string
  linkReadme: string | null
}

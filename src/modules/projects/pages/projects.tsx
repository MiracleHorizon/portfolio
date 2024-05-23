import type { Metadata } from 'next'

import { Projects } from '../components/projects'
import { getAllProjects } from '../api/get-all-projects'

export const metadata: Metadata = {
  title: 'Projects'
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return <Projects storedProjects={projects} />
}

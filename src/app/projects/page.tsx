import type { Metadata } from 'next'

import { Projects } from './components/Projects'
import { getAllProjects } from './api/get-all-projects'

export const metadata: Metadata = {
  title: 'Projects'
}

const ProjectsPage = async () => {
  const projects = await getAllProjects()

  return <Projects storedProjects={projects} />
}

export default ProjectsPage

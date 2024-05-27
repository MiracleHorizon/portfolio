import type { Metadata } from 'next'

import { Projects } from './components/Projects'
import { fetchManyProjects } from './api/fetchManyProjects'

export const metadata: Metadata = {
  title: 'Projects'
}

const ProjectsPage = async () => {
  const projects = await fetchManyProjects()

  return <Projects storedProjects={projects} />
}

export default ProjectsPage

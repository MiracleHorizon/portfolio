import { Project } from './components/Project'
import { fetchProjectByTitle } from './api/fetchProjectByTitle'
import { fetchProjectReadme } from './api/fetchProjectReadme'
import { storedProjectToProject } from '../helpers/storedProjectToProject'

interface Props {
  params: {
    slug: string // Project name
  }
}

const ProjectPage = async ({ params }: Props) => {
  const project = await fetchProjectByTitle(params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  const readmeContent = await fetchProjectReadme(project.link_readme_md)

  return <Project project={storedProjectToProject(project)} mdxContent={readmeContent} />
}

export default ProjectPage

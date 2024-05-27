import { Project } from './components/Project'
import { getProject } from './api/get-project'
import { getReadmeContent } from './api/get-readme-content'
import { snakeCaseToCamelCase } from '@helpers/snakeCaseToCamelCase'

interface Props {
  params: {
    slug: string // Project name
  }
}

const ProjectPage = async ({ params }: Props) => {
  const project = await getProject(params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  const readmeContent = await getReadmeContent(project.link_readme_md)

  return <Project project={snakeCaseToCamelCase(project)} mdxContent={readmeContent} />
}

export default ProjectPage

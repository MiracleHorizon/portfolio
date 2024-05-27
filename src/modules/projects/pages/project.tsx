import { Project } from '../components/Project'
import { getProject } from '../api/get-project'

interface Props {
  params: {
    slug: string
  }
}

const ProjectPage = async ({ params }: Props) => {
  const project = await getProject(+params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return <Project {...project} />
}

export default ProjectPage

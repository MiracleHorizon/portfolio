import { Project } from '../components/project'
import { getProject } from '../api/get-project'

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(+params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return <Project {...project} />
}

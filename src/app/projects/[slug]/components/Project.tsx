import { ProjectReferences } from './ProjectReferences'
import { Separator } from '@ui/Separator'
import { MDXComponent } from '@components/MdxComponent'
import { TechStackList } from '@components/TechStackList'
import { DEFAULT_BRANCH, GITHUB_NICKNAME } from '@site/github'
import { createRepoRawUrl } from '@helpers/github/createRepoRawUrl'
import type { IProject } from '@app/projects/types'

interface Props {
  project: IProject
  mdxContent: string
}

export const Project = ({
  project: { title, description, stack, linkRepo, linkDemo },
  mdxContent
}: Props) => (
  <div className='flex flex-col'>
    <article>
      <h2 className='mb-1.5 text-2xl font-medium'>{title}</h2>
      <p className='text-neutral-500 dark:text-neutral-400'>{description}</p>
    </article>

    <Separator className='my-5' />

    <section className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
      {stack.length > 0 && (
        <>
          <div className='flex flex-col lg:max-w-[50%] '>
            <span className='text-neutral-600 dark:text-neutral-300'>Technologies used:</span>
            <TechStackList stack={stack} className='mt-2.5 lg:overflow-x-auto' />
          </div>
        </>
      )}

      <ProjectReferences linkDemo={linkDemo} linkRepo={linkRepo} />
    </section>

    <MDXComponent
      repoUrl={linkRepo}
      repoRawUrl={createRepoRawUrl({
        owner: GITHUB_NICKNAME,
        repository: title,
        branch: DEFAULT_BRANCH
      })}
    >
      {mdxContent}
    </MDXComponent>
  </div>
)

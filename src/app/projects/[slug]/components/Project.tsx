import { Separator } from '@ui/Separator'
import { MDXComponent } from '@components/mdx'
import { TechStackList } from '@components/TechStackList'
import { DEFAULT_BRANCH, GITHUB_NICKNAME } from '@site/github'
import { parseJsonArray } from '@helpers/parseJsonArray'
import { createRepoRawUrl } from '@helpers/github/createRepoRawUrl'
import type { IProject } from '@app/projects/types'

interface Props {
  project: IProject
  mdxContent: string
}

export const Project = ({
  project: { title, description, stack, linkRepo },
  mdxContent
}: Props) => {
  const parsedStack = stack ? parseJsonArray(stack) : []

  return (
    <div className='flex flex-col'>
      <article>
        <h2 className='mb-1.5 text-2xl font-medium'>{title}</h2>
        <p className='text-neutral-500 dark:text-neutral-400'>{description}</p>
      </article>

      <Separator className='my-5' />

      {parsedStack.length > 0 && (
        <>
          <div className='flex flex-col'>
            <span className='text-neutral-600 dark:text-neutral-300'>Technologies used:</span>
            <TechStackList stack={parsedStack} className='mt-2.5' />
          </div>

          <Separator className='my-5' />
        </>
      )}

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
}

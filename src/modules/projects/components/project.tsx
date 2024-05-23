import { Separator } from '@ui/separator'
import { MDXComponent } from '@components/mdx'
import { TechStackList } from '@components/tech-stack-list'
import { PROFILE_NICKNAME } from '@site/profile'
import { parseProjectStack } from '@lib/helpers/parseProjectStack'
import { getReadmeContent } from '../api/get-readme-content'
import type { IStoredProject } from '../types'

export async function Project({ title, description, stack, link_readme_md }: IStoredProject) {
  const readmeContent = await getReadmeContent(link_readme_md)
  const parsedStack = parseProjectStack(stack)

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
        repoRawUrl={`https://raw.githubusercontent.com/${PROFILE_NICKNAME}/${title}/main`}
      >
        {readmeContent}
      </MDXComponent>
    </div>
  )
}

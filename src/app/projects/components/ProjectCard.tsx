import Link from 'next/link'

import { TechStackList } from '@components/TechStackList'
import { Card, CardContent, CardDescription, CardTitle } from '@ui/Card'
import { PATH_PROJECTS } from '@site/paths'
import type { IProject } from '@app/projects/types'

export const ProjectCard = ({ title, cover, stack, description }: IProject) => (
  <Link href={`${PATH_PROJECTS}/${title}`}>
    <Card className='group relative w-full cursor-pointer border border-neutral-200 shadow-none dark:border-neutral-800'>
      <div className='h-48 w-full rounded-t-xl'>
        {cover ? (
          <img src={cover} alt={title} className='h-full w-full object-cover object-left' />
        ) : (
          <div className='h-full w-full rounded-b-xl bg-neutral-200 dark:bg-neutral-900' />
        )}
      </div>

      <CardContent className='flex h-[150px] w-full flex-col rounded-b-xl px-5 py-4'>
        <CardTitle className='group-hover:gradient-highlight mb-2 text-lg font-medium'>
          {title}
        </CardTitle>

        <CardDescription className='line-clamp-2 text-[14px] text-neutral-400'>
          {description}
        </CardDescription>

        <TechStackList
          stack={stack.slice(0, 8)}
          className='mt-auto gap-x-2 [&_svg]:h-[20px] [&_svg]:w-[20px]'
        />
      </CardContent>
    </Card>
  </Link>
)

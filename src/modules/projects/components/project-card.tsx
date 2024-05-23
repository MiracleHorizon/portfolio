import { type FC } from 'react'
import Link from 'next/link'

import { Card, CardContent, CardDescription, CardTitle } from '@ui/card'
import { PATH_PROJECTS } from '@site/paths'
import type { IProject } from '../types'

export const ProjectCard: FC<IProject> = ({ id, title, description }) => (
  <Link href={`${PATH_PROJECTS}/${id}`}>
    <Card className='group relative cursor-pointer border border-neutral-200 dark:border-neutral-800'>
      {/*{cover && (*/}
      {/*  <img*/}
      {/*    src={cover}*/}
      {/*    alt={title}*/}
      {/*    className='h-48 w-full rounded-t-xl object-cover object-left'*/}
      {/*  />*/}
      {/*)}*/}

      <CardContent className='flex h-[120px] flex-col rounded-b-xl px-5 py-4'>
        <CardTitle className='group-hover:gradient-highlight mb-2 text-lg font-medium'>
          {title}
        </CardTitle>

        <CardDescription className='line-clamp-2 text-[14px] text-neutral-400'>
          {description}
        </CardDescription>
      </CardContent>

      {/*<div className='space-y-2 p-5'>*/}
      {/*  <div className='flex justify-between'>*/}
      {/*    <div className='cursor-pointer  text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:group-hover:text-teal-400 lg:group-hover:text-teal-600'>*/}
      {/*      {title}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <p className='text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400'>*/}
      {/*    {description}*/}
      {/*  </p>*/}
      {/*<div className='flex flex-wrap items-center gap-3 pt-2'>*/}
      {/*  {stacksArray?.map((stack: string, index: number) => (*/}
      {/*    <div key={index}>*/}
      {/*      <Tooltip title={stack}>{STACKS[stack]}</Tooltip>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      {/*</div>*/}
    </Card>
  </Link>
)

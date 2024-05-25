'use client'

import type { FC, HTMLAttributes } from 'react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@ui/tooltip'
import { mergeCn } from '@lib/tailwind-merge'
import { skillsList } from '@common/skills-list'

interface Props extends HTMLAttributes<HTMLUListElement> {
  stack: string[]
}

export const TechStackList: FC<Props> = ({ stack, className, ...props }) => (
  <ul className={mergeCn('flex items-center overflow-hidden gap-x-3', className)} {...props}>
    {stack.map(technology => {
      const skillIcon = skillsList[technology as keyof typeof skillsList]

      if (!skillIcon) {
        return null
      }

      return (
        <TooltipProvider key={technology}>
          <Tooltip>
            <TooltipTrigger className='cursor-default'>
              <li>{skillIcon}</li>
            </TooltipTrigger>

            <TooltipContent>
              <p>{technology}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    })}
  </ul>
)

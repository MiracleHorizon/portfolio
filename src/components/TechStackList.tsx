'use client'

import type { HTMLAttributes } from 'react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@ui/Tooltip'
import { mergeCn } from '@lib/tailwind-merge'
import { skillsList } from '@common/skills-list'

interface Props extends HTMLAttributes<HTMLUListElement> {
  stack: string[]
}

export const TechStackList = ({ stack, className, ...props }: Props) => (
  <ul className={mergeCn('flex items-center gap-x-3 overflow-hidden', className)} {...props}>
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

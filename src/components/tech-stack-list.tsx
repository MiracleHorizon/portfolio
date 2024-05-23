'use client'

import type { FC, HTMLAttributes } from 'react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@ui/tooltip'
import { mergeCn } from '@lib/tailwind-merge'
import { skillsList } from '@common/skills-list'

export const TechStackList: FC<Props> = ({ stack, className, ...props }) => (
  <ul className={mergeCn('flex items-center gap-x-3', className)} {...props}>
    {stack.map(technology => {
      const skillIcon = skillsList[technology as keyof typeof skillsList]

      if (!skillIcon) {
        return null
      }

      return (
        <TooltipProvider key={technology}>
          <Tooltip>
            <TooltipTrigger>
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

interface Props extends HTMLAttributes<HTMLUListElement> {
  stack: string[]
}

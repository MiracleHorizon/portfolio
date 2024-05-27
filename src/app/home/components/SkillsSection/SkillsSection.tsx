'use client'

import { type ReactNode, useEffect, useState } from 'react'

import { SkillTag } from './SkillTag'
import { InfiniteLoopSlider } from '@components/InfiniteLoopSlider'
import { skillsList } from '@common/skills-list'

export const SkillsSection = () => {
  const [shuffledSkills, setShuffledSkills] = useState<[string, ReactNode][]>([])

  useEffect(() => {
    const shuffledArray = Object.entries(skillsList).sort(() => Math.random() - 0.5)
    setShuffledSkills(shuffledArray)
  }, [])

  const sliders = Array.from(
    {
      length: 3
    },
    (_, index) => {
      const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5)

      return (
        <InfiniteLoopSlider key={index} isReverse={index === 1}>
          {sliderSkills.map(([title, icon]) => (
            <SkillTag key={title} title={title} icon={icon} />
          ))}
        </InfiniteLoopSlider>
      )
    }
  )

  return (
    <div className='space-y-6 [&_svg]:h-[20px] [&_svg]:w-[20px]'>
      <h4 className='text-xl font-semibold text-neutral-700 dark:text-neutral-200'>
        Tools That I Have Used
      </h4>

      <div className='flex w-full'>
        <div className='relative flex w-full flex-col justify-start gap-y-4 overflow-hidden'>
          {sliders}

          <div className='fade hidden dark:flex' />
        </div>
      </div>
    </div>
  )
}

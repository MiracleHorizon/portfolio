'use client'

import { memo, type ReactNode, useEffect, useState } from 'react'

import { InfiniteLoopSlider } from '@components/infinite-loop-slider'
import { skillsList } from '@common/skills-list'

const SkillTag = memo(({ icon, title }: { icon?: ReactNode; title: string }) => (
  <div className='mr-3 flex w-max items-center gap-2 rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50'>
    {icon}
    <span>{title}</span>
  </div>
))
SkillTag.displayName = 'SkillTag'

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
          {sliderSkills.map(([title, icon], index) => (
            <SkillTag key={index} title={title} icon={icon} />
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

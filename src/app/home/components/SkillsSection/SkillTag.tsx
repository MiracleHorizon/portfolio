import { memo, type ReactNode } from 'react'

interface Props {
  title: string
  icon?: ReactNode
}

export const SkillTag = memo(({ icon, title }: Props) => (
  <div className='mr-3 flex w-max items-center gap-2 rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50'>
    {icon}
    <span>{title}</span>
  </div>
))

SkillTag.displayName = 'SkillTag'

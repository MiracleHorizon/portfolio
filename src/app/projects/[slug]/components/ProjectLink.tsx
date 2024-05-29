import Link from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  url: string
  text: string
  icon?: ReactNode
}

export const ProjectLink = ({ url, text, icon }: Props) => (
  <Link href={url} target='_blank' className='group'>
    <div className='flex items-center gap-2 font-medium'>
      <span className='dark:text-gray-300 [&_svg]:h-[20px] [&_svg]:w-[20px]'>{icon}</span>

      <span className='group-hover:gradient-highlight text-sm'>{text}</span>
    </div>
  </Link>
)

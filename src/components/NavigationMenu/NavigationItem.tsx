import Link from 'next/link'
import { type ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowRightIcon } from 'lucide-react'

import { mergeCn } from '@lib/tailwind-merge'

interface NavigationItemProps {
  label: string
  href: string
  icon?: ReactNode
  className?: string
  children?: ReactNode
  hideIcon?: boolean
  onClick?: VoidFunction
}

export const NavigationItem = ({
  label,
  href,
  icon,
  onClick,
  className = '',
  children,
  hideIcon = false
}: NavigationItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const isExternalUrl = href.includes('http')
  const isHashLink = href === '#'
  const pathname = usePathname()
  const isActiveRoute = pathname === href

  const activeClassNames = mergeCn(
    'flex items-center font-medium text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 gap-2 py-2 pl-4 pr-2.5 rounded-lg group [&_svg]:dark:text-neutral-400',
    isActiveRoute
      ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-200'
      : 'hover:dark:lg:bg-neutral-800 hover:dark:!text-neutral-300 hover:lg:bg-neutral-200 hover:lg:rounded-lg lg:transition-all lg:duration-300'
  )

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const itemJSX = () => (
    <div
      className={mergeCn(activeClassNames, className)}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!hideIcon && (
        <div className='transition-all duration-300 group-hover:-rotate-[20deg]'>{icon}</div>
      )}
      <div className={mergeCn('ml-0.5 flex-grow', isActiveRoute && 'gradient-highlight')}>
        {label}
      </div>

      {children}

      {isActiveRoute && (
        <ArrowRightIcon width='16' height='16' className='animate-pulse text-gray-500' />
      )}

      {isExternalUrl && isHovered && (
        <ArrowRightIcon
          width='16'
          height='16'
          className='-rotate-45 text-gray-500 lg:transition-all lg:duration-300'
        />
      )}
    </div>
  )

  return isHashLink ? (
    <div className='cursor-pointer'>{itemJSX()}</div>
  ) : (
    <Link href={href} target={isExternalUrl ? '_blank' : ''} onClick={onClick}>
      {itemJSX()}
    </Link>
  )
}

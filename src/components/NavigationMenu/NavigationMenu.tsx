'use client'

import { HomeIcon, PresentationIcon, RocketIcon, UserIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

import { NavigationItem } from './NavigationItem'
import { PATH_ABOUT, PATH_CONTACT, PATH_HOME, PATH_PROJECTS } from '@site/paths'

const iconsSizes = {
  width: 20,
  height: 20
} as const

const navigationItems: ComponentPropsWithoutRef<typeof NavigationItem>[] = [
  {
    label: 'Home',
    href: PATH_HOME,
    icon: <HomeIcon {...iconsSizes} />
  },
  {
    label: 'Projects',
    href: PATH_PROJECTS,
    icon: <PresentationIcon {...iconsSizes} />
  },
  {
    label: 'About',
    href: PATH_ABOUT,
    icon: <UserIcon {...iconsSizes} />
  },
  {
    label: 'Contact',
    href: PATH_CONTACT,
    icon: <RocketIcon {...iconsSizes} />
  }
] as const

export const NavigationMenu = () => (
  <nav className='flex flex-col gap-1'>
    {navigationItems.map(item => (
      <NavigationItem key={item.href} {...item} />
    ))}
  </nav>
)

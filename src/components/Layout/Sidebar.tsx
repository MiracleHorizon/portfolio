'use client'

import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

import { NavigationMenu } from '@components/NavigationMenu'
import { ThemeSelect } from '@components/ThemeSelect'
import { Separator } from '@ui/Separator'

export const Sidebar = ({ className }: HTMLAttributes<HTMLElement>) => (
  <aside
    className={clsx(
      'sticky top-0 z-10 flex w-[230px] flex-shrink-0 flex-col space-y-5 transition-all duration-300',
      className
    )}
  >
    <NavigationMenu />

    <Separator />

    <ThemeSelect />
  </aside>
)

'use client'

import type { FC, HTMLAttributes } from 'react'
import { clsx } from 'clsx'

import { NavigationMenu } from '@components/navigation-menu'
import { ThemeSelect } from '@components/theme-select'
import { Separator } from '@ui/separator'

export const Sidebar: FC<Props> = ({ className }) => (
  <aside
    className={clsx(
      'sticky top-0 z-10 flex w-[230px] shrink-0 flex-col space-y-5 transition-all duration-300',
      className
    )}
  >
    <NavigationMenu />

    <Separator />

    <ThemeSelect />
  </aside>
)

type Props = HTMLAttributes<HTMLElement>

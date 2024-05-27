import type { PropsWithChildren } from 'react'

import { Sidebar } from './Sidebar'

export const Layout = ({ children }: PropsWithChildren) => (
  <div className='min-h-dvh w-screen'>
    <div className='h-2 w-full bg-gradient-to-r from-accent-start to-accent-end' />

    <div className='layout flex py-10'>
      <Sidebar className='mr-8 hidden lg:flex' />

      {children}
    </div>
  </div>
)

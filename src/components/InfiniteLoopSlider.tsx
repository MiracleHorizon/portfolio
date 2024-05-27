import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  isReverse?: boolean
}

export const InfiniteLoopSlider = ({ children, isReverse = false }: Props) => (
  <div
    className='flex w-fit animate-looping-tag'
    style={{
      animationDirection: isReverse ? 'reverse' : 'normal'
    }}
  >
    {children}
  </div>
)

import type { FC, ReactNode } from 'react'

export const InfiniteLoopSlider: FC<Props> = ({ children, isReverse = false }) => (
  <div
    className='flex w-fit animate-looping-tag'
    style={{
      animationDirection: isReverse ? 'reverse' : 'normal'
    }}
  >
    {children}
  </div>
)

interface Props {
  children: ReactNode
  isReverse?: boolean
}

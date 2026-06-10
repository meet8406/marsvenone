import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: ReactNode
  className?: string
  reverse?: boolean
}

/** Infinite horizontal marquee (CSS-driven, pauses on hover). */
export default function Marquee({ children, className, reverse }: MarqueeProps) {
  return (
    <div className={cn('group relative flex overflow-hidden', className)}>
      <div
        className={cn(
          'flex shrink-0 items-center gap-12 pr-12 animate-marquee group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]',
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          'flex shrink-0 items-center gap-12 pr-12 animate-marquee group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]',
        )}
      >
        {children}
      </div>
    </div>
  )
}

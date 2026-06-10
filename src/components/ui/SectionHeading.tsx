import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}

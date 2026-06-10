import { cn } from '@/lib/utils'

export default function Logo({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 shrink-0',
        className
      )}
    >
      {/* Logo Image */}
      <div
        className={cn(
          'overflow-hidden rounded-lg bg-white shadow-glow ring-1 ring-white/15',
          compact ? 'h-11 w-11' : 'h-14 w-14'
        )}
      >
        <img
          src="/logo1.png"
          alt="Marsven One Digital Marketing Agency"
          className="h-full w-full object-contain"
          loading="eager"
        />
      </div>

      {/* Company Name */}
      {!compact && (
        <div className="flex flex-col">
          <span className="text-white text-xl font-bold tracking-wide leading-none">
            MARSVEN ONE
          </span>

          <span className="text-xs text-slate-400 tracking-widest uppercase mt-1">
            Digital Marketing Agency
          </span>
        </div>
      )}
    </div>
  )
}
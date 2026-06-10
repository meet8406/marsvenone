import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
}

/**
 * Counts up to `value` when scrolled into view. Uses a spring for an organic
 * easing curve. Formats with the user's locale for thousands separators.
 */
export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 })

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix +
          latest.toLocaleString('en-IN', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) +
          suffix
      }
    })
  }, [spring, prefix, suffix, decimals])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

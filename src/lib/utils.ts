/**
 * Tiny classNames combiner — keeps JSX readable without pulling in a dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/** Smoothly scroll to a hash target accounting for the sticky navbar height. */
export function scrollToId(id: string, offset = 88): void {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

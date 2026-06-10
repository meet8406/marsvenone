import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  /** Breadcrumb current page label */
  crumb: string
}

/** Consistent inner-page header with breadcrumb and animated gradient backdrop. */
export default function PageHero({ eyebrow, title, subtitle, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="orb left-1/4 top-20 h-72 w-72 bg-brand-700/40 animate-float" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-30" />

      <div className="container-px">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-1.5 text-sm text-slate-400"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-brand-300">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{crumb}</span>
        </motion.nav>

        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="eyebrow"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}

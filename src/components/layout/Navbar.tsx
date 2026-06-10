import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '@/data/site'
import { cn } from '@/lib/utils'
import Logo from '@/components/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-px">
        <nav
          className={cn(
            'mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300',
            scrolled
              ? 'glass-strong shadow-glass'
              : 'border border-transparent bg-transparent',
          )}
        >
          <Link to="/" aria-label="Marsven One home">
            <Logo />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-white' : 'text-slate-300 hover:text-white',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/contact" className="btn-primary group text-sm">
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="container-px lg:hidden"
          >
            <div className="glass-strong mt-2 rounded-2xl p-4 shadow-glass">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary mt-3 w-full">
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

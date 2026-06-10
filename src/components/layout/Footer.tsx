import { Link } from 'react-router-dom'
import { useState, type FormEvent } from 'react'
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
} from 'lucide-react'
import { COMPANY, NAV_LINKS, SERVICES } from '@/data/site'
import Logo from '@/components/Logo'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function subscribe(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
    setTimeout(() => setDone(false), 4000)
  }

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-ink-900/60">
      <div className="orb -left-20 top-0 h-72 w-72 bg-brand-700/40" />

      <div className="container-px relative py-16">
        {/* Newsletter */}
        <div className="glass mb-14 grid gap-6 rounded-3xl p-8 md:grid-cols-2 md:items-center md:p-10">
          <div>
            <h3 className="text-2xl font-bold">Get growth tactics in your inbox</h3>
            <p className="mt-2 text-slate-400">
              Join 4,000+ marketers. One actionable email a week. No fluff, unsubscribe anytime.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-400/30"
            />
            <button type="submit" className="btn-primary shrink-0">
              {done ? (
                <>
                  Subscribed <Check className="h-4 w-4" />
                </>
              ) : (
                <>
                  Subscribe <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A performance-driven digital marketing agency helping ambitious brands grow with
              measurable, ROI-focused campaigns.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Linkedin, href: COMPANY.socials.linkedin, label: 'LinkedIn' },
                { Icon: Instagram, href: COMPANY.socials.instagram, label: 'Instagram' },
                { Icon: Twitter, href: COMPANY.socials.twitter, label: 'Twitter' },
                { Icon: Youtube, href: COMPANY.socials.youtube, label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slate-400 transition-colors hover:text-brand-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="text-slate-400 transition-colors hover:text-brand-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href={COMPANY.phoneHref} className="flex items-center gap-3 hover:text-brand-300">
                  <Phone className="h-4 w-4 text-brand-400" /> {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 hover:text-brand-300"
                >
                  <Mail className="h-4 w-4 text-brand-400" /> {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> {COMPANY.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {2026} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

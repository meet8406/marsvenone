import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import type { Service } from '@/data/site'
import TiltCard from './TiltCard'

/** Interactive 3D-tilt service card used on Home and Services pages. */
export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <TiltCard className="group h-full" intensity={8}>
      <div className="gradient-border glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:bg-white/[0.07]">
        {/* hover glow */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/30" />

        <div className="flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/20 text-brand-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6" />
          </span>
          <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300" />
        </div>

        <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.blurb}</p>

        <ul className="mt-4 space-y-2">
          {service.points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
              <Check className="h-4 w-4 shrink-0 text-brand-400" />
              {p}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
        >
          Learn more
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </TiltCard>
  )
}

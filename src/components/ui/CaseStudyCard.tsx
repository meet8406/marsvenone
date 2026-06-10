import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { CaseStudy } from '@/data/site'
import { cn } from '@/lib/utils'
import TiltCard from './TiltCard'

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <TiltCard className="group h-full" intensity={6}>
      <div className="glass relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:bg-white/[0.06]">
        {/* Visual header with accent gradient + faux chart */}
        <div className={cn('relative h-40 overflow-hidden bg-gradient-to-br', study.accent)}>
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 flex h-24 items-end gap-1.5 px-5 pb-0">
            {[35, 50, 42, 65, 58, 80, 72, 95].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t bg-white/70 transition-all duration-500 group-hover:bg-white"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <span className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {study.industry}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm font-semibold text-brand-300">{study.client}</p>
          <h3 className="mt-1.5 text-lg font-bold leading-snug text-white">{study.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{study.summary}</p>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-lg font-bold text-gradient">{m.value}</p>
                <p className="mt-0.5 text-[0.7rem] text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/case-studies"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-brand-300"
          >
            View plan
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </TiltCard>
  )
}

import { CheckCircle2, ClipboardCheck, Sparkles } from 'lucide-react'
import { AUDIT_AREAS } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function AuditSnapshot() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-px grid items-center gap-10 lg:grid-cols-2">
        <SectionHeading
          align="left"
          eyebrow="Free First-Step Audit"
          title={
            <>
              Know what to fix before you <span className="text-gradient">spend more</span>
            </>
          }
          subtitle="For a new company, the smartest marketing move is often fixing the basics first. We review the key areas that decide whether traffic turns into enquiries."
        />

        <Reveal direction="left">
          <div className="gradient-border glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="absolute right-6 top-6 text-brand-400/20">
              <ClipboardCheck className="h-20 w-20" />
            </div>
            <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-white/10">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-2xl font-bold text-white">What we check</h3>
            <div className="mt-6 space-y-4">
              {AUDIT_AREAS.map((area, i) => (
                <Reveal key={area} delay={i * 0.05} direction="left">
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <p className="text-sm leading-relaxed text-slate-300">{area}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { ArrowRight, CheckCircle2, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { STARTER_PLANS } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function StarterPlans() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Where to Start"
          title={
            <>
              Choose the right first step for your <span className="text-gradient">growth stage</span>
            </>
          }
          subtitle="A startup website should make the next move obvious. These starter paths help founders begin with the work that matters most right now."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STARTER_PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={(i % 3) * 0.08}>
              <div className="group card flex h-full flex-col hover:-translate-y-1 hover:border-brand-400/30">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
                    {plan.timeline}
                  </span>
                  <Clock3 className="h-5 w-5 text-brand-300" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm font-medium text-brand-200">{plan.bestFor}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-brand-300"
                >
                  Discuss this path
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

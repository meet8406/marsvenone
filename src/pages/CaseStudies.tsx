import PageTransition from '@/components/PageTransition'
import PageHero from '@/components/PageHero'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import Reveal from '@/components/ui/Reveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import CtaBand from '@/components/CtaBand'
import { CASE_STUDIES, STATS } from '@/data/site'

export default function CaseStudies() {
  return (
    <PageTransition>
      <PageHero
        crumb="Case Studies"
        eyebrow="Starter Plans"
        title={
          <>
            Growth plans with <span className="text-gradient">clear next steps</span>
          </>
        }
        subtitle="Explore the kind of focused launch plans we build for different industries: measurable goals, clean tracking and practical channel choices."
      />

      {/* Aggregate impact band */}
      <section className="pb-4">
        <div className="container-px">
          <div className="glass grid grid-cols-2 gap-8 rounded-3xl px-6 py-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <p className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
                  <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-px">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study, i) => (
              <Reveal key={study.slug} delay={(i % 3) * 0.07}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageTransition>
  )
}

import { STATS } from '@/data/site'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Reveal from '@/components/ui/Reveal'

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="container-px">
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10">
          <div className="orb -right-10 -top-10 h-56 w-56 bg-brand-600/40" />
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </dd>
                <p className="mt-2 text-sm font-medium text-slate-400 sm:text-base">{stat.label}</p>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

import {
  BarChart4,
  Target,
  Eye,
  Headphones,
  BadgeCheck,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { WHY_US } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

const icons: LucideIcon[] = [BarChart4, Target, Eye, Headphones, BadgeCheck, TrendingUp]

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="orb left-1/2 top-20 h-72 w-72 -translate-x-1/2 bg-brand-700/30" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Why Marsven One"
          title={
            <>
              The growth partner built for <span className="text-gradient">early momentum</span>
            </>
          }
          subtitle="We keep the work transparent, practical and measurable, so every week gives you a clearer view of what to improve next."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="group card h-full hover:-translate-y-1 hover:border-brand-400/30">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-brand-500/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

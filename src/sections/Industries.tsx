import {
  HeartPulse,
  Building2,
  GraduationCap,
  Cloud,
  Landmark,
  ShoppingBag,
  Factory,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'
import { INDUSTRIES } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

const iconMap: Record<string, LucideIcon> = {
  Healthcare: HeartPulse,
  'Real Estate': Building2,
  Education: GraduationCap,
  SaaS: Cloud,
  Finance: Landmark,
  'E-Commerce': ShoppingBag,
  Manufacturing: Factory,
  Hospitality: UtensilsCrossed,
}

export default function Industries() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Deep expertise across <span className="text-gradient">8+ industries</span>
            </>
          }
          subtitle="We speak your customers' language. Our playbooks are tailored to the buying behaviour of each sector."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((name, i) => {
            const Icon = iconMap[name] ?? Cloud
            return (
              <Reveal key={name} delay={(i % 4) * 0.07}>
                <div className="group card flex flex-col items-center gap-3 py-8 text-center hover:-translate-y-1 hover:border-brand-400/30">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-brand-700/15 text-brand-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </span>
                  <p className="font-semibold text-white">{name}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

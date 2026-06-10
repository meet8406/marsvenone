import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import Reveal from '@/components/ui/Reveal'

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Full-funnel marketing services, <span className="text-gradient">one growth partner</span>
            </>
          }
          subtitle="From first impression to follow-up, we set up the channels a young company needs with clean tracking, focused creative and practical execution."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.1}>
          <Link to="/services" className="btn-secondary group">
            Explore all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

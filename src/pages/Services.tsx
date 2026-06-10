import PageTransition from '@/components/PageTransition'
import PageHero from '@/components/PageHero'
import ServiceCard from '@/components/ui/ServiceCard'
import Reveal from '@/components/ui/Reveal'
import Process from '@/sections/Process'
import CtaBand from '@/components/CtaBand'
import { SERVICES } from '@/data/site'

export default function Services() {
  return (
    <PageTransition>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title={
          <>
            Every channel you need to <span className="text-gradient">grow profitably</span>
          </>
        }
        subtitle="Nine practical services, one accountable team. We build the foundation first, then help you test the channels that fit your goals, market and budget."
      />

      <section className="py-12 lg:py-16">
        <div className="container-px">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.07}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CtaBand />
    </PageTransition>
  )
}

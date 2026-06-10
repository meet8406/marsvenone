import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CASE_STUDIES } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import Reveal from '@/components/ui/Reveal'

export default function CaseStudiesPreview() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Case Studies"
          title={
            <>
              Starter plans for <span className="text-gradient">real business goals.</span>
            </>
          }
          subtitle="As a startup, we show how we think before we claim huge results: clear goals, channel fit, practical timelines and measurable next actions."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 3) * 0.08}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.1}>
          <Link to="/case-studies" className="btn-secondary group">
            View all starter plans
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

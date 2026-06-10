import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { COMPANY } from '@/data/site'
import Reveal from '@/components/ui/Reveal'

/** Reusable bottom-of-page conversion band. */
export default function CtaBand() {
  return (
    <section className="relative py-16">
      <div className="container-px">
        <Reveal>
          <div className="gradient-border glass-strong relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-brand-600/40" />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Ready to make your marketing{' '}
              <span className="text-gradient">clearer and more measurable?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
              Book a free, no-obligation strategy call and get a practical startup growth roadmap
              for your business.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary group">
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={COMPANY.calendly} target="_blank" rel="noreferrer" className="btn-secondary">
                <Calendar className="h-4 w-4 text-brand-300" />
                Schedule a Call
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

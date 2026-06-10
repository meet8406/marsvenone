import { Calendar, MessageCircle, PhoneCall, CheckCircle2 } from 'lucide-react'
import { COMPANY } from '@/data/site'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/ui/Reveal'

const perks = [
  'Free 30-minute strategy session',
  'No-obligation marketing audit',
  'Practical startup growth roadmap',
  'Founder-led strategy conversation',
]

export default function CtaContact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="orb left-10 top-10 h-80 w-80 bg-brand-700/40" />
      <div className="container-px relative">
        <div className="glass-strong overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-2">
            {/* Left: pitch + Calendly placeholder */}
            <div className="relative p-8 sm:p-12">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-600/20 to-transparent" />
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                Let's Grow Together
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Book your free consultation &amp; <span className="text-gradient">marketing audit</span>
              </h2>
              <p className="mt-4 text-slate-300">
                See what to fix first across your website, tracking and campaigns. Zero pressure,
                just useful next steps.
              </p>

              <ul className="mt-8 space-y-3">
                {perks.map((perk) => (
                  <Reveal key={perk} direction="left">
                    <li className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-400" />
                      {perk}
                    </li>
                  </Reveal>
                ))}
              </ul>

              {/* Calendly booking placeholder */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={COMPANY.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                  <Calendar className="h-4 w-4" />
                  Schedule on Calendly
                </a>
                <a href={COMPANY.phoneHref} className="btn-secondary">
                  <PhoneCall className="h-4 w-4 text-brand-300" />
                  {COMPANY.phone}
                </a>
              </div>

              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-300"
              >
                <MessageCircle className="h-4 w-4" />
                Prefer WhatsApp? Message us instantly
              </a>
            </div>

            {/* Right: form */}
            <div className="bg-ink-900/40 p-6 sm:p-10">
              <ContactForm className="!bg-transparent !p-0 !backdrop-blur-none !border-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

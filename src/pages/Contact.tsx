import { Mail, Phone, MapPin, Clock, Calendar, MessageCircle } from 'lucide-react'
import PageTransition from '@/components/PageTransition'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/ui/Reveal'
import { COMPANY } from '@/data/site'

const contactCards = [
  { icon: Phone, label: 'Call us', value: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: 'Email us', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat instantly',
    href: `https://wa.me/${COMPANY.whatsapp}`,
  },
]

export default function Contact() {
  return (
    <PageTransition>
      <PageHero
        crumb="Contact"
        eyebrow="Get in Touch"
        title={
          <>
            Let's build your <span className="text-gradient">growth foundation</span>
          </>
        }
        subtitle="Tell us about your goals and we'll send back a focused first-step audit with practical recommendations."
      />

      <section className="py-8 lg:py-12">
        <div className="container-px grid gap-10 lg:grid-cols-5">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-bold">Talk to a strategist</h2>
              <p className="mt-3 text-slate-400">
                Prefer to talk first? Reach us on your channel of choice — we usually reply within a
                couple of hours during business days.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {contactCards.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.08}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:-translate-y-0.5 hover:border-brand-400/30"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-white/10">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-slate-500">
                        {c.label}
                      </span>
                      <span className="block font-semibold text-white">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-6 space-y-3 rounded-2xl glass p-5 text-sm text-slate-400">
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-brand-400" /> {COMPANY.address}
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-brand-400" /> Mon–Sat · 10:00 AM – 7:00 PM IST
                </p>
              </div>
            </Reveal>

            {/* Calendly placeholder */}
            <Reveal delay={0.25}>
              <a
                href={COMPANY.calendly}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-between rounded-2xl border border-dashed border-brand-400/40 bg-brand-500/5 p-5 transition-colors hover:bg-brand-500/10"
              >
                <span className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-brand-300" />
                  <span className="font-semibold text-white">Book directly on Calendly</span>
                </span>
                <span className="text-sm text-brand-300">Open →</span>
              </a>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12">
        <div className="container-px">
          <Reveal>
            <div className="relative h-72 overflow-hidden rounded-3xl glass">
              <div className="absolute inset-0 bg-dots opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-700/20 to-transparent" />
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <MapPin className="mx-auto h-10 w-10 text-brand-400" />
                  <p className="mt-3 font-semibold text-white">{COMPANY.address}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Embed your Google Maps location here
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

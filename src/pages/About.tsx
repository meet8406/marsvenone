import { Target, Eye, Rocket, Heart } from 'lucide-react'
import PageTransition from '@/components/PageTransition'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import TiltCard from '@/components/ui/TiltCard'
import WhyChooseUs from '@/sections/WhyChooseUs'
import CtaBand from '@/components/CtaBand'
import { TEAM, STATS } from '@/data/site'

const values = [
  { icon: Target, title: 'Useful Outcomes', desc: 'We focus on qualified leads, conversion quality and practical business progress.' },
  { icon: Heart, title: 'Radical Transparency', desc: 'Live dashboards and honest conversations. You always see the full picture.' },
  { icon: Rocket, title: 'Move Fast, Test Always', desc: 'We ship quickly, learn from data and double down on what works.' },
  { icon: Eye, title: 'Partners, Not Vendors', desc: 'Your goals shape the roadmap. We keep the work collaborative from the first call.' },
]

export default function About() {
  return (
    <PageTransition>
      <PageHero
        crumb="About"
        eyebrow="About Marsven One"
        title={
          <>
            We exist to make marketing <span className="text-gradient">accountable</span>
          </>
        }
        subtitle="A young, focused team of strategists, creatives and engineers united by one belief: marketing should be clear, measurable and honest from day one."
      />

      {/* Mission & Vision */}
      <section className="py-12 lg:py-16">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Reveal>
            <TiltCard intensity={5} className="group h-full">
              <div className="glass relative h-full overflow-hidden rounded-3xl p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-white/10">
                  <Target className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-2xl font-bold">Our Mission</h2>
                <p className="mt-3 leading-relaxed text-slate-400">
                  To help ambitious startups build a clean marketing foundation through sharp
                  positioning, careful tracking, useful creative and steady optimization.
                </p>
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard intensity={5} className="group h-full">
              <div className="glass relative h-full overflow-hidden rounded-3xl p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-white/10">
                  <Eye className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-2xl font-bold">Our Vision</h2>
                <p className="mt-3 leading-relaxed text-slate-400">
                  To become a trusted performance partner for early-stage and growing brands by
                  doing thoughtful work, communicating clearly and improving every week.
                </p>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* Company story */}
      <section className="py-12 lg:py-16">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  Built from day one with <span className="text-gradient">clarity and care</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-slate-400">
              <p>
                Marsven One started with a simple frustration: many businesses are asked to spend
                before the basics are clear. Tracking is messy, landing pages leak attention and
                campaign decisions are often made on guesswork.
              </p>
              <p>
                We are building the opposite: a founder-led marketing studio that starts with
                strategy, fixes the foundation and then runs measured experiments across SEO, paid
                media, social, email and web.
              </p>
              <p>
                We are at the beginning of the journey, so our promise is simple: honest guidance,
                tidy execution and a weekly rhythm that keeps your next move clear.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-6 text-center">
                  <p className="font-display text-3xl font-extrabold text-gradient">
                    <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-16">
        <div className="container-px">
          <SectionHeading eyebrow="What We Stand For" title="Our core values" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.08}>
                <div className="group card h-full hover:-translate-y-1 hover:border-brand-400/30">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-white/10">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 lg:py-16">
        <div className="container-px">
          <SectionHeading
            eyebrow="Meet the Team"
            title={
              <>
                The people behind your <span className="text-gradient">growth</span>
              </>
            }
            subtitle="Hands-on specialists building the systems behind each strategy, campaign and page."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 6) * 0.06}>
                <div className="group card flex flex-col items-center text-center hover:-translate-y-1 hover:border-brand-400/30">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 font-display text-xl font-bold text-white shadow-glow">
                    {member.initials}
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-white">{member.name}</h3>
                  <p className="mt-1 text-xs text-slate-400">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CtaBand />
    </PageTransition>
  )
}

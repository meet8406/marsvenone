import { motion } from 'framer-motion'
import { PROCESS } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function Process() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A proven 5-step <span className="text-gradient">growth process</span>
            </>
          }
          subtitle="No black boxes. A clear, repeatable system that takes you from discovery to scale."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block" />

          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <li className="relative text-center">
                  <div className="relative mx-auto grid h-14 w-14 place-items-center">
                    <motion.span
                      className="absolute inset-0 rounded-full bg-brand-500/20"
                      animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.2, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                    <span className="relative grid h-14 w-14 place-items-center rounded-full border border-brand-400/40 bg-ink-900 font-display text-lg font-bold text-gradient">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-white">{p.title}</h3>
                  <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-slate-400">
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

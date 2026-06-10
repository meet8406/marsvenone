import { HelpCircle } from 'lucide-react'
import { FAQS } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function Faq() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions founders usually ask <span className="text-gradient">before starting</span>
            </>
          }
          subtitle="Short answers for the decisions that usually come up before a first strategy call."
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4">
          {FAQS.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.06}>
              <div className="glass rounded-2xl p-5 transition-colors hover:bg-white/[0.06]">
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-white/10">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

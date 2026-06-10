import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const count = TESTIMONIALS.length

  const go = useCallback(
    (next: number) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1)
      setIndex((next + count) % count)
    },
    [index, count],
  )

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % count)
    }, 6000)
    return () => clearInterval(id)
  }, [count])

  const t = TESTIMONIALS[index]

  return (
    <section className="relative py-20 lg:py-28">
      <div className="orb right-1/4 top-10 h-72 w-72 bg-brand-600/30" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Our Approach"
          title={
            <>
              Built by people who care about <span className="text-gradient">clear growth</span>
            </>
          }
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-500/15" />

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-5 text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 font-display font-bold text-white">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-slate-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="glass grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-7 bg-brand-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="glass grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

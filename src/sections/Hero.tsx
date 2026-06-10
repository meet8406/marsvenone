import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, CheckCircle2, Sparkles } from 'lucide-react'

// The Three.js scene is heavy — load it lazily so hero text paints instantly.
const HeroScene = lazy(() => import('@/components/three/HeroScene'))

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-32 pb-20 lg:pt-36">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="absolute left-[8%] top-28 -z-10 h-72 w-72 rounded-full border border-brand-400/20 animate-spin-slow" />
      <div className="absolute right-[6%] top-44 -z-10 h-96 w-96 rounded-full border border-emerald-300/15 animate-spin-slow [animation-duration:28s]" />
      <div className="signal-line left-[12%] top-[34%] -z-10 w-44 rotate-12" />
      <div className="signal-line right-[10%] top-[58%] -z-10 w-56 -rotate-6 [animation-delay:1.2s]" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.35]" />

      {/* 3D scene layer */}
      <div className="absolute inset-0 -z-10 opacity-90">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Startup-ready Growth Partner
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            Accelerate Your Business Growth with{' '}
            <span className="text-gradient text-shadow-glow">Performance-Driven</span> Digital
            Marketing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            We combine <strong className="font-semibold text-white">SEO</strong>,{' '}
            <strong className="font-semibold text-white">PPC</strong>,{' '}
            <strong className="font-semibold text-white">Social Media Marketing</strong>,{' '}
            <strong className="font-semibold text-white">Website Development</strong> and{' '}
            <strong className="font-semibold text-white">Lead Generation</strong> into one ROI-obsessed
            growth engine built to help your startup test clearly, learn fast and spend with discipline.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link to="/contact" className="btn-primary group w-full sm:w-auto">
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn-secondary group w-full sm:w-auto">
              <BarChart3 className="h-4 w-4 text-brand-300" />
              Get Marketing Audit
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-slate-400 sm:flex-row sm:gap-6"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span className="ml-1 font-medium text-white">Founder-led</span> strategy and execution
            </div>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>
              Built for <span className="font-medium text-white">startups and early growth teams</span>
            </span>
          </motion.div>
        </div>

        {/* Floating dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="perspective mx-auto mt-16 max-w-4xl"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  )
}

/** Stylized analytics dashboard illustration built with pure markup. */
function DashboardMockup() {
  const bars = [42, 58, 49, 70, 62, 85, 78, 96]
  return (
    <div className="gradient-border glass-strong rounded-3xl p-3 shadow-glow-lg sm:p-4">
      <div className="rounded-2xl bg-ink-900/80 p-5 sm:p-6">
        {/* Top bar */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-amber-400/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
          </div>
          <span className="text-xs font-medium text-slate-500">Marsven One · Growth Dashboard</span>
          <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-[0.65rem] font-semibold text-emerald-300">
            ● LIVE
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Tracking', value: 'Ready', delta: 'Events mapped' },
            { label: 'Tests', value: '3 Live', delta: 'Creative + landing page' },
            { label: 'Next Move', value: 'Clear', delta: 'Weekly action plan' },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs text-slate-400">{kpi.label}</p>
              <p className="mt-1 text-xl font-bold text-white">{kpi.value}</p>
              <p className="mt-0.5 text-xs font-semibold text-emerald-400">{kpi.delta}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-white">Launch readiness</p>
            <p className="text-xs text-slate-500">Weekly score</p>
          </div>
          <div className="flex h-32 items-end gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.7 + i * 0.07, ease: 'easeOut' }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-brand-700 to-brand-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

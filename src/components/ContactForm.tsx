import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Check, Loader2, Send } from 'lucide-react'
import { SERVICE_OPTIONS } from '@/data/site'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'sending' | 'done'

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-400/25'

export default function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    // Placeholder submission — wire up to your CRM / form backend here.
    setTimeout(() => setStatus('done'), 1400)
  }

  if (status === 'done') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn('glass-strong rounded-3xl p-10 text-center', className)}
      >
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-white">Thank you! 🎉</h3>
        <p className="mt-2 text-slate-400">
          Your request is in. A senior strategist will reach out within one business day with your
          free audit.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('glass-strong rounded-3xl p-6 sm:p-8', className)}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
            Full name *
          </label>
          <input id="name" name="name" required placeholder="Jane Doe" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-300">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-300">
            Company name
          </label>
          <input id="company" name="company" placeholder="Acme Inc." className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-300">
            Services required *
          </label>
          <select id="service" name="service" required className={cn(fieldClass, 'appearance-none')}>
            <option value="" className="bg-ink-900">
              Select a service…
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s} className="bg-ink-900">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your goals and current challenges…"
            className={cn(fieldClass, 'resize-none')}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary mt-6 w-full"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Get My Free Audit <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-slate-500">
        We respect your privacy. No spam — ever.
      </p>
    </form>
  )
}

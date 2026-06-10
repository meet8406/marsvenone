import Marquee from '@/components/ui/Marquee'

const BADGES = [
  'Google Ads Ready',
  'Meta Campaign Setup',
  'HubSpot Workflows',
  'Google Analytics 4',
  'Shopify Stores',
  'Microsoft Ads',
  'Semrush Certified',
  'LinkedIn Marketing',
]

export default function TrustBar() {
  return (
    <section className="relative border-y border-white/10 bg-ink-900/40 py-8">
      <div className="container-px">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Platform-ready foundations for modern growth teams
        </p>
      </div>
      <div className="relative mt-6">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
        <Marquee>
          {BADGES.map((b) => (
            <span
              key={b}
              className="whitespace-nowrap text-lg font-semibold text-slate-400/70 transition-colors hover:text-white"
            >
              {b}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

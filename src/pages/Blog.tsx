import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'
import PageTransition from '@/components/PageTransition'
import PageHero from '@/components/PageHero'
import BlogCard from '@/components/ui/BlogCard'
import Reveal from '@/components/ui/Reveal'
import CtaBand from '@/components/CtaBand'
import { BLOG_POSTS } from '@/data/site'
import { cn } from '@/lib/utils'

export default function Blog() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))],
    [],
  )
  const [active, setActive] = useState('All')

  const [featured, ...rest] = BLOG_POSTS
  const filtered =
    active === 'All' ? rest : BLOG_POSTS.filter((p) => p.category === active)

  return (
    <PageTransition>
      <PageHero
        crumb="Blog"
        eyebrow="Insights & Resources"
        title={
          <>
            Marketing playbooks that <span className="text-gradient">drive growth</span>
          </>
        }
        subtitle="Actionable strategies, frameworks and trends from our team of certified specialists. No fluff — just what works."
      />

      {/* Featured post */}
      {active === 'All' && (
        <section className="py-8">
          <div className="container-px">
            <Reveal>
              <Link
                to="/blog"
                className={cn(
                  'group grid overflow-hidden rounded-3xl glass transition-colors hover:bg-white/[0.06] lg:grid-cols-2',
                )}
              >
                <div className={cn('relative min-h-[16rem] bg-gradient-to-br', featured.accent)}>
                  <div className="absolute inset-0 bg-dots opacity-30" />
                  <span className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    Featured · {featured.category}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <h2 className="text-2xl font-bold leading-snug text-white transition-colors group-hover:text-brand-200 sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-slate-400">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                    <span>{featured.author}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-300">
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Filter pills */}
      <section className="pt-6">
        <div className="container-px">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                  active === cat
                    ? 'border-brand-400/60 bg-brand-500/15 text-white'
                    : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-16">
        <div className="container-px">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.07}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-slate-400">No articles in this category yet.</p>
          )}
        </div>
      </section>

      <CtaBand />
    </PageTransition>
  )
}

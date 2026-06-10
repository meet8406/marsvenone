import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import BlogCard from '@/components/ui/BlogCard'
import Reveal from '@/components/ui/Reveal'

export default function BlogPreview() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="From the Blog"
            title={
              <>
                Marketing insights that <span className="text-gradient">move the needle</span>
              </>
            }
          />
          <Reveal direction="left">
            <Link to="/blog" className="btn-ghost group shrink-0">
              All articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

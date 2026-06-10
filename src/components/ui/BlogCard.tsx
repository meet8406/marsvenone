import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { BlogPost } from '@/data/site'
import { cn } from '@/lib/utils'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to="/blog"
      className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
    >
      {/* Featured image placeholder built from a gradient */}
      <div className={cn('relative h-44 overflow-hidden bg-gradient-to-br', post.accent)}>
        <div className="absolute inset-0 bg-dots opacity-30" />
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {post.category}
        </span>
        <ArrowUpRight className="absolute bottom-4 right-4 h-6 w-6 text-white/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-brand-200">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-500">
          <span>{post.date}</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime} read
          </span>
        </div>
      </div>
    </Link>
  )
}

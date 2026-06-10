import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-5">
        <div className="orb left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 bg-brand-700/40" />
        <div className="relative text-center">
          <p className="font-display text-[7rem] font-extrabold leading-none text-gradient sm:text-[10rem]">
            404
          </p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">This page took a different funnel</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-400">
            The page you're looking for doesn't exist or has moved. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link to="/contact" className="btn-secondary">
              <ArrowLeft className="h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

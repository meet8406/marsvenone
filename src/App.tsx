import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import ScrollToTop from '@/components/ScrollToTop'

import Home from '@/pages/Home'

// Inner pages are code-split for faster first paint of the landing page.
const Services = lazy(() => import('@/pages/Services'))
const CaseStudies = lazy(() => import('@/pages/CaseStudies'))
const About = lazy(() => import('@/pages/About'))
const Blog = lazy(() => import('@/pages/Blog'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-brand-400" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />

      <div className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  )
}

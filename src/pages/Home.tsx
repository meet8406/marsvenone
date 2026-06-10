import PageTransition from '@/components/PageTransition'
import Hero from '@/sections/Hero'
import TrustBar from '@/sections/TrustBar'
import Stats from '@/sections/Stats'
import ServicesGrid from '@/sections/ServicesGrid'
import StarterPlans from '@/sections/StarterPlans'
import AuditSnapshot from '@/sections/AuditSnapshot'
import WhyChooseUs from '@/sections/WhyChooseUs'
import Process from '@/sections/Process'
import CaseStudiesPreview from '@/sections/CaseStudiesPreview'
import Testimonials from '@/sections/Testimonials'
import Industries from '@/sections/Industries'
import BlogPreview from '@/sections/BlogPreview'
import Faq from '@/sections/Faq'
import CtaContact from '@/sections/CtaContact'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <TrustBar />
      <Stats />
      <ServicesGrid />
      <StarterPlans />
      <AuditSnapshot />
      <WhyChooseUs />
      <Process />
      <CaseStudiesPreview />
      <Testimonials />
      <Industries />
      <BlogPreview />
      <Faq />
      <CtaContact />
    </PageTransition>
  )
}

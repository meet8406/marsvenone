/**
 * Central content source for the Marsven One marketing site.
 * Editing copy, stats, services or case-study numbers here updates the whole
 * site — keeps presentation components free of hard-coded marketing copy.
 */
import {
  Search,
  MousePointerClick,
  Megaphone,
  Share2,
  Code2,
  ShoppingCart,
  Target,
  PenTool,
  Mail,
  type LucideIcon,
} from 'lucide-react'

export const COMPANY = {
  name: 'Marsven One',
  tagline: 'Digital Marketing Agency',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210', // digits only for wa.me
  email: 'hello@marsvenone.com',
  address: 'Ahmedabad · Mumbai · Remote-first, India',
  calendly: 'https://calendly.com/marsvenone/discovery-call', // placeholder
  socials: {
    linkedin: '#',
    instagram: '#',
    twitter: '#',
    youtube: '#',
  },
}

export interface Service {
  slug: string
  title: string
  icon: LucideIcon
  blurb: string
  points: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'seo',
    title: 'SEO Optimization',
    icon: Search,
    blurb:
      'Climb to page one with technical SEO, content engineering and authority building that compounds month over month.',
    points: ['Technical & on-page audits', 'Content & keyword strategy', 'Authority link building'],
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    icon: MousePointerClick,
    blurb:
      'Search, Shopping and Performance Max campaigns engineered for the lowest cost-per-acquisition in your category.',
    points: ['Search & PMax campaigns', 'Conversion tracking', 'Bid & budget optimization'],
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    icon: Megaphone,
    blurb:
      'Scroll-stopping Facebook & Instagram creative paired with razor-sharp audience targeting and retargeting funnels.',
    points: ['Creative testing frameworks', 'Lookalike & retargeting', 'Full-funnel scaling'],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    icon: Share2,
    blurb:
      'Build a brand people follow — organic content, community management and influencer collaborations that convert.',
    points: ['Content calendars', 'Community management', 'Influencer collaborations'],
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    icon: Code2,
    blurb:
      'Blazing-fast, conversion-optimized websites and landing pages built on modern, SEO-ready foundations.',
    points: ['High-converting design', 'Core Web Vitals tuned', 'CMS & headless builds'],
  },
  {
    slug: 'ecommerce-marketing',
    title: 'E-Commerce Marketing',
    icon: ShoppingCart,
    blurb:
      'Scale your store with full-funnel campaigns across Shopping, Meta and marketplaces — focused on ROAS.',
    points: ['Shopping feed optimization', 'Cart-recovery flows', 'Marketplace growth'],
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    icon: Target,
    blurb:
      'Predictable pipelines of qualified leads with optimized landing pages, lead magnets and CRM automation.',
    points: ['High-intent landing pages', 'Lead scoring & nurturing', 'CRM automation'],
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    icon: PenTool,
    blurb:
      'Authority-building content — blogs, video, and thought leadership that ranks, educates and converts.',
    points: ['Editorial strategy', 'SEO content production', 'Video & thought leadership'],
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    icon: Mail,
    blurb:
      'Lifecycle email and marketing automation that turns subscribers into repeat customers on autopilot.',
    points: ['Lifecycle automation', 'Segmentation & A/B tests', 'Newsletter & broadcast'],
  },
]

export interface Stat {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export const STATS: Stat[] = [
  { label: 'Core Growth Channels', value: 9 },
  { label: 'Audit Areas Reviewed', value: 30, suffix: '+' },
  { label: 'Weekly Reporting Rhythm', value: 1, suffix: 'x' },
  { label: 'Strategy First Approach', value: 100, suffix: '%' },
]

export const WHY_US = [
  {
    title: 'Data-Driven Decisions',
    desc: 'Every move is backed by analytics, not guesswork. We let the numbers lead.',
  },
  {
    title: 'ROI-Focused Campaigns',
    desc: 'We plan around qualified leads, conversion quality and profitable next steps, not vanity metrics.',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Live dashboards and clear monthly reviews — you always know where your spend goes.',
  },
  {
    title: 'Dedicated Support',
    desc: 'You work directly with the people planning and improving your campaigns.',
  },
  {
    title: 'Certified Experts',
    desc: 'Platform-trained specialists building carefully measured campaigns across each channel.',
  },
  {
    title: 'Built for Early Momentum',
    desc: 'Lean systems, fast feedback loops and practical experiments that fit startup budgets.',
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We deep-dive into your business, market, competitors and goals to define what winning looks like.',
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'A custom, channel-by-channel growth roadmap with clear KPIs, budgets and timelines.',
  },
  {
    step: '03',
    title: 'Execution',
    desc: 'Our specialists launch campaigns, build assets and ship fast with weekly momentum.',
  },
  {
    step: '04',
    title: 'Optimization',
    desc: 'Continuous testing, analysis and refinement to drive down costs and lift conversions.',
  },
  {
    step: '05',
    title: 'Scale Readiness',
    desc: 'Once a signal is strong, we document what worked and prepare the next responsible growth step.',
  },
]

export interface CaseStudy {
  slug: string
  client: string
  industry: string
  title: string
  summary: string
  metrics: { label: string; value: string }[]
  tags: string[]
  accent: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'local-clinic-launch',
    client: 'Local Clinic Launch',
    industry: 'Healthcare',
    title: 'Local appointment funnel blueprint',
    summary:
      'A starter plan for clinics that need better local discovery, clearer service pages and trackable booking actions before increasing ad spend.',
    metrics: [
      { label: 'Focus', value: 'Local SEO' },
      { label: 'Primary KPI', value: 'Bookings' },
      { label: 'Timeline', value: '90 days' },
    ],
    tags: ['SEO', 'Google Ads', 'Local'],
    accent: 'from-emerald-400/30 to-brand-500/20',
  },
  {
    slug: 'real-estate-lead-system',
    client: 'Real Estate Lead System',
    industry: 'Real Estate',
    title: 'High-intent lead journey design',
    summary:
      'A practical acquisition setup for property teams: landing pages, lead qualification, CRM routing and follow-up messaging from day one.',
    metrics: [
      { label: 'Focus', value: 'Lead Gen' },
      { label: 'Primary KPI', value: 'Qualified calls' },
      { label: 'Timeline', value: '6 weeks' },
    ],
    tags: ['Meta Ads', 'Lead Gen', 'Landing Pages'],
    accent: 'from-amber-400/30 to-brand-500/20',
  },
  {
    slug: 'education-content-engine',
    client: 'Education Content Engine',
    industry: 'Education',
    title: 'Search-led enrolment foundation',
    summary:
      'A launch-ready plan for courses and institutes that need topic clusters, trust-building pages and nurture flows before campaign scale.',
    metrics: [
      { label: 'Focus', value: 'Content' },
      { label: 'Primary KPI', value: 'Enquiries' },
      { label: 'Timeline', value: '12 weeks' },
    ],
    tags: ['SEO', 'Content', 'Social'],
    accent: 'from-violet-400/30 to-brand-500/20',
  },
  {
    slug: 'saas-trial-funnel',
    client: 'SaaS Trial Funnel',
    industry: 'SaaS',
    title: 'Trial acquisition and nurture setup',
    summary:
      'A focused demand-capture system for early SaaS teams: landing pages, search intent, onboarding emails and lead quality tracking.',
    metrics: [
      { label: 'Focus', value: 'PPC + Email' },
      { label: 'Primary KPI', value: 'Trials' },
      { label: 'Timeline', value: '8 weeks' },
    ],
    tags: ['PPC', 'SEO', 'Email'],
    accent: 'from-sky-400/30 to-brand-500/20',
  },
  {
    slug: 'finance-lead-quality',
    client: 'Finance Lead Quality',
    industry: 'Finance',
    title: 'Compliant lead quality framework',
    summary:
      'A conservative framework for financial services that need cleaner tracking, stronger qualification and careful ad messaging.',
    metrics: [
      { label: 'Focus', value: 'Search' },
      { label: 'Primary KPI', value: 'Qualified leads' },
      { label: 'Timeline', value: '10 weeks' },
    ],
    tags: ['Google Ads', 'Lead Gen', 'CRO'],
    accent: 'from-teal-400/30 to-brand-500/20',
  },
  {
    slug: 'ecommerce-growth-base',
    client: 'E-Commerce Growth Base',
    industry: 'E-Commerce',
    title: 'Storefront and ad testing system',
    summary:
      'A clean foundation for online stores: product feed hygiene, landing page fixes, abandoned-cart flows and creative testing cadence.',
    metrics: [
      { label: 'Focus', value: 'Shop + Ads' },
      { label: 'Primary KPI', value: 'Purchases' },
      { label: 'Timeline', value: '8 weeks' },
    ],
    tags: ['E-Commerce', 'Meta Ads', 'Shopping'],
    accent: 'from-rose-400/30 to-brand-500/20',
  },
]

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Vivaan Marsh',
    role: 'Founder & Growth Lead',
    company: 'Marsven One',
    quote:
      'We are building Marsven One for founders who want clear thinking before heavy spending. Every campaign should start with tracking, customer insight and a reasoned test plan.',
    rating: 5,
  },
  {
    name: 'Sara Venkat',
    role: 'Performance Strategy',
    company: 'Marsven One',
    quote:
      'Professional marketing is not about loud promises. It is about clean data, sharper creative, patient optimization and knowing exactly what to improve next.',
    rating: 5,
  },
  {
    name: 'Riya Malhotra',
    role: 'Creative Systems',
    company: 'Marsven One',
    quote:
      'For a startup website, trust comes from clarity. We design campaigns and pages that explain the offer quickly, remove friction and make the next action obvious.',
    rating: 5,
  },
  {
    name: 'Dev Kapoor',
    role: 'SEO & Content',
    company: 'Marsven One',
    quote:
      'Search growth starts with useful structure: technical basics, intent-led pages and content people can actually trust. That is the foundation we build first.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Client Success',
    company: 'Marsven One',
    quote:
      'We keep communication simple: what changed, what we learned and what we are doing next. That rhythm matters as much as the campaign setup.',
    rating: 5,
  },
]

export const INDUSTRIES = [
  'Healthcare',
  'Real Estate',
  'Education',
  'SaaS',
  'Finance',
  'E-Commerce',
  'Manufacturing',
  'Hospitality',
]

export interface StarterPlan {
  name: string
  bestFor: string
  description: string
  timeline: string
  includes: string[]
}

export const STARTER_PLANS: StarterPlan[] = [
  {
    name: 'Launch Foundation',
    bestFor: 'New brands preparing to run their first serious campaigns',
    description:
      'A focused setup to make sure your positioning, website, tracking and first campaign plan are ready before you spend.',
    timeline: '2-3 weeks',
    includes: ['Website and funnel audit', 'Tracking checklist', 'Messaging improvements', 'First 30-day action plan'],
  },
  {
    name: 'Growth Sprint',
    bestFor: 'Startups that need leads, enquiries or sales momentum',
    description:
      'A practical sprint for testing one or two priority channels with weekly learning, cleaner reporting and fast iteration.',
    timeline: '4-6 weeks',
    includes: ['Channel strategy', 'Landing page recommendations', 'Ad or content test plan', 'Weekly optimization notes'],
  },
  {
    name: 'Scale Readiness',
    bestFor: 'Teams with early traction that want a clearer growth system',
    description:
      'A deeper improvement cycle for brands that already have traffic or campaigns and need better structure before scaling.',
    timeline: '8-12 weeks',
    includes: ['Conversion review', 'Creative testing system', 'CRM or nurture flow map', 'Reporting rhythm and next bets'],
  },
]

export const AUDIT_AREAS = [
  'Website clarity and conversion flow',
  'SEO basics and search intent gaps',
  'Ad account structure and tracking readiness',
  'Offer, messaging and audience fit',
  'Follow-up, CRM and lead quality process',
]

export interface FaqItem {
  question: string
  answer: string
}

export const FAQS: FaqItem[] = [
  {
    question: 'Is Marsven One a good fit if we are just starting?',
    answer:
      'Yes. The site and service model are now built around startup needs: clear foundations, practical priorities and careful testing before heavy spending.',
  },
  {
    question: 'Do we need a large ad budget to begin?',
    answer:
      'No. We can start with an audit, positioning work, landing page improvements or a small test plan. The goal is to learn clearly before increasing budget.',
  },
  {
    question: 'Which channel should we start with?',
    answer:
      'That depends on your offer, audience and current website. We usually recommend one primary channel first, supported by tracking and landing page fixes.',
  },
  {
    question: 'Will we get regular updates?',
    answer:
      'Yes. We keep updates simple: what changed, what we learned, what needs attention and what we recommend next.',
  },
]

export interface TeamMember {
  name: string
  role: string
  initials: string
}

export const TEAM: TeamMember[] = [
  { name: 'Vivaan Marsh', role: 'Founder & Growth Lead', initials: 'VM' },
  { name: 'Sara Venkat', role: 'Head of Performance', initials: 'SV' },
  { name: 'Dev Kapoor', role: 'SEO Director', initials: 'DK' },
  { name: 'Riya Malhotra', role: 'Creative Director', initials: 'RM' },
  { name: 'Arjun Bose', role: 'Head of Web', initials: 'AB' },
  { name: 'Neha Gupta', role: 'Client Success Lead', initials: 'NG' },
]

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  accent: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'pmax-playbook-2026',
    title: 'A Starter Performance Max Checklist for 2026',
    excerpt:
      'How to structure PMax campaigns, feed Google the right signals, and protect your brand budget while scaling profitably.',
    category: 'Google Ads',
    date: 'May 28, 2026',
    readTime: '8 min',
    author: 'Sara Venkat',
    accent: 'from-brand-500/30 to-sky-400/20',
  },
  {
    slug: 'seo-after-ai-search',
    title: 'SEO After AI Search: What Actually Still Works',
    excerpt:
      'AI overviews changed the SERP forever. Here is the content and authority strategy that keeps you visible and clicked.',
    category: 'SEO',
    date: 'May 14, 2026',
    readTime: '11 min',
    author: 'Dev Kapoor',
    accent: 'from-emerald-400/30 to-brand-500/20',
  },
  {
    slug: 'creative-testing-system',
    title: 'A Creative Testing System That Scales Meta Ads',
    excerpt:
      'A practical framework for testing hooks, formats and landing-page messages before increasing budget.',
    category: 'Meta Ads',
    date: 'Apr 30, 2026',
    readTime: '7 min',
    author: 'Riya Malhotra',
    accent: 'from-rose-400/30 to-brand-500/20',
  },
  {
    slug: 'landing-pages-that-convert',
    title: '9 Landing Page Rules for Cleaner Conversions',
    excerpt:
      'Conversion-rate optimization is one of the cheapest growth levers you own. These rules help remove friction.',
    category: 'CRO',
    date: 'Apr 18, 2026',
    readTime: '9 min',
    author: 'Arjun Bose',
    accent: 'from-violet-400/30 to-brand-500/20',
  },
  {
    slug: 'lead-scoring-crm',
    title: 'Lead Scoring & CRM Automation for Predictable Sales',
    excerpt:
      'Stop handing sales junk leads. Build a scoring and nurture system that delivers only sales-ready opportunities.',
    category: 'Lead Gen',
    date: 'Apr 02, 2026',
    readTime: '10 min',
    author: 'Neha Gupta',
    accent: 'from-amber-400/30 to-brand-500/20',
  },
  {
    slug: 'marketing-budget-allocation',
    title: 'How to Allocate Your First Serious Marketing Budget',
    excerpt:
      'A channel-by-channel framework for splitting budget between foundations, demand capture and demand generation.',
    category: 'Strategy',
    date: 'Mar 20, 2026',
    readTime: '12 min',
    author: 'Vivaan Marsh',
    accent: 'from-teal-400/30 to-brand-500/20',
  },
]

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title).concat('Not sure yet')

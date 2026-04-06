'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Visual Pipeline',
    desc: 'Drag-and-drop deal tracking. See every opportunity at a glance and move deals forward without losing track.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Sequences',
    desc: 'Automated follow-ups that feel personal. Schedule, track opens, and trigger next steps automatically.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Contact Management',
    desc: 'Rich contact profiles with full activity history, notes, tags, and custom fields for your business.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Power Dialer',
    desc: 'Call through your list fast with Twilio-powered dialing, call recording, and outcome tracking.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI Voice Calling',
    desc: 'Deploy Bland.ai agents that call and qualify leads 24/7. Never miss a lead while you sleep.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Team Management',
    desc: 'Add your team, assign leads, track performance. Built for small teams that move fast.',
  },
]

const faqs = [
  {
    q: 'How does the free trial work?',
    a: 'You get 14 days of full Pro access. No credit card required. After 14 days, choose a plan or your account moves to read-only.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel from your account settings with one click. No cancellation fees, no questions asked.',
  },
  {
    q: 'How does seat pricing work?',
    a: 'Starter includes 1 seat. Pro includes 5 seats. Add more at $12/seat/mo (Starter) or $10/seat/mo (Pro). You only pay for what you need.',
  },
  {
    q: 'Does ZiggyHQ work on mobile?',
    a: 'Yes — ZiggyHQ is fully responsive on mobile and tablet. A dedicated mobile app is on the roadmap.',
  },
  {
    q: 'What integrations are included?',
    a: 'Gmail, Google Calendar, Twilio (power dialer), Bland.ai (AI calling), Resend (email), Stripe, and Zapier. QuickBooks, Outlook, and Slack are coming soon.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Data is encrypted at rest and in transit. We use Supabase with row-level security, security headers on all pages, and 2FA is available on all accounts.',
  },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-[#0a0a0a]">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#0ea5e9]/12 rounded-full blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] bg-[#0ea5e9]/5 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '64px 64px'
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggyHQ — CRM for local business
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Built for businesses{' '}
            <span className="text-[#0ea5e9]">like ours.</span>
            <br />
            Now available for yours.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10 text-center">
            We built ZiggyHQ because the CRM options out there cost too much and weren&apos;t built for how local businesses actually work. So we built one that was — and made it affordable for everyone.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="https://app.ziggyhq.com/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0ea5e9] text-white rounded-xl font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all"
            >
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] rounded-xl font-semibold text-lg hover:bg-[#0ea5e9]/20 transition-all"
            >
              See Features
            </Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60">14-day free trial · No credit card required · Cancel anytime</p>

          {/* Facts bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f]">
            {[
              '$29/mo — half the price of GoHighLevel',
              'Set up in under an hour',
              '10-app suite available',
              'Support from the team that built it',
            ].map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Product Preview */}
      <section className="py-16 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative rounded-2xl border border-[#1f1f1f] overflow-hidden bg-[#111111]"
            style={{ aspectRatio: '16/9' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#0ea5e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">Product demo coming soon</p>
                <p className="text-[#b3b3b3] text-sm mt-1">See ZiggyHQ in action</p>
                <Link
                  href="https://app.ziggyhq.com/signup"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-[#0ea5e9] text-white rounded-lg text-sm font-medium hover:bg-[#0ea5e9]/90 transition-colors"
                >
                  Start free trial instead
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Features */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0c0f14] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0ea5e9] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything you need to scale sales</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto leading-relaxed">
              The tools that actually move deals forward. Nothing you won&apos;t use. Everything you will.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 md:p-8 hover:border-[#0ea5e9]/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.08)] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center mb-5 group-hover:bg-[#0ea5e9]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-[#b3b3b3] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] rounded-xl font-semibold hover:bg-[#0ea5e9]/20 transition-all"
            >
              View all features
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Founding Story */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0d1828] to-[#080c10]">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#0ea5e9]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0ea5e9] mb-4">Our story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">We&apos;ve been in your shoes</h2>
          <div className="space-y-6 text-lg text-[#b3b3b3] leading-relaxed">
            <p>
              When we started our company, we looked at the CRM options out there. GoHighLevel. HubSpot. Salesforce.
              They were either too expensive, too complex, or built for someone else entirely.
            </p>
            <p>
              So we built our own. We tested it on ourselves first, fixed what didn&apos;t work, and kept only what
              actually moved the needle. Then we made it available to every local business that deserves software that
              actually fits how they work.
            </p>
            <p className="text-white font-medium">
              That&apos;s ZiggyHQ. Built by people who get it, for people who need it.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '$29/mo', label: 'Starting price', color: '#0ea5e9' },
              { value: '10 apps', label: 'In the suite', color: '#10b981' },
              { value: '1 login', label: 'For everything', color: '#f97316' },
              { value: '14 days', label: 'Free to try', color: '#8b5cf6' },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center hover:border-[#0ea5e9]/30 transition-colors">
                <p className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-sm text-[#b3b3b3]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Pricing Teaser */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0d0d0d] via-[#0a0e14] to-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0ea5e9] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto leading-relaxed">
            No seat traps. No hidden fees. No &quot;contact sales.&quot; Just a price that works for a real business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            {/* Starter */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-left">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-[#b3b3b3] mb-2">/mo</span>
              </div>
              <p className="text-sm text-[#b3b3b3] mb-6">1 seat · +$12/additional seat</p>
              <Link
                href="https://app.ziggyhq.com/signup"
                className="block w-full text-center px-6 py-3 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] rounded-xl font-semibold hover:bg-[#0ea5e9]/20 transition-all"
              >
                Start free trial
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-[#111111] border-2 border-[#0ea5e9]/40 rounded-2xl p-8 text-left relative shadow-[0_0_40px_rgba(14,165,233,0.12)]">
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 bg-[#0ea5e9] text-white text-xs font-bold rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              </div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-white">$49</span>
                <span className="text-[#b3b3b3] mb-2">/mo</span>
              </div>
              <p className="text-sm text-[#b3b3b3] mb-6">5 seats included · +$10/additional seat</p>
              <Link
                href="https://app.ziggyhq.com/signup"
                className="block w-full text-center px-6 py-3 bg-[#0ea5e9] text-white rounded-xl font-semibold hover:bg-[#0ea5e9]/90 transition-all"
              >
                Start free trial
              </Link>
            </div>
          </div>

          {/* Competition comparison */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#1f1f1f]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#0d0d0d] px-6 py-2 text-sm text-[#b3b3b3]">vs the competition</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center">
              <p className="text-[#b3b3b3] text-sm mb-1">GoHighLevel</p>
              <p className="text-3xl font-bold text-white">$97<span className="text-lg text-[#b3b3b3]">/mo</span></p>
              <p className="text-[#e11d48] text-sm mt-1">$68 more per month</p>
            </div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center">
              <p className="text-[#b3b3b3] text-sm mb-1">HubSpot</p>
              <p className="text-3xl font-bold text-white">$90<span className="text-lg text-[#b3b3b3]">/mo</span></p>
              <p className="text-[#e11d48] text-sm mt-1">$61 more per month</p>
            </div>
          </div>

          <div className="text-center mt-4 mb-8 p-4 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl max-w-2xl mx-auto">
            <p className="text-[#22c55e] font-bold text-lg">Save up to $2,976/year with ZiggyHQ Pro</p>
            <p className="text-[#b3b3b3] text-sm mt-1">Same features. Half the price. Built for businesses like yours.</p>
          </div>

          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#0ea5e9] hover:underline font-medium">
            View full pricing and compare plans
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Section 6: FAQ Accordion */}
      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0ea5e9] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
            <p className="text-lg text-[#b3b3b3]">Everything you need to know before you start.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#0ea5e9]/20 transition-colors"
              >
                <button
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#0ea5e9] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-[#b3b3b3] mt-8">
            More questions?{' '}
            <Link href="/faq" className="text-[#0ea5e9] hover:underline">
              View full FAQ
            </Link>
          </p>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0c1520] to-[#080c10]">
        <div className="absolute inset-0 bg-[#0ea5e9]/4 rounded-3xl blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to run your business
            <br />
            <span className="text-[#0ea5e9]">the smarter way?</span>
          </h2>
          <p className="text-xl text-[#b3b3b3] mb-10 leading-relaxed">
            14 days free. No credit card. Cancel anytime. Join local businesses that have already made the switch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.ziggyhq.com/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#0ea5e9] text-white rounded-xl font-bold text-xl hover:bg-[#0ea5e9]/90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(14,165,233,0.3)]"
            >
              Start Free Trial
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#0ea5e9] rounded-xl font-bold text-xl hover:bg-[#0ea5e9]/20 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}

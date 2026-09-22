import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import CTABanner from '../components/layout/CTABanner'
import { useFirmConfig } from '../context/FirmConfigContext'

export default function Testimonials() {
  const { config } = useFirmConfig()
  const { testimonials, attorney, stats } = config

  return (
    <>
      <PageMeta
        title="Client Testimonials"
        description={`See what clients say about ${attorney.name} — Advocate High Court Islamabad. Trusted by ${stats.clientsServed} clients across Islamabad for criminal, family, and civil legal matters.`}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-luxe-black py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp">
            <div className="trust-badge mx-auto mb-6 w-fit">
              <MaterialIcon name="verified" className="text-sm" />
              Verified Client Feedback
            </div>
            <h1 className="font-serif text-[44px] md:text-[56px] text-white leading-tight mb-4">
              What Clients Say
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-white/65 text-base max-w-xl mx-auto leading-relaxed mb-4">
              Trusted by individuals and families across Islamabad. Verified Google reviews from real clients.
            </p>
            <div className="h-0.5 w-16 bg-luxe-gold rounded-full mx-auto" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────── */}
      <section className="bg-luxe-black border-t border-white/10 py-10 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stats.clientsServed, label: 'Clients Served', icon: 'people' },
              { value: stats.successRate, label: 'Satisfaction Rate', icon: 'thumb_up' },
              { value: stats.yearsExperience, label: 'Years Experience', icon: 'history_edu' },
              { value: stats.casesResolved, label: 'Engagements', icon: 'task_alt' },
            ].map((s, i) => (
              <AnimateOnScroll key={i} animation="fadeIn" delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-luxe-gold/10 flex items-center justify-center mx-auto mb-3">
                    <MaterialIcon name={s.icon} className="text-luxe-gold text-lg" />
                  </div>
                  <p className="font-serif text-3xl text-luxe-gold font-bold mb-1">{s.value}</p>
                  <p className="font-sans text-xs text-white/55 tracking-wide">{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL CARDS ────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.id} animation="fadeInUp" delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-luxe-gold/20 hover:border-luxe-gold/50 hover:shadow-[0_20px_48px_rgba(15,27,45,0.1)] transition-all duration-300 p-8 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <MaterialIcon key={j} name="star" className="text-luxe-gold text-lg" />
                    ))}
                    <span className="ml-auto font-sans text-[10px] font-bold tracking-widest text-luxe-gold uppercase">
                      Verified
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6 flex-1">
                    <MaterialIcon
                      name="format_quote"
                      className="text-luxe-gold/20 text-6xl absolute -top-2 -left-1 leading-none"
                    />
                    <p className="font-sans text-luxe-grey text-sm leading-relaxed italic pt-6">
                      {t.text}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-luxe-gold/25 to-transparent mb-5" />

                  {/* Client */}
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-luxe-gold/30 flex-shrink-0"
                    />
                    <div>
                      <p className="font-serif text-base text-luxe-black leading-tight">{t.name}</p>
                      <p className="font-sans text-xs text-luxe-gold mt-0.5 leading-tight">{t.title}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}

            {/* ── PLACEHOLDER CARD — invite future testimonials ── */}
            <AnimateOnScroll animation="fadeInUp" delay={testimonials.length * 0.1}>
              <div className="bg-luxe-cream rounded-2xl border-2 border-dashed border-luxe-gold/30 p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px] hover:border-luxe-gold/60 transition-all">
                <div className="w-14 h-14 rounded-full bg-luxe-gold/10 flex items-center justify-center mb-4">
                  <MaterialIcon name="add_comment" className="text-luxe-gold text-2xl" />
                </div>
                <p className="font-serif text-lg text-luxe-black mb-2">Your Review Could Be Here</p>
                <p className="font-sans text-sm text-luxe-grey leading-relaxed mb-5 max-w-xs">
                  Have you worked with {attorney.name}? We'd love to hear your experience.
                </p>
                <a
                  href={config.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-luxe-gold text-luxe-gold rounded-lg font-sans font-semibold text-sm hover:bg-luxe-gold hover:text-luxe-black transition-all"
                >
                  <MaterialIcon name="open_in_new" className="text-base" />
                  Leave a Review on LinkedIn
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ─────────────────────────────────────────── */}
      <section className="py-14 px-margin-mobile md:px-margin-desktop bg-white border-t border-luxe-gold/15">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp" className="text-center mb-10">
            <h2 className="font-serif text-2xl text-luxe-black">Professional Credentials Behind Every Case</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'gavel', label: 'Advocate High Court', sub: 'Islamabad High Court' },
              { icon: 'workspace_premium', label: 'Islamabad Bar Council', sub: 'Enrolled Member' },
              { icon: 'star', label: '5.0 ★ Google Rating', sub: '34 Verified Reviews' },
              { icon: 'verified', label: '15+ Years Experience', sub: 'Criminal & Family Law' },
            ].map((badge, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 0.07}>
                <div className="flex flex-col items-center text-center p-5 rounded-xl border border-luxe-gold/15 hover:border-luxe-gold/40 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-luxe-gold/10 flex items-center justify-center mb-3">
                    <MaterialIcon name={badge.icon} className="text-luxe-gold text-2xl" />
                  </div>
                  <p className="font-sans font-bold text-luxe-black text-sm">{badge.label}</p>
                  <p className="font-sans text-xs text-luxe-grey mt-0.5">{badge.sub}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA — single, no duplicate ───────────────────── */}
      <CTABanner
        title={`Join ${stats.clientsServed} Satisfied Clients`}
        subtitle={`Book a free consultation and experience expert legal advocacy before the Islamabad High Court.`}
      />
    </>
  )
}

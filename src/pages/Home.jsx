import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import CTABanner from '../components/layout/CTABanner'
import { practiceAreas } from '../data/practiceAreas'
import { useFirmConfig } from '../context/FirmConfigContext'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function Home() {
  const { config } = useFirmConfig()
  const testimonials = config.testimonials
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const perPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(currentIdx * perPage, (currentIdx + 1) * perPage)

  useEffect(() => {
    const t = setInterval(() => setCurrentIdx(p => (p + 1) % totalPages), 5000)
    return () => clearInterval(t)
  }, [totalPages])

  const waUrl = buildWhatsAppUrl({ pathname: '/' })

  return (
    <>
      <PageMeta
        title="Home"
        description={config.seo.defaultDescription}
        image={config.seo.defaultImage}
      />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative min-h-screen md:min-h-0 md:h-[680px] flex items-center overflow-hidden bg-luxe-black">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=1600&h=900&fit=crop"
            alt="Legal advocacy background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxe-black via-luxe-black/90 to-luxe-black/50" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-stack-lg md:py-0">
          <div className="max-w-3xl">
            <AnimateOnScroll animation="fadeInUp">
              <div className="trust-badge mb-6">
                <MaterialIcon name="verified" className="text-sm" />
                Advocate High Court · Islamabad Bar Council · 5.0 ★ Rated
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={0.1}>
              <h1 className="font-serif text-[42px] md:text-[60px] leading-[1.1] text-white mb-6">
                Trusted Legal Advocacy —
                <span className="text-luxe-gold"> Criminal · Family · Legal Advisory</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={0.2}>
              <p className="font-sans text-lg text-white/75 mb-8 max-w-2xl leading-relaxed">
                Over 15 years of expert legal representation before the Islamabad High Court and
                subordinate courts. Chamber No. 27, F-8 Markaz, Islamabad.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/consultation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-luxe-gold text-luxe-black rounded-lg font-sans font-bold text-sm tracking-wide hover:bg-luxe-gold-dark transition-all hover:shadow-[0_8px_24px_rgba(201,168,76,0.4)] hover:-translate-y-0.5"
                >
                  <MaterialIcon name="calendar_today" className="mr-2 text-lg" />
                  Book Free Consultation
                </Link>
                <Link
                  to="/practice-areas"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-sans font-semibold text-sm tracking-wide hover:border-luxe-gold hover:text-luxe-gold transition-all"
                >
                  View Services
                  <MaterialIcon name="arrow_forward" className="ml-2" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={0.4}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-white/60 hover:text-[#25D366] text-sm font-sans transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48C18.25 1.32 15.23 0 12 0c-6.63 0-12 5.28-12 11.72c0 2.16.56 4.32 1.6 6.12L0 24l6.48-1.6c1.92 1.04 3.84 1.6 5.52 1.6C18.36 24 24 18.72 24 12C24 8.76 22.8 5.64 20.52 3.48zM12 21.84c-1.92 0-3.76-.48-5.52-1.36L5.12 20.8l-2.4.56.56-2.4.32-1.36C3.28 15.68 2.8 14 2.8 12.08c0-5.28 4.32-9.6 9.6-9.6c2.56 0 5.04 1.04 6.8 2.8c1.76 1.76 2.8 4.24 2.8 6.8C21.6 17.52 17.28 21.84 12 21.84zm5.76-7.52c-.32-.16-1.92-.96-2.24-1.04-.32-.08-.56-.16-.8.16-.24.32-.92 1.04-1.12 1.28-.2.24-.4.24-.72.08-.32-.16-1.36-.48-2.56-1.6-.96-.84-1.6-1.88-1.76-2.2-.16-.32 0-.48.12-.64.12-.12.32-.32.48-.52.16-.2.2-.32.32-.56.12-.24.08-.4-.04-.56-.12-.16-.8-1.92-.96-2.56-.24-.56-.48-.48-.72-.48h-.64c-.24 0-.64.08-.96.4-.32.32-1.2 1.04-1.2 2.52 0 1.48 1.2 2.92 1.36 3.16.16.24 2.24 3.36 5.44 4.72.76.32 1.36.52 1.84.64.76.24 1.44.2 2 .12.64-.08 1.92-.76 2.16-1.52.24-.76.24-1.4.16-1.52-.08-.12-.32-.2-.64-.32z"/>
                </svg>
                Quick message on WhatsApp
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────── */}
      <section className="bg-luxe-black border-t border-white/10 py-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: config.stats.yearsExperience, label: 'Years of Experience', icon: 'history_edu' },
              { value: config.stats.clientsServed, label: 'Clients Served', icon: 'people' },
              { value: config.stats.successRate, label: 'Client Satisfaction', icon: 'thumb_up' },
              { value: config.stats.casesResolved, label: 'Engagements Completed', icon: 'task_alt' },
            ].map((s, i) => (
              <AnimateOnScroll key={i} animation="fadeIn" delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-11 h-11 rounded-full bg-luxe-gold/10 flex items-center justify-center mx-auto mb-3">
                    <MaterialIcon name={s.icon} className="text-luxe-gold text-xl" />
                  </div>
                  <p className="font-serif text-4xl text-luxe-gold font-bold mb-1">{s.value}</p>
                  <p className="font-sans text-sm text-white/60 tracking-wide">{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ──────────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp" className="mb-14">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-3">
              Legal Services
            </span>
            <h2 className="font-serif text-[36px] text-luxe-black leading-tight mb-3">
              Comprehensive Legal Expertise
            </h2>
            <div className="h-0.5 w-16 bg-luxe-gold rounded-full mb-14" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, i) => (
              <AnimateOnScroll key={area.id} animation="fadeInUp" delay={i * 0.07}>
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-luxe-gold/20 hover:border-luxe-gold/60 hover:shadow-[0_16px_40px_rgba(15,27,45,0.12)] transition-all duration-300 overflow-hidden"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={area.image}
                      alt={area.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxe-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-lg bg-luxe-gold/90 flex items-center justify-center">
                        <MaterialIcon name={area.icon} className="text-luxe-black text-xl" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl text-luxe-black mb-2 group-hover:text-luxe-gold transition-colors">
                      {area.title}
                    </h3>
                    <p className="font-sans text-sm text-luxe-grey leading-relaxed flex-1 mb-4">
                      {area.description}
                    </p>
                    <div className="flex items-center gap-1 text-luxe-gold font-sans font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <MaterialIcon name="arrow_forward" className="text-base" />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fadeInUp" className="text-center mt-12">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-luxe-gold text-luxe-gold font-sans font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-luxe-gold hover:text-luxe-black transition-all duration-300"
            >
              <MaterialIcon name="explore" className="text-lg" />
              View All Services
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-black text-white">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="fadeInLeft">
              <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">
                Why Rana M. Zahid Muneer
              </span>
              <h2 className="font-serif text-[36px] leading-tight mb-6">
                High Court Expertise<br />You Can Rely On
              </h2>
              <p className="font-sans text-white/70 text-base leading-relaxed mb-8">
                As an enrolled Advocate High Court with over 15 years of experience,
                Rana Muhammad Zahid Muneer provides expert legal representation across criminal,
                family, and civil matters — with a 5.0 Google rating earned entirely through results.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'gavel', text: 'Advocate High Court — right of audience before Islamabad High Court' },
                  { icon: 'verified', text: '5.0 ★ Google rating with 34 verified client reviews' },
                  { icon: 'family_restroom', text: 'Criminal, family, property, civil and constitutional matters' },
                  { icon: 'handshake', text: 'Transparent fees agreed upfront — no hidden charges' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-luxe-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MaterialIcon name={item.icon} className="text-luxe-gold text-sm" />
                    </div>
                    <p className="font-sans text-white/80 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInRight" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'gavel', label: 'Criminal Law', sub: 'Defence · Bail · Trial' },
                  { icon: 'family_restroom', label: 'Family Law', sub: 'Divorce · Custody · Maintenance' },
                  { icon: 'balance', label: 'Legal Advisory', sub: 'Contracts · Civil matters' },
                  { icon: 'home_work', label: 'Property Law', sub: 'Title · Disputes · Possession' },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-luxe-gold/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-luxe-gold/10 flex items-center justify-center mb-3">
                      <MaterialIcon name={card.icon} className="text-luxe-gold text-xl" />
                    </div>
                    <p className="font-serif text-base text-white mb-1">{card.label}</p>
                    <p className="font-sans text-xs text-white/50">{card.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 rounded-xl bg-luxe-gold/10 border border-luxe-gold/30">
                <div className="flex items-center gap-3 mb-2">
                  <MaterialIcon name="location_on" className="text-luxe-gold text-xl" />
                  <p className="font-sans font-semibold text-white text-sm">Chamber No. 27, F-8 Markaz, Islamabad</p>
                </div>
                <p className="font-sans text-white/60 text-xs">
                  Haroon Ur Rasheed Block, near PSO Pump. Walk-in and appointment consultations available.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp" className="text-center mb-12">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-3">
              Client Testimonials
            </span>
            <h2 className="font-serif text-[36px] text-luxe-black mb-3">What Clients Say</h2>
            <div className="h-0.5 w-16 bg-luxe-gold rounded-full mx-auto" />
          </AnimateOnScroll>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-8">
              {visible.map((t, i) => (
                <AnimateOnScroll key={t.id} animation="fadeInUp" delay={i * 0.1}>
                  <div className="bg-white rounded-xl border border-luxe-gold/20 hover:border-luxe-gold/50 hover:shadow-[0_16px_40px_rgba(15,27,45,0.1)] transition-all duration-300 p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-5">
                      {[...Array(t.rating)].map((_, j) => (
                        <MaterialIcon key={j} name="star" className="text-luxe-gold text-lg" />
                      ))}
                    </div>
                    <p className="font-sans text-luxe-grey text-sm leading-relaxed italic flex-1 mb-6">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4 pt-5 border-t border-luxe-gold/15">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-luxe-gold/30"
                      />
                      <div>
                        <p className="font-serif text-luxe-black text-base leading-tight">{t.name}</p>
                        <p className="font-sans text-xs text-luxe-gold mt-0.5">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentIdx ? 'bg-luxe-gold w-8 h-2.5' : 'bg-luxe-gold/25 w-2.5 h-2.5'
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <AnimateOnScroll animation="fadeInUp" className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-luxe-gold font-sans font-semibold text-sm hover:gap-3 transition-all tracking-wide"
            >
              Read All Testimonials
              <MaterialIcon name="arrow_forward" className="text-base" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ─────────────────────────────────────── */}
      <section className="bg-luxe-black py-10 px-margin-mobile md:px-margin-desktop border-t border-white/10">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-sans text-white/50 text-xs tracking-widest uppercase">Professional Credentials &amp; Memberships</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {['Advocate High Court', 'Islamabad Bar Council', 'Criminal Law', 'Family Law', '5.0 ★ Google Rated'].map((c) => (
                <span key={c} className="font-sans text-sm text-white/70 font-medium tracking-wide border-l border-luxe-gold/30 pl-5 first:border-0 first:pl-0">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

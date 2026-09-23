import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import CTABanner from '../components/layout/CTABanner'
import { useFirmConfig } from '../context/FirmConfigContext'

export default function About() {
  const { config } = useFirmConfig()
  const { attorney } = config

  return (
    <>
      <PageMeta
        title={`About ${attorney.name}`}
        description={`Meet ${attorney.name} — ${attorney.fullTitle}. ${attorney.bio.intro.slice(0, 150)}...`}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-luxe-black py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <AnimateOnScroll animation="fadeInLeft" className="space-y-6">
              <div className="trust-badge">
                <MaterialIcon name="verified" className="text-sm" />
                {attorney.barNumber}
              </div>

              <h1 className="font-serif text-[42px] md:text-[52px] leading-[1.1] text-white">
                {attorney.name}
              </h1>

              <p className="font-sans text-luxe-gold text-base font-medium tracking-wide">
                {attorney.fullTitle}
              </p>

              <p className="font-sans text-white/70 text-base leading-relaxed border-l-4 border-luxe-gold pl-5 italic">
                "{config.tagline}"
              </p>

              <p className="font-sans text-white/70 text-base leading-relaxed">
                {attorney.bio.intro}
              </p>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {['Advocate High Court', 'Islamabad Bar Council', 'Civil Rights Litigation', 'Disability Benefits', 'Will Writing'].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/15 text-white/70 font-sans text-xs font-semibold tracking-wide"
                  >
                    <MaterialIcon name="check_circle" className="text-luxe-gold text-sm" />
                    {c}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-luxe-gold text-luxe-black rounded-lg font-sans font-bold text-sm hover:bg-luxe-gold-dark transition-all"
                >
                  <MaterialIcon name="calendar_today" />
                  Book Consultation
                </Link>
                <a
                  href={config.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 rounded-lg font-sans font-semibold text-sm hover:border-luxe-gold hover:text-luxe-gold transition-all"
                >
                  <MaterialIcon name="open_in_new" />
                  LinkedIn
                </a>
              </div>
            </AnimateOnScroll>

            {/* Right — headshot */}
            <AnimateOnScroll animation="fadeInRight" delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.4)]">
                  <img
                    src={attorney.image}
                    alt={`${attorney.name} — ${attorney.fullTitle}`}
                    className="w-full h-[520px] object-cover object-top"
                  />
                </div>
                {/* Float card */}
                <div className="absolute -bottom-6 -left-6 bg-luxe-gold rounded-xl p-5 shadow-xl">
                  <p className="font-serif text-4xl font-bold text-luxe-black leading-none">{config.stats.yearsExperience}</p>
                  <p className="font-sans text-xs text-luxe-black/70 font-semibold tracking-wide mt-1">Years Experience</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-luxe-black border border-luxe-gold/40 rounded-xl p-4 shadow-xl">
                  <p className="font-serif text-2xl font-bold text-luxe-gold">{config.stats.clientsServed}</p>
                  <p className="font-sans text-xs text-white/60 font-semibold mt-0.5">Clients Served</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY & STATS ───────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Philosophy */}
            <AnimateOnScroll animation="fadeInLeft" className="space-y-6">
              <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">
                Advisory Philosophy
              </span>
              <h2 className="font-serif text-[34px] text-luxe-black leading-tight">
                {attorney.bio.headline}
              </h2>
              <div className="h-0.5 w-16 bg-luxe-gold rounded-full" />
              <p className="font-sans text-luxe-grey text-base leading-relaxed">
                {attorney.bio.philosophy}
              </p>
              <p className="font-sans text-luxe-grey text-base leading-relaxed">
                {attorney.bio.expertise}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { icon: 'insights', label: 'Strategic Thinking', sub: 'Proactive legal strategy' },
                  { icon: 'people', label: 'Client-Focused', sub: 'Personal attention to every case' },
                  { icon: 'task_alt', label: 'Proven Results', sub: config.stats.successRate + ' satisfaction' },
                  { icon: 'gavel', label: 'High Court', sub: 'Islamabad High Court advocate' },
                ].map((pt) => (
                  <div key={pt.label} className="flex items-start gap-3">
                    <MaterialIcon name={pt.icon} className="text-luxe-gold text-xl flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans font-semibold text-luxe-black text-sm">{pt.label}</p>
                      <p className="font-sans text-xs text-luxe-grey">{pt.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Stat cards */}
            <AnimateOnScroll animation="fadeInRight" delay={0.1} className="space-y-5">
              <div className="rounded-xl bg-luxe-black text-white p-8 border border-luxe-gold/30">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-white/50 mb-2">Satisfaction Rate</p>
                    <p className="font-serif text-6xl font-bold text-luxe-gold">{config.stats.successRate}</p>
                    <p className="font-sans text-sm text-white/70 mt-2">Across all advisory engagements</p>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-luxe-gold/10 flex items-center justify-center">
                    <MaterialIcon name="verified" className="text-luxe-gold text-3xl" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-luxe-gold p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-luxe-black/50 mb-2">Clients Served</p>
                    <p className="font-serif text-6xl font-bold text-luxe-black">{config.stats.clientsServed}</p>
                    <p className="font-sans text-sm text-luxe-black/70 mt-2">Individuals, SMEs &amp; Corporations</p>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-luxe-black/10 flex items-center justify-center">
                    <MaterialIcon name="groups" className="text-luxe-black text-3xl" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white border border-luxe-gold/20 p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-luxe-grey mb-2">Experience</p>
                    <p className="font-serif text-6xl font-bold text-luxe-black">{config.stats.yearsExperience}</p>
                    <p className="font-sans text-sm text-luxe-grey mt-2">Years in Legal Practice</p>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-luxe-gold/10 flex items-center justify-center">
                    <MaterialIcon name="history_edu" className="text-luxe-gold text-3xl" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CAREER TIMELINE ──────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp" className="text-center mb-14">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-3">
              Career Journey
            </span>
            <h2 className="font-serif text-[34px] text-luxe-black">The Professional Journey</h2>
            <div className="h-0.5 w-16 bg-luxe-gold rounded-full mx-auto mt-4" />
          </AnimateOnScroll>

          <div className="space-y-6">
            {attorney.milestones.map((m, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 0.08}>
                <div className="flex gap-6 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-sm flex-shrink-0 shadow-md ${
                      i % 2 === 0 ? 'bg-luxe-gold text-luxe-black' : 'bg-luxe-black text-white'
                    }`}>
                      {m.year.slice(-2)}
                    </div>
                    {i < attorney.milestones.length - 1 && (
                      <div className="w-px h-12 bg-luxe-gold/30 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="bg-luxe-cream rounded-xl border border-luxe-gold/15 p-6 hover:border-luxe-gold/40 hover:shadow-md transition-all">
                      <p className="font-sans text-xs uppercase tracking-widest text-luxe-gold font-bold mb-1">{m.year}</p>
                      <h3 className="font-serif text-xl text-luxe-black mb-2">{m.title}</h3>
                      <p className="font-sans text-sm text-luxe-grey leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS / AWARDS ─────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp" className="text-center mb-12">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-3">
              Credentials &amp; Memberships
            </span>
            <h2 className="font-serif text-[34px] text-luxe-black">Professional Recognition</h2>
            <div className="h-0.5 w-16 bg-luxe-gold rounded-full mx-auto mt-4 mb-4" />
            <p className="font-sans text-luxe-grey text-base max-w-xl mx-auto">
              Formally recognised by the Islamabad High Court with a litigation practice spanning civil rights, disability benefits, eviction, tenant disputes, traffic tickets, wills, and workers’ compensation matters.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {config.awards.map((award, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-luxe-gold/20 hover:border-luxe-gold/50 hover:shadow-lg transition-all p-8 text-center group">
                  <div className="w-14 h-14 rounded-full bg-luxe-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-luxe-gold/20 group-hover:scale-110 transition-all">
                    <MaterialIcon name={award.icon} className="text-luxe-gold text-3xl" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-luxe-gold/10 rounded-full text-luxe-gold font-sans text-xs font-bold tracking-wider mb-3">
                    {award.year}
                  </span>
                  <h3 className="font-serif text-base text-luxe-black group-hover:text-luxe-gold transition-colors">
                    {award.title}
                  </h3>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <CTABanner
        title="Ready to Discuss Your Legal Matter?"
        subtitle={`${config.firmName} is accepting new clients. Book a free consultation — no obligation.`}
      />
    </>
  )
}

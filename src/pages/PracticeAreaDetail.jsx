import { useParams, Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import CTABanner from '../components/layout/CTABanner'
import { getPracticeAreaBySlug } from '../data/practiceAreas'
import { useFirmConfig } from '../context/FirmConfigContext'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function PracticeAreaDetail() {
  const { slug } = useParams()
  const { config } = useFirmConfig()
  const area = getPracticeAreaBySlug(slug)
  const waUrl = buildWhatsAppUrl({ pathname: '/practice-areas', practiceArea: slug })

  if (!area) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center py-stack-lg px-margin-mobile">
        <MaterialIcon name="search_off" className="text-luxe-gold text-6xl mb-4" />
        <h1 className="font-serif text-2xl text-luxe-black mb-4">Service not found</h1>
        <Link to="/practice-areas" className="text-luxe-gold font-sans font-semibold hover:underline inline-flex items-center gap-1">
          <MaterialIcon name="arrow_back" className="text-base" />
          Back to Services
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageMeta
        title={area.title}
        description={area.longDescription?.slice(0, 160)}
        image={area.image}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-luxe-black py-stack-lg px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={area.image} alt={area.imageAlt} className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-luxe-black via-luxe-black/95 to-luxe-black/70" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto">
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-1 font-sans text-luxe-gold text-sm font-semibold mb-8 hover:gap-2 transition-all"
          >
            <MaterialIcon name="arrow_back" className="text-base" />
            Back to Services
          </Link>

          <AnimateOnScroll animation="fadeInUp">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-luxe-gold flex items-center justify-center flex-shrink-0">
                <MaterialIcon name={area.icon} className="text-luxe-black text-3xl" />
              </div>
              <div>
                <p className="font-sans text-xs text-luxe-gold uppercase tracking-widest font-semibold mb-1">
                  Advisory Service
                </p>
                <h1 className="font-serif text-[38px] md:text-[50px] text-white leading-tight">
                  {area.title}
                </h1>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-white/65 text-base max-w-3xl leading-relaxed">
              {area.description}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Sidebar */}
          <AnimateOnScroll animation="fadeInRight" delay={0.1} className="space-y-6 lg:order-2">
            {/* Services included */}
            <div className="bg-white rounded-xl border border-luxe-gold/20 p-7">
              <h3 className="font-serif text-xl text-luxe-black mb-5">What's Included</h3>
              <ul className="space-y-3">
                {area.services.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <MaterialIcon name="check_circle" className="text-luxe-gold text-lg flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-luxe-grey">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="bg-luxe-black rounded-xl p-7 border border-luxe-gold/30">
              <div className="w-10 h-10 rounded-lg bg-luxe-gold/15 flex items-center justify-center mb-4">
                <MaterialIcon name="calendar_today" className="text-luxe-gold text-xl" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">Ready to Begin?</h3>
              <p className="font-sans text-sm text-white/60 mb-5 leading-relaxed">
                Book a free 30-minute consultation with {config.attorney.name} to discuss your
                {' '}{area.title.toLowerCase()} requirements.
              </p>
              <Link
                to="/consultation"
                className="block w-full bg-luxe-gold text-luxe-black px-6 py-3 rounded-lg font-sans font-bold text-sm text-center hover:bg-luxe-gold-dark transition-all mb-3"
              >
                Book Free Consultation
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-white/20 text-white/70 px-6 py-3 rounded-lg font-sans font-semibold text-sm hover:border-luxe-gold hover:text-luxe-gold transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48C18.25 1.32 15.23 0 12 0c-6.63 0-12 5.28-12 11.72c0 2.16.56 4.32 1.6 6.12L0 24l6.48-1.6c1.92 1.04 3.84 1.6 5.52 1.6C18.36 24 24 18.72 24 12C24 8.76 22.8 5.64 20.52 3.48zM12 21.84c-1.92 0-3.76-.48-5.52-1.36L5.12 20.8l-2.4.56.56-2.4.32-1.36C3.28 15.68 2.8 14 2.8 12.08c0-5.28 4.32-9.6 9.6-9.6c2.56 0 5.04 1.04 6.8 2.8c1.76 1.76 2.8 4.24 2.8 6.8C21.6 17.52 17.28 21.84 12 21.84zm5.76-7.52c-.32-.16-1.92-.96-2.24-1.04-.32-.08-.56-.16-.8.16-.24.32-.92 1.04-1.12 1.28-.2.24-.4.24-.72.08-.32-.16-1.36-.48-2.56-1.6-.96-.84-1.6-1.88-1.76-2.2-.16-.32 0-.48.12-.64.12-.12.32-.32.48-.52.16-.2.2-.32.32-.56.12-.24.08-.4-.04-.56-.12-.16-.8-1.92-.96-2.56-.24-.56-.48-.48-.72-.48h-.64c-.24 0-.64.08-.96.4-.32.32-1.2 1.04-1.2 2.52 0 1.48 1.2 2.92 1.36 3.16.16.24 2.24 3.36 5.44 4.72.76.32 1.36.52 1.84.64.76.24 1.44.2 2 .12.64-.08 1.92-.76 2.16-1.52.24-.76.24-1.4.16-1.52-.08-.12-.32-.2-.64-.32z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Credentials */}
            <div className="bg-luxe-gold/8 border border-luxe-gold/25 rounded-xl p-6">
              <p className="font-sans text-xs uppercase tracking-widest text-luxe-gold font-bold mb-3">
                Your Advocate's Credentials
              </p>
              <div className="space-y-2">
                {['Advocate High Court', 'Islamabad Bar Council', 'Civil Rights Litigation', 'Disability Benefits & Evictions', '5.0 ★ Google Rated'].map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <MaterialIcon name="verified" className="text-luxe-gold text-sm" />
                    <span className="font-sans text-xs text-luxe-grey font-medium">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Main body */}
          <div className="lg:col-span-2 lg:order-1">
            <AnimateOnScroll animation="fadeInLeft" delay={0.1}>
              <img
                src={area.image}
                alt={area.imageAlt}
                className="w-full h-72 object-cover rounded-xl shadow-md mb-8"
              />

              <h2 className="font-serif text-[28px] text-luxe-black mb-4">Service Overview</h2>
              <p className="font-sans text-luxe-grey text-base leading-relaxed mb-8">
                {area.longDescription}
              </p>

              <h2 className="font-serif text-[28px] text-luxe-black mb-4">
                Why Choose {config.attorney.name}?
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  `${config.stats.yearsExperience} years of experience practising ${area.title.toLowerCase()} before Islamabad courts`,
                  'Enrolled Advocate High Court — right of audience before the Islamabad High Court',
                  'Transparent fixed-fee pricing — agreed upfront with no surprise billings',
                  'Direct access to Rana Muhammad Zahid Muneer throughout your entire matter',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <MaterialIcon name="check_circle" className="text-luxe-gold text-xl flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-base text-luxe-grey">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Timeline */}
              <div className="bg-white rounded-xl border border-luxe-gold/20 p-7">
                <h3 className="font-serif text-xl text-luxe-black mb-5">Typical Engagement Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(area.timeline).map(([phase, duration], i) => (
                    <div key={i} className="text-center bg-luxe-cream rounded-lg p-5 border border-luxe-gold/15">
                      <p className="font-sans text-xs uppercase tracking-widest text-luxe-gold font-bold mb-2">{phase}</p>
                      <p className="font-serif text-lg text-luxe-black">{duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next steps */}
              <div className="mt-8 bg-luxe-black rounded-xl p-7 border border-luxe-gold/30">
                <h3 className="font-serif text-xl text-white mb-4">Next Steps</h3>
                <ol className="space-y-3">
                  {[
                    'Book your free 30-minute consultation — video call, phone, or in person',
                    'Discuss your specific requirements in complete confidence',
                    'Receive a clear scope of work and fixed-fee proposal',
                    'We begin work once you are fully satisfied with the terms',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-luxe-gold text-luxe-black font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="font-sans text-sm text-white/70">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Start Your ${area.title} Engagement Today`}
        subtitle={`${config.attorney.name} is ready to provide the clarity and expertise you need.`}
      />
    </>
  )
}

import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import { practiceAreas } from '../data/practiceAreas'
import CTABanner from '../components/layout/CTABanner'

export default function PracticeAreas() {
  return (
    <>
      <PageMeta
        title="Advisory Services"
        description="Expert tax advisory, financial analysis, corporate law, accounting, ERP/SAP consulting, and cross-border advisory for Pakistan and Saudi Arabia."
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-black">
        <div className="max-w-container-max mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp">
            <div className="trust-badge mx-auto mb-6 w-fit">
              <MaterialIcon name="verified" className="text-sm" />
              CPA · ACMA · SOCPA · 25+ Years
            </div>
            <h1 className="font-serif text-[44px] md:text-[56px] text-white leading-tight mb-4">
              Our Advisory Services
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="max-w-2xl mx-auto font-sans text-white/65 text-base leading-relaxed mb-6">
              Comprehensive tax, financial and corporate advisory tailored to individuals, SMEs and
              multinationals operating between Pakistan and Saudi Arabia.
            </p>
            <div className="h-0.5 w-16 bg-luxe-gold rounded-full mx-auto" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, i) => (
              <AnimateOnScroll key={area.id} animation="fadeInUp" delay={i * 0.07}>
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-luxe-gold/20 hover:border-luxe-gold/60 hover:shadow-[0_20px_48px_rgba(15,27,45,0.12)] transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={area.image}
                      alt={area.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxe-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-luxe-gold flex items-center justify-center">
                        <MaterialIcon name={area.icon} className="text-luxe-black text-lg" />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-7 flex flex-col flex-1">
                    <h2 className="font-serif text-xl text-luxe-black mb-3 group-hover:text-luxe-gold transition-colors leading-tight">
                      {area.title}
                    </h2>
                    <p className="font-sans text-sm text-luxe-grey leading-relaxed flex-1 mb-5">
                      {area.description}
                    </p>

                    {/* Sub-areas preview */}
                    <div className="space-y-1.5 mb-5">
                      {area.services.slice(0, 3).map((s, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <MaterialIcon name="check_circle" className="text-luxe-gold text-sm flex-shrink-0" />
                          <span className="font-sans text-xs text-luxe-grey">{s}</span>
                        </div>
                      ))}
                      {area.services.length > 3 && (
                        <p className="font-sans text-xs text-luxe-gold pl-5">
                          +{area.services.length - 3} more
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-luxe-gold font-sans font-semibold text-sm group-hover:gap-2 transition-all border-t border-luxe-gold/15 pt-4">
                      Learn More
                      <MaterialIcon name="arrow_forward" className="text-base" />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS / INFO STRIP ─────────────────────────────────── */}
      <section className="bg-luxe-black py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp" className="text-center mb-12">
            <h2 className="font-serif text-[32px] text-white mb-3">How We Work</h2>
            <p className="font-sans text-white/55 text-sm max-w-xl mx-auto">
              A structured, transparent engagement process from first call to final delivery.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'phone_in_talk',
                step: '01',
                title: 'Free Initial Consultation',
                items: ['30-minute discovery call', 'Understand your situation', 'No obligation, no pressure'],
              },
              {
                icon: 'description',
                step: '02',
                title: 'Assessment & Proposal',
                items: ['Scope of work defined', 'Fixed fee quoted upfront', 'Timeline agreed in writing'],
              },
              {
                icon: 'task_alt',
                step: '03',
                title: 'Engagement & Delivery',
                items: ['Regular progress updates', 'Deliverables on schedule', 'Ongoing support available'],
              },
            ].map((card, i) => (
              <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-luxe-gold/40 transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-serif text-4xl text-luxe-gold/30 font-bold leading-none">{card.step}</span>
                    <div className="w-10 h-10 rounded-lg bg-luxe-gold/10 flex items-center justify-center">
                      <MaterialIcon name={card.icon} className="text-luxe-gold text-xl" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg text-white mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 font-sans text-sm text-white/60">
                        <MaterialIcon name="check_circle" className="text-luxe-gold text-sm flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

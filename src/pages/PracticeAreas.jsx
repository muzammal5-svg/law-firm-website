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
        title="Practice Areas"
        description="Expert legal representation in property law, family law, criminal defense, business law, and cyber crime. Specialized advocacy tailored to your needs."
      />

      {/* Luxury Hero */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center bg-luxe-cream">
        <AnimateOnScroll animation="fadeInUp">
          <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">Expertise</span>
          <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black mb-stack-md">
            Strategic Legal Advocacy
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeInUp" delay={0.1}>
          <p className="max-w-2xl mx-auto text-luxe-grey font-sans text-body-lg mb-stack-lg">
            Navigating complex legal landscapes with unwavering authority and empathetic clarity. Select an area of practice below to learn how we protect your interests.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark mx-auto rounded-full" />
        </AnimateOnScroll>
      </section>

      {/* Practice Area Cards - Luxury Design - Grid Layout */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg py-stack-lg bg-luxe-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {practiceAreas.map((area) => (
            <AnimateOnScroll key={area.id} animation="fadeInUp">
              <Link
                to={`/practice-areas/${area.slug}`}
                className="group luxury-card h-full flex flex-col bg-luxe-cream rounded-lg p-stack-md border border-luxe-gold/20 hover:border-luxe-gold/40 hover:shadow-luxury-lg transition-all"
              >
                {/* Image */}
                <div className="h-48 rounded-lg bg-cover bg-center shadow-luxury-md overflow-hidden mb-stack-md" style={{ backgroundImage: `url(${area.image})` }}></div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-stack-sm">
                    <div className="w-12 h-12 rounded-lg bg-luxe-gold/10 flex items-center justify-center text-2xl group-hover:bg-luxe-gold/20 transition-colors flex-shrink-0">
                      <MaterialIcon name={area.icon} className="text-luxe-gold" />
                    </div>
                    <h2 className="font-serif text-headline-sm text-luxe-black">{area.title}</h2>
                  </div>
                  
                  <p className="font-sans text-body-md text-luxe-grey mb-stack-md flex-1">{area.description}</p>
                  
                  <div className="inline-flex items-center text-luxe-gold font-sans font-semibold text-sm tracking-wide group-hover:gap-2 gap-1 transition-all">
                    Learn More <MaterialIcon name="arrow_forward" className="text-xs" />
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Info Cards - Luxury Design */}
      <section className="bg-luxe-light py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { icon: 'analytics', title: 'Our Process', items: ['Initial Strategy Audit', 'Evidence Gathering', 'Resolution & Closure'] },
              { icon: 'schedule', title: 'Timeline', items: ['Consultation: 24-48h', 'Discovery: 1-4 weeks', 'Resolution: Case dependent'] },
              { icon: 'payments', title: 'Fee Structure', items: ['Transparent billing', 'Multiple options', 'Flexible plans available'] },
            ].map((card, idx) => (
              <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div className="luxury-card bg-luxe-cream p-stack-md rounded-lg shadow-luxury-sm border border-luxe-gold/20 hover:shadow-luxury-md transition-all">
                  <div className="flex items-center gap-3 mb-stack-sm">
                    <div className="w-10 h-10 rounded-lg bg-luxe-gold/10 flex items-center justify-center">
                      <MaterialIcon name={card.icon} className="text-luxe-gold text-2xl" />
                    </div>
                    <h3 className="font-serif text-headline-sm text-luxe-black">{card.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="font-sans text-body-md text-luxe-grey flex items-start gap-2">
                        <MaterialIcon name="check_circle" className="text-luxe-gold text-sm flex-shrink-0 pt-1" />
                        <span>{item}</span>
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

import { useParams, Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import CTABanner from '../components/layout/CTABanner'
import { getPracticeAreaBySlug } from '../data/practiceAreas'

export default function PracticeAreaDetail() {
  const { slug } = useParams()
  const area = getPracticeAreaBySlug(slug)

  if (!area) {
    return (
      <div className="py-stack-lg text-center">
        <h1 className="font-serif text-headline-md text-luxe-black mb-4">Practice area not found</h1>
        <Link to="/practice-areas" className="text-luxe-gold font-sans font-semibold hover:underline">
          Back to Practice Areas
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageMeta
        title={area.title}
        description={area.longDescription}
        image={area.image}
      />

      {/* Luxury Hero */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <Link to="/practice-areas" className="font-sans text-luxe-gold font-semibold text-sm tracking-wide mb-stack-md inline-flex items-center gap-1 hover:gap-2 transition-all">
            <MaterialIcon name="arrow_back" />
            Back to Practice Areas
          </Link>
          
          <AnimateOnScroll animation="fadeInUp">
            <div className="flex items-center gap-4 mb-stack-lg">
              <div className="w-20 h-20 rounded-lg bg-luxe-gold/10 flex items-center justify-center text-4xl text-luxe-gold">
                <MaterialIcon name={area.icon} />
              </div>
              <div>
                <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black">
                  {area.title} Law
                </h1>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-body-lg text-luxe-grey max-w-3xl">
              {area.longDescription}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Sidebar */}
          <AnimateOnScroll className="space-y-6" animation="fadeInRight" delay={0.1}>
            <div className="luxury-card bg-luxe-light p-stack-md rounded-lg border border-luxe-gold/20">
              <h3 className="font-serif text-headline-sm text-luxe-black mb-stack-md">Services We Provide</h3>
              <ul className="space-y-3">
                {area.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <MaterialIcon name="check_circle" className="text-luxe-gold text-lg flex-shrink-0 mt-1" />
                    <span className="font-sans text-body-md text-luxe-grey">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="luxury-card bg-luxe-gold text-luxe-black p-stack-md rounded-lg border border-luxe-gold/20">
              <h3 className="font-serif text-headline-sm mb-stack-md">Ready to Get Started?</h3>
              <p className="font-sans text-body-md mb-stack-md text-luxe-black/80">
                Book a consultation with Julian to discuss your specific situation.
              </p>
              <Link
                to="/consultation"
                className="block w-full bg-luxe-black text-luxe-cream px-6 py-3 rounded-lg font-sans font-semibold text-sm text-center hover:shadow-luxury-lg transition-all tracking-wide"
              >
                Schedule Now
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Main Content */}
          <div className="md:col-span-2">
            <AnimateOnScroll animation="fadeInLeft" delay={0.1}>
              <div className="space-y-stack-lg">
                <img
                  src={area.image}
                  alt={area.imageAlt}
                  className="w-full h-80 object-cover rounded-lg shadow-luxury-md"
                />

                <div>
                  <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Overview</h2>
                  <p className="font-sans text-body-lg text-luxe-grey leading-relaxed mb-stack-lg">
                    {area.longDescription}
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Why Choose Julian Thorne?</h2>
                  <ul className="space-y-3 mb-stack-lg">
                    <li className="flex gap-3">
                      <MaterialIcon name="check_circle" className="text-luxe-gold text-lg flex-shrink-0 mt-1" />
                      <span className="font-sans text-body-md text-luxe-grey">15+ years of specialized experience in {area.title.toLowerCase()} law</span>
                    </li>
                    <li className="flex gap-3">
                      <MaterialIcon name="check_circle" className="text-luxe-gold text-lg flex-shrink-0 mt-1" />
                      <span className="font-sans text-body-md text-luxe-grey">98% success rate in achieving favorable outcomes</span>
                    </li>
                    <li className="flex gap-3">
                      <MaterialIcon name="check_circle" className="text-luxe-gold text-lg flex-shrink-0 mt-1" />
                      <span className="font-sans text-body-md text-luxe-grey">Personalized approach that combines legal expertise with empathy</span>
                    </li>
                    <li className="flex gap-3">
                      <MaterialIcon name="check_circle" className="text-luxe-gold text-lg flex-shrink-0 mt-1" />
                      <span className="font-sans text-body-md text-luxe-grey">Transparent communication and flexible fee structures</span>
                    </li>
                  </ul>
                </div>

                <div className="luxury-card bg-luxe-light p-stack-md rounded-lg border border-luxe-gold/20">
                  <h3 className="font-serif text-headline-sm text-luxe-black mb-2">Next Steps</h3>
                  <ol className="space-y-2 list-decimal list-inside font-sans text-body-md text-luxe-grey">
                    <li>Schedule your free 30-minute consultation</li>
                    <li>Discuss your situation in confidential detail</li>
                    <li>Receive a clear action plan and fee estimate</li>
                    <li>Begin working together on your resolution</li>
                  </ol>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-luxe-light py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp" className="text-center mb-stack-lg">
            <h2 className="font-serif text-headline-md text-luxe-black">Expected Timeline</h2>
            <p className="font-sans text-body-md text-luxe-grey mt-2">Each case is unique, but here's what you can typically expect:</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {Object.entries(area.timeline).map(([phase, duration], idx) => (
              <AnimateOnScroll key={phase} animation="fadeInUp" delay={idx * 0.1}>
                <div className="luxury-card bg-luxe-cream p-stack-md rounded-lg shadow-luxury-sm border border-luxe-gold/20 text-center hover:shadow-luxury-md transition-all">
                  <h3 className="font-serif text-headline-sm text-luxe-black mb-stack-sm capitalize">
                    {phase.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="font-serif text-display-lg-mobile text-luxe-gold mb-2">{duration}</p>
                  <p className="font-sans text-body-md text-luxe-grey text-sm">Typical timeframe</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={`Start Your ${area.title} Law Matter Today`}
        subtitle="Julian Thorne is ready to provide the clarity and advocacy you need."
      />
    </>
  )
}

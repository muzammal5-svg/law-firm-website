import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import CTABanner from '../components/layout/CTABanner'

export default function About() {
  const milestones = [
    { year: '2008', title: 'Academic Foundation', desc: 'Graduated LLM with top honors, specializing in International Jurisprudence.' },
    { year: '2012', title: 'Senior Associate', desc: 'Appointed Senior Associate at a Tier-1 firm, leading the dispute resolution wing.' },
    { year: '2018', title: 'Independent Practice', desc: 'Founded Thorne Advocates to provide personalized, high-stakes legal counsel.' },
    { year: '2023', title: 'Award for Excellence', desc: 'Recognized by the National Law Bar for outstanding commitment to client justice.' },
  ]

  return (
    <>
      <PageMeta
        title="About Julian Thorne"
        description="Meet Advocate Julian Thorne - 15+ years of legal experience specializing in property, family, criminal, business, and cyber crime law."
      />

      {/* Luxury Hero Section */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          {/* Badge */}
          <AnimateOnScroll animation="fadeInUp" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-luxe-gold/40 bg-luxe-gold/5 mb-stack-md">
            <MaterialIcon name="verified_user" className="text-lg text-luxe-gold" />
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold">Bar Council: BC/12345/67</span>
          </AnimateOnScroll>

          {/* Main Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center mb-stack-lg">
            {/* Left Content */}
            <AnimateOnScroll animation="fadeInLeft" className="space-y-stack-md">
              <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black leading-tight">
                Advocate Julian Thorne
              </h1>
              <p className="font-sans text-body-lg text-luxe-grey italic border-l-4 border-luxe-gold pl-6">
                &quot;Providing clarity in complex legal landscapes.&quot;
              </p>
              <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                With over 15 years of dedicated legal practice, Julian Thorne stands as a trusted guide through life's most challenging legal moments. His approach combines unwavering legal expertise with genuine empathy for every client's unique situation.
              </p>

              {/* Credentials */}
              <div className="flex gap-4 pt-stack-md">
                <div className="p-4 bg-luxe-cream border border-luxe-gold/20 rounded-lg shadow-luxury-sm">
                  <span className="font-serif text-headline-sm text-luxe-black block">LLB</span>
                  <p className="font-sans text-caption text-luxe-grey">Bachelor of Laws</p>
                </div>
                <div className="p-4 bg-luxe-cream border border-luxe-gold/20 rounded-lg shadow-luxury-sm">
                  <span className="font-serif text-headline-sm text-luxe-black block">LLM</span>
                  <p className="font-sans text-caption text-luxe-grey">Master of Laws</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right Image */}
            <AnimateOnScroll animation="fadeInRight" delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-luxury-lg">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC5dvvrYM5-uPdEnlqAZbEu5Qm_LB06qp1TlTrFKbkWZM8Rf4dNzuGZOiqbMTgfmBGDNFW4LTAm5UJDQPZrXPwzpAkUMtGTu8aCOWBcCzgxXDvtqvyE5djx9z76WxIxTXom-zn8ygmoaCXYLOrxlpbEFWMonc9r8nxAa3Vv4-fvHoU-aj9kUvUkRpQv7IBCO5A3suWL6Yr-anYxlyjdqCAJ737eP2vCgR8C7IPkFJjGAOra_hSkeiUd-8rA9xuaqIuwwXdXZSrrt0"
                  alt="Advocate Julian Thorne portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Philosophy + Stats Section */}
      <section className="py-stack-lg bg-luxe-light px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            {/* Left Content - Philosophy */}
            <AnimateOnScroll className="space-y-stack-md" animation="fadeInLeft">
              <div>
                <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-3">Julian's Philosophy</span>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">
                  Empathetic Representation, Elite Expertise
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark rounded-full mb-stack-md"></div>
              </div>

              <div className="space-y-4">
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  Whether resolving intricate corporate disputes or sensitive personal litigation, Julian focuses on distilling complexity into actionable clarity. His philosophy is simple: <span className="text-luxe-black font-semibold">every client deserves a protector who understands the human stakes as well as the legal ones.</span>
                </p>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  Julian's track record spans high-stakes negotiations, regulatory matters, and contentious litigation across property, family, criminal, business, and cyber crime law. Each case receives his personal attention and strategic insight.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <MaterialIcon name="check_circle" className="text-luxe-gold text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-semibold text-luxe-black text-sm">Strategic Thinking</p>
                    <p className="font-sans text-caption text-luxe-grey">Proactive solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MaterialIcon name="check_circle" className="text-luxe-gold text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-semibold text-luxe-black text-sm">Client Focused</p>
                    <p className="font-sans text-caption text-luxe-grey">Personal attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MaterialIcon name="check_circle" className="text-luxe-gold text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-semibold text-luxe-black text-sm">Proven Results</p>
                    <p className="font-sans text-caption text-luxe-grey">98% success rate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MaterialIcon name="check_circle" className="text-luxe-gold text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-semibold text-luxe-black text-sm">Transparent</p>
                    <p className="font-sans text-caption text-luxe-grey">Clear communication</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right Stats - Clean Card Design */}
            <AnimateOnScroll className="space-y-6" animation="fadeInRight" delay={0.1}>
              {/* Stat 1 */}
              <div className="luxury-card bg-gradient-to-br from-luxe-black to-luxe-dark text-luxe-cream p-8 rounded-xl shadow-luxury-md border border-luxe-gold/30 hover:shadow-luxury-lg hover:border-luxe-gold/50 transition-all group">
                <div className="flex items-end gap-4">
                  <div className="flex-1">
                    <p className="font-sans text-sm text-luxe-black mb-2 tracking-wide uppercase">Success Rate</p>
                    <h3 className="font-serif text-6xl font-bold text-luxe-gold mb-3">98%</h3>
                    <p className="font-sans text-body-md text-luxe-black leading-relaxed">Resolution Success Rate with proven outcomes</p>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-luxe-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-luxe-gold/20 transition-colors">
                    <MaterialIcon name="gavel" className="text-luxe-gold text-4xl" />
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="luxury-card bg-gradient-to-br from-luxe-gold to-luxe-gold-dark text-luxe-black p-8 rounded-xl shadow-luxury-md border border-luxe-gold/50 hover:shadow-luxury-lg transition-all group">
                <div className="flex items-end gap-4">
                  <div className="flex-1">
                    <p className="font-sans text-sm text-luxe-black/70 mb-2 tracking-wide uppercase">Global Reach</p>
                    <h3 className="font-serif text-6xl font-bold text-luxe-black mb-3">500+</h3>
                    <p className="font-sans text-body-md text-luxe-black/90 leading-relaxed">Clients advised across the globe</p>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-luxe-black/10 flex items-center justify-center flex-shrink-0 group-hover:bg-luxe-black/20 transition-colors">
                    <MaterialIcon name="public" className="text-luxe-black text-4xl" />
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="luxury-card bg-luxe-light p-8 rounded-xl shadow-luxury-md border border-luxe-gold/20 hover:shadow-luxury-lg hover:border-luxe-gold/40 transition-all group">
                <div className="flex items-end gap-4">
                  <div className="flex-1">
                    <p className="font-sans text-sm text-luxe-grey mb-2 tracking-wide uppercase">Experience</p>
                    <h3 className="font-serif text-6xl font-bold text-luxe-black mb-3">15+</h3>
                    <p className="font-sans text-body-md text-luxe-grey leading-relaxed">Years mastering complex legal matters</p>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-luxe-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-luxe-gold/20 transition-colors">
                    <MaterialIcon name="psychology" className="text-luxe-gold text-4xl" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-stack-lg bg-luxe-cream px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          {/* Section Header */}
          <AnimateOnScroll animation="fadeInUp" className="text-center mb-stack-lg">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-3">Career Journey</span>
            <h2 className="font-serif text-headline-md text-luxe-black">The Professional Journey</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark mx-auto rounded-full mt-4"></div>
          </AnimateOnScroll>

          {/* Timeline */}
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div className="flex gap-6 md:gap-8">
                  {/* Timeline Marker */}
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-sm ${
                      idx % 2 === 0 
                        ? 'bg-luxe-gold text-luxe-black' 
                        : 'bg-luxe-black text-luxe-cream'
                    } shadow-luxury-md`}>
                      {milestone.year.slice(-2)}
                    </div>
                    {idx < milestones.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-luxe-gold/40 to-transparent mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <div className="luxury-card bg-luxe-light p-6 rounded-lg border border-luxe-gold/20 hover:shadow-luxury-md transition-all">
                      <p className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold mb-2">{milestone.year}</p>
                      <h3 className="font-serif text-headline-sm text-luxe-black mb-2">{milestone.title}</h3>
                      <p className="font-sans text-body-md text-luxe-grey">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-stack-lg bg-luxe-black text-luxe-cream px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center space-y-stack-md">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="font-serif text-headline-md text-luxe-cream">Ready to Find Your Clarity?</h2>
            <p className="font-sans text-body-lg text-luxe-cream/80 max-w-2xl mx-auto">
              Julian Thorne is currently accepting consultations for high-priority legal matters. Secure your direct line of communication and strategic guidance today.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.1} className="flex flex-col md:flex-row justify-center gap-4 pt-4">
            <Link
              to="/consultation"
              className="inline-flex items-center mb-4 justify-center px-8 py-4 bg-luxe-gold rounded-lg font-sans font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-luxury-lg hover:translate-y-[-2px]"
              style={{ color: '#000000' }}
            >
              Schedule Consultation
            </Link>
            <button
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-luxe-gold text-luxe-gold rounded-lg font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-luxe-gold/10"
            >
              <MaterialIcon name="download" className="mr-2" />
              Download CV
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

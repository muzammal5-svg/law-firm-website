import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'

export default function TermsOfService() {
  return (
    <>
      <PageMeta
        title="Terms of Service"
        description="Review the terms and conditions for using Counsel & Clarity's legal services and website."
      />

      {/* Luxury Hero */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">Legal</span>
            <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black mb-stack-md">
              Terms of Service
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-body-lg text-luxe-grey">
              Please read these terms carefully before using our website and services.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="fadeInUp">
            <div className="space-y-stack-lg">
              {/* Last Updated */}
              <div className="luxury-card bg-luxe-light p-stack-md rounded-lg border border-luxe-gold/20">
                <p className="font-sans text-body-md text-luxe-grey">
                  <strong>Last Updated:</strong> July 12, 2026
                </p>
              </div>

              {/* Acceptance */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">1. Acceptance of Terms</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              {/* Use License */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">2. Use License</h2>
                <p className="font-sans text-body-lg text-luxe-grey mb-4 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Counsel & Clarity's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Modify or copy the materials',
                    'Use the materials for any commercial purpose or for any public display',
                    'Attempt to decompile or reverse engineer any software contained on the website',
                    'Remove any copyright or other proprietary notations from the materials',
                    'Transmit the materials to anyone or "mirror" the materials on any other server',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <MaterialIcon name="close_circle" className="text-luxe-gold text-sm mt-1 flex-shrink-0" />
                      <span className="font-sans text-body-md text-luxe-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">3. Disclaimer</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  The materials on Counsel & Clarity's website are provided on an 'as is' basis. Counsel & Clarity makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              {/* Limitations */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">4. Limitations</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  In no event shall Counsel & Clarity or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
                </p>
              </div>

              {/* Accuracy of Materials */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">5. Accuracy of Materials</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  The materials appearing on Counsel & Clarity's website could include technical, typographical, or photographic errors. Counsel & Clarity does not warrant that any of the materials on the website are accurate, complete, or current. Counsel & Clarity may make changes to the materials contained on the website at any time without notice.
                </p>
              </div>

              {/* Links */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">6. Links</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  Counsel & Clarity has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Counsel & Clarity of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              {/* Modifications */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">7. Modifications</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  Counsel & Clarity may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">8. Governing Law</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of England and Wales, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              {/* Contact */}
              <div className="luxury-card bg-luxe-light p-stack-md rounded-lg border border-luxe-gold/20">
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Questions?</h2>
                <p className="font-sans text-body-md text-luxe-grey mb-2">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-1 font-sans text-body-md text-luxe-grey">
                  <p><strong>Email:</strong> <a href="mailto:contact@counselclarity.com" className="text-luxe-gold hover:underline">contact@counselclarity.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+442079460123" className="text-luxe-gold hover:underline">+44 (0) 20 7946 0123</a></p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Back to Home */}
      <section className="bg-luxe-light py-stack-md px-margin-mobile md:px-margin-desktop text-center">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-luxe-gold font-sans font-semibold hover:gap-3 transition-all"
        >
          <MaterialIcon name="arrow_back" />
          Back to Home
        </Link>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'

export default function Disclaimer() {
  return (
    <>
      <PageMeta
        title="Legal Disclaimer"
        description="Important legal disclaimer regarding information provided by Counsel & Clarity."
      />

      {/* Luxury Hero */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">Legal</span>
            <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black mb-stack-md">
              Legal Disclaimer
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-body-lg text-luxe-grey">
              Important information about the use of this website and our services.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="fadeInUp">
            <div className="space-y-stack-lg">
              {/* Warning Box */}
              <div className="luxury-card bg-luxe-gold/10 p-stack-md rounded-lg border border-luxe-gold/40">
                <div className="flex gap-3">
                  <MaterialIcon name="warning" className="text-luxe-gold text-2xl flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-headline-sm text-luxe-black mb-2">Important</h3>
                    <p className="font-sans text-body-md text-luxe-grey">
                      This disclaimer applies to all information contained on this website and the services provided by Counsel & Clarity. Please read carefully.
                    </p>
                  </div>
                </div>
              </div>

              {/* No Attorney-Client Relationship */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">No Attorney-Client Relationship</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  By visiting this website or sending us an email through this website, you are not creating an attorney-client relationship between you and Counsel & Clarity or any of our attorneys. An attorney-client relationship is only created when Counsel & Clarity has agreed to represent you in writing and you have signed a representation agreement.
                </p>
              </div>

              {/* No Legal Advice */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Website Content Not Legal Advice</h2>
                <p className="font-sans text-body-lg text-luxe-grey mb-4 leading-relaxed">
                  The information provided on this website, including all text, graphics, and links, is for informational purposes only and should not be construed as legal advice. The information is not intended to create, and receipt of it does not constitute, an attorney-client relationship.
                </p>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  This website may provide information on legal matters but such information is not a substitute for professional legal advice. We strongly recommend that you consult with a qualified attorney regarding your specific legal situation.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Limitation of Liability</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  Under no circumstances shall Counsel & Clarity, its attorneys, staff, or representatives be liable for any damages, direct or indirect, resulting from information obtained from or transmitted through this website. This includes loss of profits, business interruption, or any other loss.
                </p>
              </div>

              {/* Accuracy Disclaimer */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Accuracy of Information</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  While we strive to keep information on this website current and accurate, we make no warranties or representations regarding the accuracy, completeness, or timeliness of any information. Laws change frequently, and the information on this site may not reflect the most current legal developments.
                </p>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Confidentiality Notice</h2>
                <p className="font-sans text-body-lg text-luxe-grey mb-4 leading-relaxed">
                  If you send us an email or any information through this website:
                </p>
                <ul className="space-y-3 mb-4">
                  {[
                    'We will not treat the email or information as confidential or privileged',
                    'An attorney-client relationship will not be established',
                    'You should not disclose any confidential information through this website',
                    'Any information you send may be used without restriction',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <MaterialIcon name="info" className="text-luxe-gold text-lg flex-shrink-0 mt-1" />
                      <span className="font-sans text-body-md text-luxe-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">External Links Disclaimer</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  This website may contain links to external websites. We are not responsible for the content, accuracy, or practices of external websites. The inclusion of any link does not imply endorsement or responsibility. Use of external websites is at your own risk.
                </p>
              </div>

              {/* No Warranty */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">No Warranty</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  This website and all information contained herein are provided on an "as is" basis without any warranty, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>

              {/* Results Disclaimer */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Results Not Guaranteed</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  Past results do not guarantee future outcomes. Every legal matter is unique and depends on specific facts and circumstances. Any statements regarding potential outcomes are not guarantees and should not be relied upon as predictions of results in your case.
                </p>
              </div>

              {/* Contact */}
              <div className="luxury-card bg-luxe-light p-stack-md rounded-lg border border-luxe-gold/20">
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Legal Consultation</h2>
                <p className="font-sans text-body-md text-luxe-grey mb-3">
                  If you require professional legal advice, we encourage you to contact us to discuss your specific legal needs. To schedule a consultation with Counsel & Clarity:
                </p>
                <div className="space-y-2 font-sans text-body-md text-luxe-grey">
                  <p><strong>Email:</strong> <a href="mailto:contact@counselclarity.com" className="text-luxe-gold hover:underline">contact@counselclarity.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+442079460123" className="text-luxe-gold hover:underline">+44 (0) 20 7946 0123</a></p>
                  <p><strong>Address:</strong> Chancery Lane, London, WC2A 1LS, United Kingdom</p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center pt-stack-lg border-t border-luxe-gold/10">
                <p className="font-sans text-caption text-luxe-grey">
                  Last Updated: July 12, 2026
                </p>
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

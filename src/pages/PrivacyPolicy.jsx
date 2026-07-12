import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        description="Learn how Counsel & Clarity protects your personal information and respects your privacy."
      />

      {/* Luxury Hero */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">Legal</span>
            <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black mb-stack-md">
              Privacy Policy
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-body-lg text-luxe-grey">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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

              {/* Introduction */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Introduction</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  Counsel & Clarity ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, disclosure, and safeguard of your personal information when you visit our website and use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Information We Collect</h2>
                <p className="font-sans text-body-lg text-luxe-grey mb-4 leading-relaxed">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-3">
                  {[
                    { title: 'Personal Information', desc: 'Name, email address, phone number, and other details you provide through contact forms.' },
                    { title: 'Case Information', desc: 'Details about your legal matter shared during consultations, strictly confidential.' },
                    { title: 'Usage Data', desc: 'Information about how you interact with our website, including pages visited and time spent.' },
                    { title: 'Cookies', desc: 'Small files stored on your device to remember preferences and improve your experience.' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <MaterialIcon name="check_circle" className="text-luxe-gold text-lg flex-shrink-0 mt-1" />
                      <div>
                        <strong className="font-sans text-body-md text-luxe-black">{item.title}:</strong>
                        <p className="font-sans text-body-md text-luxe-grey">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">How We Use Your Information</h2>
                <p className="font-sans text-body-lg text-luxe-grey mb-4 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Provide and improve our legal services',
                    'Process your consultation requests',
                    'Send you updates about your case (when applicable)',
                    'Communicate with you about inquiries',
                    'Enhance our website functionality',
                    'Comply with legal obligations',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <MaterialIcon name="arrow_forward" className="text-luxe-gold text-sm mt-1 flex-shrink-0" />
                      <span className="font-sans text-body-md text-luxe-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Protection */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Data Protection & Security</h2>
                <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Your Rights</h2>
                <p className="font-sans text-body-lg text-luxe-grey mb-4 leading-relaxed">
                  Under applicable data protection laws, you may have the right to:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Access your personal information',
                    'Correct inaccurate data',
                    'Request deletion of your information',
                    'Opt-out of marketing communications',
                    'Request a copy of your data',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <MaterialIcon name="check_circle" className="text-luxe-gold text-sm mt-1 flex-shrink-0" />
                      <span className="font-sans text-body-md text-luxe-grey">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-body-md text-luxe-grey">
                  To exercise these rights, contact us at <a href={`mailto:contact@counselclarity.com`} className="text-luxe-gold hover:underline">contact@counselclarity.com</a>.
                </p>
              </div>

              {/* Contact Us */}
              <div className="luxury-card bg-luxe-light p-stack-md rounded-lg border border-luxe-gold/20">
                <h2 className="font-serif text-headline-md text-luxe-black mb-stack-md">Contact Us</h2>
                <p className="font-sans text-body-md text-luxe-grey mb-2">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-1 font-sans text-body-md text-luxe-grey">
                  <p><strong>Email:</strong> <a href="mailto:contact@counselclarity.com" className="text-luxe-gold hover:underline">contact@counselclarity.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+442079460123" className="text-luxe-gold hover:underline">+44 (0) 20 7946 0123</a></p>
                  <p><strong>Address:</strong> Chancery Lane, London, WC2A 1LS, United Kingdom</p>
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

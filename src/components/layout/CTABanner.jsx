import { Link } from 'react-router-dom'
import MaterialIcon from '../ui/MaterialIcon'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

/**
 * Call-to-action banner sections with luxury design
 */
export default function CTABanner({ 
  title = 'Transform Your Legal Challenges',
  subtitle = 'Expert counsel tailored to your unique circumstances',
  variant = 'primary'
}) {
  const whatsappUrl = buildWhatsAppUrl()
  
  const bgClass = variant === 'primary' 
    ? 'bg-gradient-to-r from-luxe-black via-luxe-dark to-luxe-black text-luxe-cream' 
    : 'bg-luxe-dark text-luxe-light'

  return (
    <section className={`${bgClass} py-stack-lg px-margin-mobile md:px-margin-desktop relative overflow-hidden`}>
      {/* Premium Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxe-gold/8 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-luxe-gold/8 rounded-full -ml-36 -mb-36 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-luxe-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className={`relative z-10 max-w-4xl mx-auto text-center`}>
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-luxe-gold/30 bg-luxe-gold/5 mb-6">
          <div className="w-2 h-2 rounded-full bg-luxe-gold animate-pulse" />
          <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold">
            Limited Availability
          </span>
        </div>

        {/* Premium Headline */}
        <h2 className="font-serif text-display-lg-mobile md:text-display-lg mb-6 leading-tight text-luxe-cream">
          {title}
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-luxe-gold/50" />
          <p className="font-sans text-body-lg text-luxe-cream/80 max-w-2xl">
            {subtitle}
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-luxe-gold/50" />
        </div>

        {/* Action Buttons - Premium Styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-stack-md">
          <Link
            to="/consultation"
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark rounded-xl font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-luxury-xl hover:-translate-y-1 active:translate-y-0 transform"
            style={{ color: '#000000' }}
          >
            <MaterialIcon name="calendar_today" className="mr-3 text-lg" />
            Schedule Consultation
            <MaterialIcon name="arrow_forward" className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 border-2 border-luxe-gold text-luxe-gold rounded-xl font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-luxe-gold/10 hover:shadow-luxury-lg hover:-translate-y-1 transform"
          >
            {/* WhatsApp Logo - Official - Gold/Current Color */}
            <svg className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.52 3.48C18.25 1.32 15.23 0 12 0c-6.63 0-12 5.28-12 11.72c0 2.16.56 4.32 1.6 6.12L0 24l6.48-1.6c1.92 1.04 3.84 1.6 5.52 1.6C18.36 24 24 18.72 24 12C24 8.76 22.8 5.64 20.52 3.48zM12 21.84c-1.92 0-3.76-.48-5.52-1.36L5.12 20.8l-2.4.56.56-2.4.32-1.36C3.28 15.68 2.8 14 2.8 12.08c0-5.28 4.32-9.6 9.6-9.6c2.56 0 5.04 1.04 6.8 2.8c1.76 1.76 2.8 4.24 2.8 6.8C21.6 17.52 17.28 21.84 12 21.84zm5.76-7.52c-.32-.16-1.92-.96-2.24-1.04-.32-.08-.56-.16-.8.16-.24.32-.92 1.04-1.12 1.28-.2.24-.4.24-.72.08-.32-.16-1.36-.48-2.56-1.6-.96-.84-1.6-1.88-1.76-2.2-.16-.32 0-.48.12-.64.12-.12.32-.32.48-.52.16-.2.2-.32.32-.56.12-.24.08-.4-.04-.56-.12-.16-.8-1.92-.96-2.56-.24-.56-.48-.48-.72-.48h-.64c-.24 0-.64.08-.96.4-.32.32-1.2 1.04-1.2 2.52 0 1.48 1.2 2.92 1.36 3.16.16.24 2.24 3.36 5.44 4.72.76.32 1.36.52 1.84.64.76.24 1.44.2 2 .12.64-.08 1.92-.76 2.16-1.52.24-.76.24-1.4.16-1.52-.08-.12-.32-.2-.64-.32z"/>
            </svg>
            WhatsApp Consultation
          </a>
        </div>

        {/* Trust Text */}
        <p className="font-sans text-xs text-luxe-cream/60 mt-8 tracking-wide">
          ✓ Available 24/7 • ✓ Confidential Consultations • ✓ Expert Legal Team
        </p>
      </div>
    </section>
  )
}

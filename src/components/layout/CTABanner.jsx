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
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark text-luxe-black rounded-xl font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-luxury-xl hover:-translate-y-1 active:translate-y-0 transform"
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
            {/* WhatsApp Icon */}
            <svg className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.226l-.333.161-.345-.052c-1.268-.187-2.437-.157-3.39.318-.956.475-1.754 1.235-2.267 2.039C.669 6.575 0 7.753 0 9.012c0 1.261.6 2.43 1.614 3.326l-.254.396c-.529.751-.235 1.585.516 2.115.388.278.853.278 1.241 0l1.242-.888c.52.158 1.08.246 1.657.246 1.624 0 3.11-.672 4.158-1.852.52-.592.932-1.306 1.191-2.085.259-.78.328-1.611.204-2.41-.155-.942-.574-1.795-1.188-2.427-.614-.632-1.437-1.04-2.306-1.168zm14.527-2.979H6.414c-1.374 0-2.487 1.113-2.487 2.487v14.172c0 1.374 1.113 2.487 2.487 2.487h14.172c1.375 0 2.487-1.113 2.487-2.487V4.1c0-1.374-1.112-2.487-2.487-2.487z"/>
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

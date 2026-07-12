import { Link } from 'react-router-dom'
import MaterialIcon from '../ui/MaterialIcon'
import { SITE, NAV_LINKS } from '../../data/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-luxe-black text-luxe-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxe-gold/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxe-gold/5 rounded-full -ml-48 -mb-48 blur-3xl" />

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
          {/* Brand Section - Premium */}
          <div className="md:col-span-1">
            <div className="mb-stack-md">
              <h3 className="font-serif text-headline-md text-luxe-cream mb-2">{SITE.name}</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark rounded-full"></div>
            </div>
            <p className="font-sans text-body-md text-luxe-cream/70 mb-6 leading-relaxed">
              Trusted legal advocacy for life's most challenging moments.
            </p>
            {/* Social Icons - Premium */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-luxe-gold/10 hover:bg-luxe-gold hover:text-luxe-black text-luxe-gold flex items-center justify-center transition-all duration-300 hover:shadow-luxury-md transform hover:scale-110" 
                title="Visit our website"
              >
                <MaterialIcon name="public" className="text-lg" />
              </a>
              <a 
                href={`mailto:${SITE.email}`} 
                className="w-10 h-10 rounded-full bg-luxe-gold/10 hover:bg-luxe-gold hover:text-luxe-black text-luxe-gold flex items-center justify-center transition-all duration-300 hover:shadow-luxury-md transform hover:scale-110" 
                title="Send email"
              >
                <MaterialIcon name="mail" className="text-lg" />
              </a>
              <a 
                href={`tel:${SITE.phoneRaw}`} 
                className="w-10 h-10 rounded-full bg-luxe-gold/10 hover:bg-luxe-gold hover:text-luxe-black text-luxe-gold flex items-center justify-center transition-all duration-300 hover:shadow-luxury-md transform hover:scale-110" 
                title="Call us"
              >
                <MaterialIcon name="phone" className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links - Premium */}
          <div>
            <h4 className="font-sans text-sm text-luxe-gold uppercase mb-6 tracking-widest font-bold">
              <MaterialIcon name="apps" className="inline mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-luxe-gold transition-all duration-300 font-sans text-body-md text-luxe-cream/80 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="hover:text-luxe-gold transition-all duration-300 font-sans text-body-md text-luxe-cream/80 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal - Premium */}
          <div>
            <h4 className="font-sans text-sm text-luxe-gold uppercase mb-6 tracking-widest font-bold">
              <MaterialIcon name="description" className="inline mr-2" />
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-luxe-gold transition-all duration-300 font-sans text-body-md text-luxe-cream/80 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="hover:text-luxe-gold transition-all duration-300 font-sans text-body-md text-luxe-cream/80 hover:translate-x-1 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="hover:text-luxe-gold transition-all duration-300 font-sans text-body-md text-luxe-cream/80 hover:translate-x-1 inline-block"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Hours - Premium */}
          <div>
            <h4 className="font-sans text-sm text-luxe-gold uppercase mb-6 tracking-widest font-bold">
              <MaterialIcon name="schedule" className="inline mr-2" />
              Office Hours
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-sans text-caption text-luxe-gold font-semibold mb-1">Monday - Friday</p>
                <p className="font-sans text-body-md text-luxe-cream/70">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-sans text-caption text-luxe-gold font-semibold mb-1">Saturday</p>
                <p className="font-sans text-body-md text-luxe-cream/70">By Appointment Only</p>
              </div>
              <div className="pt-4 border-t border-luxe-gold/20">
                <p className="font-sans text-caption text-luxe-gold font-semibold mb-1">Location</p>
                <p className="font-sans text-body-sm text-luxe-cream/70 leading-relaxed">{SITE.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Divider */}
        <div className="px-margin-mobile md:px-margin-desktop">
          <div className="h-px bg-gradient-to-r from-transparent via-luxe-gold/20 to-transparent max-w-container-max mx-auto" />
        </div>

        {/* Copyright Section - Premium */}
        <div className="py-base px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright Text */}
              <p className="font-sans text-caption text-luxe-cream/50 text-center md:text-left">
                © {currentYear} <span className="text-luxe-gold">{SITE.name}</span>. All Rights Reserved.
              </p>

              {/* Legal Links */}
              <div className="flex items-center gap-4 text-caption text-luxe-cream/50">
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-luxe-gold transition-colors"
                >
                  Privacy
                </Link>
                <span className="text-luxe-gold/30">•</span>
                <Link 
                  to="/terms-of-service" 
                  className="hover:text-luxe-gold transition-colors"
                >
                  Terms
                </Link>
                <span className="text-luxe-gold/30">•</span>
                <Link 
                  to="/disclaimer" 
                  className="hover:text-luxe-gold transition-colors"
                >
                  Disclaimer
                </Link>
              </div>

              {/* Designed By - Premium Touch */}
              <p className="font-sans text-caption text-luxe-cream/40 text-center md:text-right">
                Premium Legal Services Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

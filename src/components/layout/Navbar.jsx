import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaterialIcon from '../ui/MaterialIcon'
import { NAV_LINKS } from '../../data/site'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Luxury Navbar */}
      <nav className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-luxe-cream/95 backdrop-blur-lg border-b border-luxe-gold/20 shadow-luxury-md' 
          : 'bg-luxe-cream border-b border-luxe-gold/10 shadow-luxury-sm'
      }`}>
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          {/* Logo - Luxury Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-luxe-gold to-luxe-gold-dark flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <MaterialIcon name="gavel" className="text-luxe-cream text-lg" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-luxe-black text-base leading-none">Counsel & Clarity</span>
              <span className="font-sans text-luxe-gold text-xs tracking-widest uppercase">ADVOCATE</span>
            </div>
          </Link>

          {/* Desktop Navigation - Elegant Spacing */}
          <div className="hidden md:flex gap-12 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-sans text-sm tracking-wide transition-colors duration-300 py-2 ${
                  isActive(link.path)
                    ? 'text-luxe-gold font-semibold'
                    : 'text-luxe-black hover:text-luxe-gold'
                }
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-luxe-gold after:transition-all after:duration-300 ${
                  isActive(link.path) ? 'after:w-full' : 'hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Menu - Luxury Design */}
          <div className="flex items-center gap-4">
            <Link
              to="/consultation"
              className="hidden sm:flex items-center justify-center px-6 py-3 bg-luxe-black text-luxe-cream rounded-lg font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-luxury-lg hover:translate-y-[-2px] active:translate-y-0"
            >
              Book Consultation
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-luxe-gold/10 transition-colors text-luxe-black"
            >
              <MaterialIcon name={mobileMenuOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Luxury Styling */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-luxe-gold/10 bg-luxe-cream/95 backdrop-blur-lg p-margin-mobile space-y-3 animate-fade-in-up">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-sans font-medium text-sm tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-luxe-gold text-luxe-black'
                    : 'text-luxe-black hover:bg-luxe-gold/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 bg-luxe-black text-luxe-cream rounded-lg font-sans font-semibold text-sm text-center tracking-wide transition-all duration-300 hover:shadow-luxury-lg"
            >
              Book Consultation
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

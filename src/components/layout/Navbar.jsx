import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaterialIcon from '../ui/MaterialIcon'
import { NAV_LINKS } from '../../data/site'
import { useFirmConfig } from '../../context/FirmConfigContext'

export default function Navbar() {
  const { config } = useFirmConfig()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMobileMenuOpen(false) }, [location.pathname])

  return (
    <>
      <nav className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-luxe-cream/95 backdrop-blur-lg border-b border-luxe-gold/20 shadow-[0_4px_24px_rgba(15,27,45,0.1)]'
          : 'bg-luxe-cream border-b border-luxe-gold/10'
      }`}>
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">

          {/* ── LOGO ─────────────────────────────────────────────── */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-luxe-gold to-luxe-gold-dark flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-sm">
              <MaterialIcon name="account_balance" className="text-luxe-black text-lg" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-luxe-black text-sm leading-none">{config.firmName}</span>
              <span className="font-sans text-luxe-gold text-[10px] tracking-widest uppercase font-semibold mt-0.5">Advocate High Court · Islamabad</span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ──────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 py-1 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-luxe-gold'
                    : 'text-luxe-black hover:text-luxe-gold'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-luxe-gold after:transition-all after:duration-300 ${
                  isActive(link.path) ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── CTA BUTTON + HAMBURGER ───────────────────────────── */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/consultation"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-luxe-gold rounded-lg font-sans font-bold text-sm text-luxe-black tracking-wide transition-all duration-200 hover:bg-luxe-gold-dark hover:shadow-[0_4px_16px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <MaterialIcon name="calendar_today" className="text-base text-luxe-black" />
              Book Free Consultation
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-luxe-gold/10 transition-colors text-luxe-black"
              aria-label="Toggle menu"
            >
              <MaterialIcon name={mobileMenuOpen ? 'close' : 'menu'} className="text-2xl" />
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ──────────────────────────────────────── */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-luxe-gold/15 bg-luxe-black px-4 pb-4 pt-3 space-y-1 animate-fade-in-up">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-sans font-semibold text-sm tracking-wide transition-all ${
                  isActive(link.path)
                    ? 'bg-luxe-gold text-luxe-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile CTA */}
            <Link
              to="/consultation"
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-luxe-gold rounded-lg font-sans font-bold text-sm text-luxe-black text-center tracking-wide hover:bg-luxe-gold-dark transition-all"
            >
              <MaterialIcon name="calendar_today" className="text-base text-luxe-black" />
              Book Free Consultation
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

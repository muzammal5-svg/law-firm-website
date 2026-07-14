import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MaterialIcon from '../ui/MaterialIcon'
import { SITE } from '../../data/site'

/**
 * Sticky consultation bar that appears on mobile after scrolling
 */
export default function MobileConsultBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-luxe-black text-luxe-cream p-3 z-30 shadow-luxury-lg">
      <div className="flex gap-2 max-w-container-max mx-auto">
        <Link
          to="/consultation"
          className="flex-1 bg-luxe-gold px-4 py-2 rounded-lg font-sans font-bold text-sm text-center hover:shadow-luxury-md transition-all"
          style={{ color: '#000000' }}
        >
          <MaterialIcon name="calendar_month" className="inline mr-1" />
          Book Now
        </Link>
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex-1 border border-luxe-gold text-luxe-gold px-4 py-2 rounded-lg font-sans font-semibold text-sm text-center hover:bg-luxe-gold/10 transition-colors"
        >
          <MaterialIcon name="phone" className="inline mr-1" />
          Call Now
        </a>
      </div>
    </div>
  )
}

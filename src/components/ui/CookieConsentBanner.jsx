import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setTrackingConsent, initializeTracking } from '../../utils/tracking'
import MaterialIcon from './MaterialIcon'

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a consent decision
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true)
      }, 1000)
    } else if (consent === 'accepted') {
      // Initialize tracking if previously accepted
      initializeTracking()
    }
  }, [])

  const handleAccept = () => {
    setTrackingConsent(true)
    setShowBanner(false)
    // Initialize tracking immediately
    initializeTracking()
  }

  const handleDecline = () => {
    setTrackingConsent(false)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-luxe-black text-luxe-cream p-6 shadow-luxury-xl border-t-2 border-luxe-gold animate-slideUp">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Message */}
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <MaterialIcon name="cookie" className="text-luxe-gold text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-sans font-semibold text-luxe-cream mb-2">
                  We use cookies
                </h3>
                <p className="font-sans text-sm text-luxe-cream/80 leading-relaxed">
                  We use cookies and similar tracking technologies to improve your browsing experience,
                  analyze site traffic, and understand where our visitors are coming from. By clicking
                  "Accept", you consent to our use of cookies.{' '}
                  <Link
                    to="/privacy-policy"
                    className="text-luxe-gold hover:underline"
                  >
                    Learn more in our Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-none px-6 py-3 border-2 border-luxe-gold/50 text-luxe-cream font-sans font-semibold rounded-lg hover:bg-luxe-gold/10 transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none px-6 py-3 bg-luxe-gold text-luxe-black font-sans font-semibold rounded-lg hover:bg-luxe-gold-dark transition-all"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

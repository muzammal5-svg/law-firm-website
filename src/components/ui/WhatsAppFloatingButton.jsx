import { useState, useEffect } from 'react'

// PLACEHOLDER WHATSAPP NUMBER - Replace before launch
const WHATSAPP_NUMBER = '923323055502' // DO NOT use any UK/London number from old branding

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after scrolling 100px
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    // Fire GTM conversion event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        button_location: 'floating_button',
      })
    }

    // Open WhatsApp
    const message = encodeURIComponent('Hello, I need legal assistance with a matter in Pakistan.')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-luxury-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* WhatsApp Icon SVG */}
      <svg
        className="w-8 h-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.226l-.333.161-.345-.052c-1.268-.187-2.437-.157-3.39.318-.956.475-1.754 1.235-2.267 2.039C.669 6.575 0 7.753 0 9.012c0 1.261.6 2.43 1.614 3.326l-.254.396c-.529.751-.235 1.585.516 2.115.388.278.853.278 1.241 0l1.242-.888c.52.158 1.08.246 1.657.246 1.624 0 3.11-.672 4.158-1.852.52-.592.932-1.306 1.191-2.085.259-.78.328-1.611.204-2.41-.155-.942-.574-1.795-1.188-2.427-.614-.632-1.437-1.04-2.306-1.168zm14.527-2.979H6.414c-1.374 0-2.487 1.113-2.487 2.487v14.172c0 1.374 1.113 2.487 2.487 2.487h14.172c1.375 0 2.487-1.113 2.487-2.487V4.1c0-1.374-1.112-2.487-2.487-2.487z" />
      </svg>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
    </button>
  )
}

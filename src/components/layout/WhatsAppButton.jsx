import { useLocation } from 'react-router-dom'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

/**
 * Floating WhatsApp button with dynamic messaging based on current page
 */
export default function WhatsAppButton() {
  const location = useLocation()
  const whatsappUrl = buildWhatsAppUrl({ pathname: location.pathname })

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-whatsapp shadow-lg flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      {/* WhatsApp Logo - Official - White on Green */}
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.52 3.48C18.25 1.32 15.23 0 12 0c-6.63 0-12 5.28-12 11.72c0 2.16.56 4.32 1.6 6.12L0 24l6.48-1.6c1.92 1.04 3.84 1.6 5.52 1.6C18.36 24 24 18.72 24 12C24 8.76 22.8 5.64 20.52 3.48zM12 21.84c-1.92 0-3.76-.48-5.52-1.36L5.12 20.8l-2.4.56.56-2.4.32-1.36C3.28 15.68 2.8 14 2.8 12.08c0-5.28 4.32-9.6 9.6-9.6c2.56 0 5.04 1.04 6.8 2.8c1.76 1.76 2.8 4.24 2.8 6.8C21.6 17.52 17.28 21.84 12 21.84zm5.76-7.52c-.32-.16-1.92-.96-2.24-1.04-.32-.08-.56-.16-.8.16-.24.32-.92 1.04-1.12 1.28-.2.24-.4.24-.72.08-.32-.16-1.36-.48-2.56-1.6-.96-.84-1.6-1.88-1.76-2.2-.16-.32 0-.48.12-.64.12-.12.32-.32.48-.52.16-.2.2-.32.32-.56.12-.24.08-.4-.04-.56-.12-.16-.8-1.92-.96-2.56-.24-.56-.48-.48-.72-.48h-.64c-.24 0-.64.08-.96.4-.32.32-1.2 1.04-1.2 2.52 0 1.48 1.2 2.92 1.36 3.16.16.24 2.24 3.36 5.44 4.72.76.32 1.36.52 1.84.64.76.24 1.44.2 2 .12.64-.08 1.92-.76 2.16-1.52.24-.76.24-1.4.16-1.52-.08-.12-.32-.2-.64-.32z"/>
      </svg>
    </a>
  )
}

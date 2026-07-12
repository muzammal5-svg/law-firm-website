import { useLocation } from 'react-router-dom'
import MaterialIcon from '../ui/MaterialIcon'
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
      <MaterialIcon name="chat" className="text-luxe-cream text-xl" />
    </a>
  )
}

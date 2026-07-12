import { useEffect } from 'react'
import MaterialIcon from './MaterialIcon'

/**
 * Success confirmation modal that auto-closes after a delay
 */
export default function SuccessModal({ 
  isOpen, 
  onClose, 
  title = 'Success!', 
  message = 'Your submission was successful.',
  autoCloseDelay = 5000
}) {
  useEffect(() => {
    if (isOpen && autoCloseDelay > 0) {
      const timer = setTimeout(onClose, autoCloseDelay)
      return () => clearTimeout(timer)
    }
  }, [isOpen, autoCloseDelay, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-luxe-cream rounded-2xl p-stack-lg max-w-md mx-4 text-center shadow-luxury-xl animate-bounce-in">
        <div className="w-16 h-16 rounded-full bg-luxe-gold flex items-center justify-center mx-auto mb-stack-md">
          <MaterialIcon name="check_circle" className="text-luxe-black text-4xl" filled />
        </div>
        <h2 className="font-serif text-headline-md text-luxe-black mb-stack-sm">{title}</h2>
        <p className="text-luxe-grey text-body-md mb-stack-lg">{message}</p>
        <button
          onClick={onClose}
          className="bg-luxe-black text-luxe-cream px-8 py-3 rounded-lg font-sans font-semibold text-sm hover:shadow-luxury-lg transition-all"
        >
          Close
        </button>
      </div>
    </div>
  )
}

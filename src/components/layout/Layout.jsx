import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import MobileConsultBar from './MobileConsultBar'

/**
 * Main layout wrapper with navbar, footer, and floating components
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-luxe-cream text-luxe-black font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileConsultBar />
    </div>
  )
}

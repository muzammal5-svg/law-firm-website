import { useState } from 'react'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import SuccessModal from '../components/ui/SuccessModal'
import CTABanner from '../components/layout/CTABanner'
import { useLeads } from '../context/LeadsContext'
import { useFirmConfig } from '../context/FirmConfigContext'
import { validateContactForm } from '../utils/validation'
import { submitToFormspree } from '../utils/formspree'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const SUBJECTS = [
  'Civil Rights Litigation',
  'Disability Benefits Litigation',
  'Eviction Litigation',
  'Landlord & Tenant Litigation',
  'Traffic Ticket Litigation',
  'Will Writing',
  "Workers' Compensation Litigation",
  'General Enquiry',
]

export default function Contact() {
  const { config } = useFirmConfig()
  const { addLead } = useLeads()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  })

  const waUrl = buildWhatsAppUrl({ pathname: '/contact' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateContactForm(formData)
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setIsLoading(true)
    try {
      await submitToFormspree({ ...formData }, 'contact')
      addLead({ name: formData.name, email: formData.email, phone: formData.phone, source: 'Contact Form' })
      setShowSuccess(true)
      setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' })
    } catch (err) {
      setErrors({ submit: err.message || 'Failed to submit. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <PageMeta
        title="Contact"
        description={`Get in touch with ${config.firmName}. Civil rights litigation, disability benefits disputes, eviction and tenant matters, traffic ticket defence, will writing, and workers' compensation claims in Islamabad. Phone, email, WhatsApp and in-person consultations available.`}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-luxe-black py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <AnimateOnScroll animation="fadeInUp" className="max-w-2xl">
            <div className="trust-badge mb-6">
              <MaterialIcon name="location_on" className="text-sm" />
              Chamber No. 27, F-8 Markaz, Islamabad
            </div>
            <h1 className="font-serif text-[42px] md:text-[54px] text-white leading-tight mb-4">
              Get in Touch
            </h1>
            <div className="h-0.5 w-16 bg-luxe-gold rounded-full mb-5" />
            <p className="font-sans text-white/65 text-base leading-relaxed">
              Whether you need urgent legal counsel or want to discuss your matter confidentially,
              reach Rana Muhammad Zahid Muneer by phone, WhatsApp, email, or the contact form below.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── LEFT: Contact Info ────────────────────────────── */}
            <AnimateOnScroll animation="fadeInLeft" className="space-y-6">

              {/* Phone */}
              <div className="bg-white rounded-xl border border-luxe-gold/20 p-7 hover:border-luxe-gold/50 hover:shadow-md transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-luxe-gold flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="phone_in_talk" className="text-luxe-black text-2xl" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-luxe-grey font-bold mb-1">Phone</p>
                    <a href={`tel:${config.contact.phoneRaw}`}
                      className="font-serif text-xl text-luxe-black hover:text-luxe-gold transition-colors">
                      {config.contact.phone}
                    </a>
                    <p className="font-sans text-sm text-luxe-grey mt-1">
                      {config.contact.officeHours.weekday.days}: {config.contact.officeHours.weekday.hours}
                    </p>
                    <p className="font-sans text-sm text-luxe-grey">
                      {config.contact.officeHours.weekend.days}: {config.contact.officeHours.weekend.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl border border-luxe-gold/20 p-7 hover:border-luxe-gold/50 hover:shadow-md transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-luxe-gold flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="mail" className="text-luxe-black text-2xl" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-luxe-grey font-bold mb-1">Email</p>
                    <a href={`mailto:${config.contact.email}`}
                      className="font-serif text-lg text-luxe-black hover:text-luxe-gold transition-colors break-all">
                      {config.contact.email}
                    </a>
                    <p className="font-sans text-sm text-luxe-grey mt-1">
                      Responses within 24 business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="bg-white rounded-xl border border-luxe-gold/20 p-7 hover:border-luxe-gold/50 hover:shadow-md transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-luxe-grey font-bold mb-1">LinkedIn</p>
                    <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer"
                      className="font-serif text-lg text-luxe-black hover:text-luxe-gold transition-colors">
                      {config.attorney.name}
                    </a>
                    <p className="font-sans text-sm text-luxe-grey mt-1">Connect for professional updates</p>
                  </div>
                </div>
              </div>

              {/* Office — Islamabad only, no KSA block */}
              <div className="bg-luxe-black rounded-xl border border-luxe-gold/30 p-7">
                <h3 className="font-serif text-lg text-white mb-5 flex items-center gap-2">
                  <MaterialIcon name="location_on" className="text-luxe-gold" />
                  Chamber Address
                </h3>
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🇵🇰</span>
                    <p className="font-sans font-semibold text-white text-sm">Islamabad, Pakistan</p>
                  </div>
                  <p className="font-sans text-sm text-white/65 leading-relaxed">
                    {config.contact.address.full}
                  </p>
                  <p className="font-sans text-xs text-luxe-gold mt-2">
                    Walk-in & appointment consultations welcome
                  </p>
                </div>
              </div>

              {/* WhatsApp quick link */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-6 hover:bg-[#25D366]/20 transition-all"
              >
                <svg className="w-10 h-10 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48C18.25 1.32 15.23 0 12 0c-6.63 0-12 5.28-12 11.72c0 2.16.56 4.32 1.6 6.12L0 24l6.48-1.6c1.92 1.04 3.84 1.6 5.52 1.6C18.36 24 24 18.72 24 12C24 8.76 22.8 5.64 20.52 3.48zM12 21.84c-1.92 0-3.76-.48-5.52-1.36L5.12 20.8l-2.4.56.56-2.4.32-1.36C3.28 15.68 2.8 14 2.8 12.08c0-5.28 4.32-9.6 9.6-9.6c2.56 0 5.04 1.04 6.8 2.8c1.76 1.76 2.8 4.24 2.8 6.8C21.6 17.52 17.28 21.84 12 21.84zm5.76-7.52c-.32-.16-1.92-.96-2.24-1.04-.32-.08-.56-.16-.8.16-.24.32-.92 1.04-1.12 1.28-.2.24-.4.24-.72.08-.32-.16-1.36-.48-2.56-1.6-.96-.84-1.6-1.88-1.76-2.2-.16-.32 0-.48.12-.64.12-.12.32-.32.48-.52.16-.2.2-.32.32-.56.12-.24.08-.4-.04-.56-.12-.16-.8-1.92-.96-2.56-.24-.56-.48-.48-.72-.48h-.64c-.24 0-.64.08-.96.4-.32.32-1.2 1.04-1.2 2.52 0 1.48 1.2 2.92 1.36 3.16.16.24 2.24 3.36 5.44 4.72.76.32 1.36.52 1.84.64.76.24 1.44.2 2 .12.64-.08 1.92-.76 2.16-1.52.24-.76.24-1.4.16-1.52-.08-.12-.32-.2-.64-.32z"/>
                </svg>
                <div>
                  <p className="font-sans font-bold text-[#25D366] text-base">Chat on WhatsApp</p>
                  <p className="font-sans text-sm text-luxe-grey mt-0.5">Fastest way to reach us for quick questions</p>
                </div>
                <MaterialIcon name="arrow_forward" className="text-[#25D366] ml-auto" />
              </a>

              {/* Google Map — F-8 Markaz Islamabad */}
              <div className="rounded-xl overflow-hidden border border-luxe-gold/20 shadow-sm">
                <iframe
                  title="Rana Muhammad Zahid Muneer Advocate — F-8 Markaz Islamabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.0!2d73.0479!3d33.7295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef9b4b4b4b5%3A0x0!2sF-8%20Markaz%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimateOnScroll>

            {/* ── RIGHT: Contact Form ───────────────────────────── */}
            <AnimateOnScroll animation="fadeInRight" delay={0.15}>
              <div className="bg-white rounded-2xl border border-luxe-gold/20 p-8 md:p-10 shadow-sm sticky top-24">
                <h2 className="font-serif text-2xl text-luxe-black mb-1">Send a Message</h2>
                <div className="h-0.5 w-12 bg-luxe-gold rounded-full mb-8" />

                <form onSubmit={handleSubmit} className="space-y-5">
                  {errors.submit && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                      <MaterialIcon name="error_outline" className="text-red-500 flex-shrink-0" />
                      <p className="font-sans text-sm text-red-700">{errors.submit}</p>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-lg font-sans text-sm border bg-luxe-cream/40 text-luxe-black focus:outline-none transition-all ${errors.name ? 'border-red-400' : 'border-luxe-gold/20 focus:border-luxe-gold'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-lg font-sans text-sm border bg-luxe-cream/40 text-luxe-black focus:outline-none transition-all ${errors.email ? 'border-red-400' : 'border-luxe-gold/20 focus:border-luxe-gold'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="+92 300 000 0000"
                      className="w-full px-4 py-3 rounded-lg font-sans text-sm border border-luxe-gold/20 bg-luxe-cream/40 text-luxe-black focus:border-luxe-gold focus:outline-none transition-all"
                    />
                  </div>

                  {/* Subject dropdown */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">Subject *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg font-sans text-sm border border-luxe-gold/20 bg-luxe-cream/40 text-luxe-black focus:border-luxe-gold focus:outline-none transition-all"
                    >
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange}
                      placeholder="Please describe your enquiry or situation..."
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg font-sans text-sm border bg-luxe-cream/40 text-luxe-black focus:outline-none transition-all resize-none ${errors.message ? 'border-red-400' : 'border-luxe-gold/20 focus:border-luxe-gold'}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-luxe-black text-white px-6 py-4 rounded-lg font-sans font-bold text-sm tracking-wide hover:bg-luxe-dark hover:shadow-[0_8px_24px_rgba(15,27,45,0.25)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <><MaterialIcon name="hourglass_empty" className="animate-spin" />Sending...</>
                    ) : (
                      <><MaterialIcon name="send" />Send Message</>
                    )}
                  </button>
                  <p className="font-sans text-xs text-luxe-grey/70 text-center">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CTABanner />

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Received"
        message="Thank you for reaching out. We will review your enquiry and respond within 24 business hours."
        autoCloseDelay={5000}
      />
    </>
  )
}

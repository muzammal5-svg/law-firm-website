import { useState } from 'react'
import DatePicker from 'react-datepicker'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import SuccessModal from '../components/ui/SuccessModal'
import { useLeads } from '../context/LeadsContext'
import { validateConsultationForm } from '../utils/validation'
import { submitToFormspree } from '../utils/formspree'
import { useFirmConfig } from '../context/FirmConfigContext'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import 'react-datepicker/dist/react-datepicker.css'

const COUNTRY_CODES = [
  { code: '+92', flag: '🇵🇰', label: 'PK' },
  { code: '+966', flag: '🇸🇦', label: 'KSA' },
  { code: '+971', flag: '🇦🇪', label: 'UAE' },
  { code: '+44', flag: '🇬🇧', label: 'UK' },
  { code: '+1', flag: '🇺🇸', label: 'US' },
]

const SERVICES = [
  { value: 'civil-rights-litigation', label: 'Civil Rights Litigation' },
  { value: 'disability-benefits-litigation', label: 'Disability Benefits Litigation' },
  { value: 'eviction-litigation', label: 'Eviction Litigation' },
  { value: 'landlord-tenant-litigation', label: 'Landlord & Tenant Litigation' },
  { value: 'traffic-ticket-litigation', label: 'Traffic Ticket Litigation' },
  { value: 'will-writing', label: 'Will Writing' },
  { value: 'workers-compensation-litigation', label: "Workers' Compensation Litigation" },
  { value: 'other', label: 'Other / Not Sure Yet' },
]

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00',
]

export default function Consultation() {
  const { config } = useFirmConfig()
  const { addLead } = useLeads()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [countryCode, setCountryCode] = useState('+92')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'civil-rights-litigation',
    date: null,
    time: '09:00',
    message: '',
  })

  const waUrl = buildWhatsAppUrl({ pathname: '/consultation' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }))
    if (errors.date) setErrors(prev => ({ ...prev, date: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateConsultationForm(formData)
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }

    setIsLoading(true)
    try {
      await submitToFormspree({
        name: formData.name,
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`,
        service: SERVICES.find(s => s.value === formData.service)?.label,
        date: formData.date?.toISOString().split('T')[0],
        time: formData.time,
        message: formData.message,
      }, 'consultation')

      addLead({
        name: formData.name,
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`,
        practiceArea: formData.service,
        source: 'Consultation Booking',
      })

      setShowSuccess(true)
      setFormData({ name: '', email: '', phone: '', service: 'civil-rights-litigation', date: null, time: '09:00', message: '' })
    } catch (err) {
      setErrors({ submit: err.message || 'Failed to submit. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <PageMeta
        title="Book a Free Consultation"
        description={`Book a free consultation with ${config.attorney.name} — Advocate High Court Islamabad. Civil rights, disability benefits, eviction, landlord & tenant, traffic, will writing, and workers’ compensation matters.`}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-luxe-black py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp">
            <div className="trust-badge mx-auto mb-6 w-fit">
              <MaterialIcon name="calendar_today" className="text-sm" />
              Free 30-Minute Consultation
            </div>
            <h1 className="font-serif text-[42px] md:text-[54px] text-white leading-tight mb-4">
              Book a Free Consultation
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-white/65 text-base leading-relaxed mb-4">
              Speak directly with {config.attorney.name} about your legal matter.
              No obligation — just clear, honest legal guidance.
            </p>
            <p className="font-sans text-luxe-gold text-sm font-medium">
              Available in person at Chamber No. 27, F-8 Markaz, Islamabad, or by phone/video call.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ───────────────────────────────────────── */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* ── FORM ─────────────────────────────────────────── */}
            <AnimateOnScroll animation="fadeInLeft" className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-luxe-gold/20 p-8 md:p-10 shadow-sm"
              >
                <h2 className="font-serif text-2xl text-luxe-black mb-1">Your Details</h2>
                <div className="h-0.5 w-12 bg-luxe-gold rounded-full mb-8" />

                {errors.submit && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                    <MaterialIcon name="error_outline" className="text-red-500 flex-shrink-0" />
                    <p className="font-sans text-sm text-red-700">{errors.submit}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Syed Ahmad Ali"
                      className={`w-full px-4 py-3 rounded-lg font-sans text-sm border-2 bg-luxe-cream/50 text-luxe-black focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400' : 'border-luxe-gold/20 focus:border-luxe-gold'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-lg font-sans text-sm border-2 bg-luxe-cream/50 text-luxe-black focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400' : 'border-luxe-gold/20 focus:border-luxe-gold'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone with country code */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={e => setCountryCode(e.target.value)}
                        className="flex-shrink-0 px-3 py-3 rounded-lg font-sans text-sm border-2 border-luxe-gold/20 bg-luxe-cream/50 text-luxe-black focus:border-luxe-gold focus:outline-none transition-colors"
                      >
                        {COUNTRY_CODES.map(c => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="300 000 0000"
                        className={`flex-1 px-4 py-3 rounded-lg font-sans text-sm border-2 bg-luxe-cream/50 text-luxe-black focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400' : 'border-luxe-gold/20 focus:border-luxe-gold'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg font-sans text-sm border-2 border-luxe-gold/20 focus:border-luxe-gold focus:outline-none bg-luxe-cream/50 text-luxe-black transition-colors"
                    >
                      {SERVICES.map(s => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">
                      Preferred Date *
                    </label>
                    <DatePicker
                      selected={formData.date}
                      onChange={handleDateChange}
                      minDate={new Date()}
                      filterDate={d => d.getDay() !== 0}
                      placeholderText="Select a date"
                      className={`w-full px-4 py-3 rounded-lg font-sans text-sm border-2 bg-luxe-cream/50 text-luxe-black focus:outline-none transition-colors ${
                        errors.date ? 'border-red-400' : 'border-luxe-gold/20 focus:border-luxe-gold'
                      }`}
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">
                      Preferred Time (PKT) *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg font-sans text-sm border-2 border-luxe-gold/20 focus:border-luxe-gold focus:outline-none bg-luxe-cream/50 text-luxe-black transition-colors"
                    >
                      {TIME_SLOTS.map(t => (
                        <option key={t} value={t}>{t} PKT</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block font-sans text-xs font-bold uppercase tracking-widest text-luxe-black mb-2">
                    Briefly Describe Your Matter
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="E.g. I need help with a civil rights claim, disability benefit dispute, eviction matter, traffic ticket issue, will writing, or workers' compensation case..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg font-sans text-sm border-2 border-luxe-gold/20 focus:border-luxe-gold focus:outline-none bg-luxe-cream/50 text-luxe-black transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-luxe-black text-white px-8 py-4 rounded-lg font-sans font-bold text-sm tracking-wide hover:bg-luxe-dark hover:shadow-[0_8px_24px_rgba(15,27,45,0.25)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <MaterialIcon name="hourglass_empty" className="animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      <MaterialIcon name="check_circle" />
                      Confirm Consultation Request
                    </>
                  )}
                </button>
                <p className="font-sans text-xs text-luxe-grey text-center mt-4">
                  We'll confirm your appointment by email within 24 hours. All enquiries are strictly confidential.
                </p>
              </form>
            </AnimateOnScroll>

            {/* ── SIDEBAR ──────────────────────────────────────── */}
            <AnimateOnScroll animation="fadeInRight" delay={0.15} className="space-y-6">
              {/* Info cards */}
              {[
                { icon: 'schedule', title: 'Duration', desc: '30 minutes' },
                { icon: 'payments', title: 'Cost', desc: 'Completely free — no obligation' },
                { icon: 'videocam', title: 'Format', desc: 'In person (Islamabad), phone, or video call' },
                { icon: 'location_on', title: 'Location', desc: 'Chamber No. 27, F-8 Markaz, Islamabad' },
              ].map((c, i) => (
                <div key={i} className="bg-white rounded-xl border border-luxe-gold/20 p-5 flex items-start gap-4 hover:border-luxe-gold/50 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-luxe-gold/10 flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name={c.icon} className="text-luxe-gold text-xl" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-luxe-black text-sm">{c.title}</p>
                    <p className="font-sans text-xs text-luxe-grey mt-0.5">{c.desc}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp quick contact */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-5 hover:bg-[#25D366]/20 transition-all"
              >
                <svg className="w-8 h-8 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48C18.25 1.32 15.23 0 12 0c-6.63 0-12 5.28-12 11.72c0 2.16.56 4.32 1.6 6.12L0 24l6.48-1.6c1.92 1.04 3.84 1.6 5.52 1.6C18.36 24 24 18.72 24 12C24 8.76 22.8 5.64 20.52 3.48zM12 21.84c-1.92 0-3.76-.48-5.52-1.36L5.12 20.8l-2.4.56.56-2.4.32-1.36C3.28 15.68 2.8 14 2.8 12.08c0-5.28 4.32-9.6 9.6-9.6c2.56 0 5.04 1.04 6.8 2.8c1.76 1.76 2.8 4.24 2.8 6.8C21.6 17.52 17.28 21.84 12 21.84zm5.76-7.52c-.32-.16-1.92-.96-2.24-1.04-.32-.08-.56-.16-.8.16-.24.32-.92 1.04-1.12 1.28-.2.24-.4.24-.72.08-.32-.16-1.36-.48-2.56-1.6-.96-.84-1.6-1.88-1.76-2.2-.16-.32 0-.48.12-.64.12-.12.32-.32.48-.52.16-.2.2-.32.32-.56.12-.24.08-.4-.04-.56-.12-.16-.8-1.92-.96-2.56-.24-.56-.48-.48-.72-.48h-.64c-.24 0-.64.08-.96.4-.32.32-1.2 1.04-1.2 2.52 0 1.48 1.2 2.92 1.36 3.16.16.24 2.24 3.36 5.44 4.72.76.32 1.36.52 1.84.64.76.24 1.44.2 2 .12.64-.08 1.92-.76 2.16-1.52.24-.76.24-1.4.16-1.52-.08-.12-.32-.2-.64-.32z"/>
                </svg>
                <div>
                  <p className="font-sans font-semibold text-[#25D366] text-sm">Prefer WhatsApp?</p>
                  <p className="font-sans text-xs text-luxe-grey mt-0.5">Message us directly for a quick response</p>
                </div>
              </a>

              {/* Office hours */}
              <div className="bg-luxe-black rounded-xl border border-luxe-gold/25 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MaterialIcon name="access_time" className="text-luxe-gold text-xl" />
                  <p className="font-sans font-semibold text-white text-sm">Office Hours (PKT)</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-sans text-xs text-white/50">{config.contact.officeHours.weekday.days}</span>
                    <span className="font-sans text-xs text-white font-medium">{config.contact.officeHours.weekday.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans text-xs text-white/50">{config.contact.officeHours.weekend.days}</span>
                    <span className="font-sans text-xs text-white font-medium">{config.contact.officeHours.weekend.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans text-xs text-white/50">Sunday</span>
                    <span className="font-sans text-xs text-white/40">Closed</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Consultation Request Sent!"
        message={`Thank you! ${config.attorney.name}'s team will confirm your appointment within 24 hours via email.`}
        autoCloseDelay={6000}
      />
    </>
  )
}

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import SuccessModal from '../components/ui/SuccessModal'
import { useLeads } from '../context/LeadsContext'
import { validateConsultationForm } from '../utils/validation'
import { submitToFormspree } from '../utils/formspree'
import 'react-datepicker/dist/react-datepicker.css'

export default function Consultation() {
  const { addLead } = useLeads()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: 'property',
    date: null,
    time: '09:00',
    message: '',
  })

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }))
    if (errors.date) {
      setErrors(prev => ({ ...prev, date: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate
    const newErrors = validateConsultationForm(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    try {
      // Submit to Formspree
      await submitToFormspree({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        practiceArea: formData.practiceArea,
        date: formData.date?.toISOString().split('T')[0],
        time: formData.time,
        message: formData.message,
      }, 'consultation')

      // Add to leads context
      addLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        practiceArea: formData.practiceArea,
        source: 'Consultation Booking',
      })

      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        practiceArea: 'property',
        date: null,
        time: '09:00',
        message: '',
      })
    } catch (error) {
      setErrors({ submit: error.message || 'Failed to submit. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <PageMeta
        title="Book a Consultation"
        description="Schedule a consultation with Advocate Julian Thorne. Flexible booking with available time slots."
      />

      {/* Luxury Hero */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fadeInUp">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">Consultation</span>
            <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black mb-stack-md">
              Book Your Consultation
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <p className="font-sans text-body-lg text-luxe-grey">
              Schedule a 30-minute consultation with Julian Thorne to discuss your legal matter. First consultations are complimentary for new clients.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Form */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="fadeInUp">
            <form onSubmit={handleSubmit} className="luxury-card bg-luxe-cream rounded-lg p-stack-lg shadow-luxury-sm border border-luxe-gold/20">
              {errors.submit && (
                <div className="mb-stack-md p-4 bg-error-container text-on-error-container rounded-lg flex items-start gap-3">
                  <MaterialIcon name="error" className="text-lg flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-sans font-semibold">Error</h3>
                    <p className="font-sans text-body-md">{errors.submit}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-md">
                {/* Name */}
                <div>
                  <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg font-sans border-2 transition-colors ${
                      errors.name ? 'border-error' : 'border-luxe-gold/20 focus:border-luxe-gold'
                    } focus:outline-none bg-luxe-cream/50`}
                  />
                  {errors.name && <p className="font-sans text-error text-caption mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-lg font-sans border-2 transition-colors ${
                      errors.email ? 'border-error' : 'border-luxe-gold/20 focus:border-luxe-gold'
                    } focus:outline-none bg-luxe-cream/50`}
                  />
                  {errors.email && <p className="font-sans text-error text-caption mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 900123"
                    className={`w-full px-4 py-3 rounded-lg font-sans border-2 transition-colors ${
                      errors.phone ? 'border-error' : 'border-luxe-gold/20 focus:border-luxe-gold'
                    } focus:outline-none bg-luxe-cream/50`}
                  />
                  {errors.phone && <p className="font-sans text-error text-caption mt-1">{errors.phone}</p>}
                </div>

                {/* Practice Area */}
                <div>
                  <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Practice Area</label>
                  <select
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg font-sans border-2 border-luxe-gold/20 focus:border-luxe-gold focus:outline-none transition-colors bg-luxe-cream/50 text-luxe-black"
                  >
                    <option value="property">Property Law</option>
                    <option value="family">Family Law</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="business">Business Law</option>
                    <option value="cyber-crime">Cyber Crime</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-md">
                <div>
                  <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Preferred Date *</label>
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                    placeholderText="Select a date"
                    className={`w-full px-4 py-3 rounded-lg font-sans border-2 transition-colors ${
                      errors.date ? 'border-error' : 'border-luxe-gold/20 focus:border-luxe-gold'
                    } focus:outline-none bg-luxe-cream/50`}
                  />
                  {errors.date && <p className="font-sans text-error text-caption mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Preferred Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg font-sans border-2 transition-colors ${
                      errors.time ? 'border-error' : 'border-luxe-gold/20 focus:border-luxe-gold'
                    } focus:outline-none bg-luxe-cream/50 text-luxe-black`}
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.time && <p className="font-sans text-error text-caption mt-1">{errors.time}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="mb-stack-md">
                <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase text-xs">Brief Description of Your Matter</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your legal situation..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg font-sans border-2 border-luxe-gold/20 focus:border-luxe-gold focus:outline-none transition-colors bg-luxe-cream/50 text-luxe-black"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-luxe-black text-luxe-cream px-8 py-4 rounded-lg font-sans font-semibold text-sm tracking-wide hover:shadow-luxury-lg hover:translate-y-[-2px] disabled:opacity-50 transition-all"
              >
                {isLoading ? (
                  <>
                    <MaterialIcon name="hourglass_empty" className="inline mr-2 animate-spin" />
                    Booking...
                  </>
                ) : (
                  <>
                    <MaterialIcon name="check_circle" className="inline mr-2" />
                    Confirm Consultation
                  </>
                )}
              </button>

              <p className="font-sans text-caption text-luxe-grey text-center mt-4">
                We'll confirm your appointment via email and phone within 24 hours.
              </p>
            </form>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Info Cards - Luxury Design */}
      <section className="bg-luxe-light py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            { icon: 'schedule', title: 'Duration', desc: '30 minutes' },
            { icon: 'currency_pound', title: 'Cost', desc: 'Complimentary for new clients' },
            { icon: 'videocam', title: 'Format', desc: 'Video call or in-person' },
          ].map((card, idx) => (
            <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 0.1}>
              <div className="luxury-card bg-luxe-cream p-stack-md rounded-lg text-center border border-luxe-gold/20 hover:shadow-luxury-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-luxe-gold/10 flex items-center justify-center mx-auto mb-stack-md">
                  <MaterialIcon name={card.icon} className="text-luxe-gold text-2xl" />
                </div>
                <h3 className="font-serif text-headline-sm text-luxe-black">{card.title}</h3>
                <p className="font-sans text-body-md text-luxe-grey mt-1">{card.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Consultation Booked!"
        message="We've received your booking request. Julian Thorne's team will confirm your appointment within 24 hours."
        autoCloseDelay={6000}
      />
    </>
  )
}

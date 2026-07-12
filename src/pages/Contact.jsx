import { useState } from 'react'
import PageMeta from '../components/ui/PageMeta'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import MaterialIcon from '../components/ui/MaterialIcon'
import SuccessModal from '../components/ui/SuccessModal'
import CTABanner from '../components/layout/CTABanner'
import { useLeads } from '../context/LeadsContext'
import { validateContactForm } from '../utils/validation'
import { submitToFormspree } from '../utils/formspree'
import { SITE } from '../data/site'

export default function Contact() {
  const { addLead } = useLeads()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateContactForm(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    try {
      await submitToFormspree({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }, 'contact')

      addLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        source: 'Contact Form',
      })

      setShowSuccess(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setErrors({ submit: error.message || 'Failed to submit. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <PageMeta
        title="Contact"
        description="Get in touch with Advocate Julian Thorne. Contact us by phone, email, or fill out the form."
      />

      {/* Luxury Hero Section */}
      <section className="bg-luxe-cream py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          {/* Header */}
          <AnimateOnScroll animation="fadeInUp" className="max-w-3xl">
            <span className="font-sans text-xs tracking-widest uppercase text-luxe-gold font-semibold block mb-4">Contact Information</span>
            <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-luxe-black mb-stack-md leading-tight">
              Let's Discuss Your Legal Matter
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark rounded-full mb-stack-md"></div>
            <p className="font-sans text-body-lg text-luxe-grey leading-relaxed">
              Whether you need immediate legal guidance or wish to explore how we can assist you, we're committed to providing timely, strategic counsel. Reach out via phone, email, or contact form below.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-luxe-cream">
        <div className="max-w-container-max mx-auto">
          {/* Two Column Layout: Contact Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-stretch">
            {/* Left Side - Contact Information Cards */}
            <AnimateOnScroll animation="fadeInLeft" className="space-y-6">
              {/* Primary Contact Card */}
              <div className="bg-white rounded-xl border border-luxe-gold/20 p-8 shadow-luxury-md hover:shadow-luxury-lg hover:border-luxe-gold/40 transition-all duration-300">
                <div className="flex gap-5 items-start mb-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-luxe-gold to-luxe-gold-dark flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="phone_in_talk" className="text-luxe-cream text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-headline-sm text-luxe-black mb-1">Speak with an Advisor</h3>
                    <p className="font-sans text-caption text-luxe-grey">Direct consultation line</p>
                  </div>
                </div>
                <a href={`tel:${SITE.phoneRaw}`} className="font-serif text-headline-sm text-luxe-gold hover:text-luxe-gold-dark transition-colors mb-3 block">
                  {SITE.phone}
                </a>
                <p className="font-sans text-body-md text-luxe-grey">
                  <span className="font-semibold text-luxe-black">Monday – Friday:</span> 9:00 AM – 6:00 PM
                </p>
                <p className="font-sans text-body-md text-luxe-grey">
                  <span className="font-semibold text-luxe-black">Saturday:</span> By appointment
                </p>
              </div>

              {/* Email Contact Card */}
              <div className="bg-white rounded-xl border border-luxe-gold/20 p-8 shadow-luxury-md hover:shadow-luxury-lg hover:border-luxe-gold/40 transition-all duration-300">
                <div className="flex gap-5 items-start mb-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-luxe-gold to-luxe-gold-dark flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="mail" className="text-luxe-cream text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-headline-sm text-luxe-black mb-1">Send us an Email</h3>
                    <p className="font-sans text-caption text-luxe-grey">Preferred for formal inquiries</p>
                  </div>
                </div>
                <a href={`mailto:${SITE.email}`} className="font-serif text-headline-sm text-luxe-gold hover:text-luxe-gold-dark transition-colors mb-3 block break-all">
                  {SITE.email}
                </a>
                <p className="font-sans text-body-md text-luxe-grey">
                  We respond to all email inquiries within 24 business hours. This method is ideal for detailed legal questions.
                </p>
              </div>

              {/* Office Location Card */}
              <div className="bg-luxe-black text-luxe-cream rounded-xl border border-luxe-gold/30 p-8 shadow-luxury-md hover:shadow-luxury-lg transition-all duration-300">
                <div className="flex gap-5 items-start mb-6">
                  <div className="w-14 h-14 rounded-lg bg-luxe-gold/20 flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="location_on" className="text-luxe-gold text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-headline-sm mb-1">Office Location</h3>
                    <p className="font-sans text-caption text-luxe-cream/80">Visit us in person</p>
                  </div>
                </div>
                <p className="font-serif text-headline-sm text-luxe-gold mb-2">Thorne Advocates</p>
                <p className="font-sans text-body-md text-luxe-cream/90 leading-relaxed">
                  Central London, WC2A 1LS<br/>
                  United Kingdom
                </p>
                <p className="font-sans text-caption text-luxe-cream/70 mt-4">
                  In-person consultations available by prior appointment.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Right Side - Contact Form */}
            <AnimateOnScroll animation="fadeInRight" delay={0.2}>
              <div className="bg-white rounded-xl border border-luxe-gold/20 p-8 md:p-10 shadow-luxury-md h-fit sticky top-24">
                <div className="mb-8">
                  <h2 className="font-serif text-headline-md text-luxe-black mb-2">Send a Message</h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-luxe-gold to-luxe-gold-dark rounded-full"></div>
                </div>
                <p className="font-sans text-body-md text-luxe-grey mb-stack-lg">
                  Please provide details about your legal inquiry. We will review your information and respond promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {errors.submit && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <MaterialIcon name="error_outline" className="text-red-500 text-lg flex-shrink-0 mt-0.5" />
                      <p className="font-sans text-body-md text-red-700">{errors.submit}</p>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-lg font-sans border transition-all ${
                        errors.name ? 'border-red-400 focus:border-red-500' : 'border-luxe-gold/20 focus:border-luxe-gold'
                      } focus:outline-none bg-luxe-cream/40 text-luxe-black placeholder-luxe-grey/50`}
                    />
                    {errors.name && <p className="font-sans text-red-500 text-caption mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-lg font-sans border transition-all ${
                        errors.email ? 'border-red-400 focus:border-red-500' : 'border-luxe-gold/20 focus:border-luxe-gold'
                      } focus:outline-none bg-luxe-cream/40 text-luxe-black placeholder-luxe-grey/50`}
                    />
                    {errors.email && <p className="font-sans text-red-500 text-caption mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 (0) 20 XXXX XXXX"
                      className={`w-full px-4 py-3 rounded-lg font-sans border transition-all ${
                        errors.phone ? 'border-red-400 focus:border-red-500' : 'border-luxe-gold/20 focus:border-luxe-gold'
                      } focus:outline-none bg-luxe-cream/40 text-luxe-black placeholder-luxe-grey/50`}
                    />
                    {errors.phone && <p className="font-sans text-red-500 text-caption mt-1">{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans font-semibold text-label-md text-luxe-black mb-2 tracking-widest uppercase">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your legal matter or inquiry..."
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg font-sans border transition-all resize-none ${
                        errors.message ? 'border-red-400 focus:border-red-500' : 'border-luxe-gold/20 focus:border-luxe-gold'
                      } focus:outline-none bg-luxe-cream/40 text-luxe-black placeholder-luxe-grey/50`}
                    />
                    {errors.message && <p className="font-sans text-red-500 text-caption mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-luxe-black text-luxe-cream px-6 py-4 rounded-lg font-sans font-semibold text-sm tracking-widest uppercase hover:shadow-luxury-lg hover:bg-luxe-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <MaterialIcon name="hourglass_empty" className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <MaterialIcon name="send" />
                        Send Inquiry
                      </>
                    )}
                  </button>

                  <p className="font-sans text-caption text-luxe-grey/70 text-center pt-2">
                    Your information is secure and used solely to respond to your inquiry.
                  </p>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <CTABanner />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Inquiry Received"
        message="Thank you for reaching out. We will review your inquiry and respond within 24 business hours."
        autoCloseDelay={5000}
      />
    </>
  )
}

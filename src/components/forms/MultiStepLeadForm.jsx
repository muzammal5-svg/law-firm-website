import { useState } from 'react'
import Select from 'react-select'
import { formatInTimeZone } from 'date-fns-tz'
import MaterialIcon from '../ui/MaterialIcon'

const CASE_CATEGORIES = [
  { value: 'civil_rights_litigation', label: 'Civil Rights Litigation' },
  { value: 'disability_benefits_litigation', label: 'Disability Benefits Litigation' },
  { value: 'eviction_litigation', label: 'Eviction Litigation' },
  { value: 'landlord_tenant_litigation', label: 'Landlord & Tenant Litigation' },
  { value: 'traffic_ticket_litigation', label: 'Traffic Ticket Litigation' },
  { value: 'will_writing', label: 'Will Writing' },
  { value: 'workers_compensation_litigation', label: "Workers' Compensation Litigation" },
  { value: 'other', label: 'Other' },
]

const TIMEZONES = [
  { value: 'America/New_York', label: 'US Eastern Time' },
  { value: 'America/Chicago', label: 'US Central Time' },
  { value: 'America/Los_Angeles', label: 'US Pacific Time' },
  { value: 'Europe/London', label: 'UK Time' },
  { value: 'Europe/Paris', label: 'Central European Time' },
  { value: 'Europe/Istanbul', label: 'Eastern European Time' },
  { value: 'Asia/Karachi', label: 'Pakistan Time' },
  { value: 'Asia/Dubai', label: 'UAE Time' },
]

const COUNTRIES = [
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'ES', label: 'Spain' },
  { value: 'IT', label: 'Italy' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'BE', label: 'Belgium' },
  { value: 'SE', label: 'Sweden' },
  { value: 'NO', label: 'Norway' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'PK', label: 'Pakistan' },
  { value: 'other', label: 'Other' },
]

export default function MultiStepLeadForm({ onSuccess, className = '' }) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error'
  
  // Form data
  const [formData, setFormData] = useState({
    name: '',
    country: null,
    phone: '',
    caseCategory: null,
    caseDescription: '',
    preferredTime: '',
    timezone: null,
    // Honeypot field
    website: '',
  })

  // Detect browser timezone on mount
  useState(() => {
    const browserTz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const matchedTz = TIMEZONES.find(tz => tz.value === browserTz)
    if (matchedTz && !formData.timezone) {
      setFormData(prev => ({ ...prev, timezone: matchedTz }))
    }
  }, [])

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setStep(prev => prev + 1)
  }

  const handleBack = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Honeypot check (if filled, it's a bot)
    if (formData.website) {
      console.log('Spam detected')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE'

      const payload = {
        access_key: accessKey,
        name: formData.name,
        country: formData.country?.label || '',
        phone: formData.phone,
        case_category: formData.caseCategory?.label || '',
        case_description: formData.caseDescription,
        preferred_time: formData.preferredTime,
        timezone: formData.timezone?.label || '',
        subject: `New Lead from ${formData.country?.label || 'Unknown'} - ${formData.caseCategory?.label || 'General'}`,
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        
        // Fire GTM conversion event
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'form_submit_success',
            form_name: 'lead_form',
            case_category: formData.caseCategory?.value,
            country: formData.country?.value,
          })
        }

        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess(formData)
        }

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            country: null,
            phone: '',
            caseCategory: null,
            caseDescription: '',
            preferredTime: '',
            timezone: formData.timezone, // Keep timezone
            website: '',
          })
          setStep(1)
          setSubmitStatus(null)
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStep1Valid = formData.name.trim() && formData.country
  const isStep2Valid = formData.phone.trim() && formData.caseCategory
  const isStep3Valid = formData.caseDescription.trim() && formData.preferredTime.trim() && formData.timezone

  // Success State
  if (submitStatus === 'success') {
    return (
      <div className={`bg-white rounded-2xl p-8 border-2 border-luxe-gold shadow-luxury-xl ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-luxe-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <MaterialIcon name="check" className="text-luxe-black text-3xl" />
          </div>
          <h3 className="font-serif text-headline-sm text-luxe-black mb-2">Thank You!</h3>
          <p className="font-sans text-body-md text-luxe-grey">
            We've received your inquiry and will contact you within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  // Error State
  if (submitStatus === 'error') {
    return (
      <div className={`bg-white rounded-2xl p-8 border-2 border-red-500 shadow-luxury-xl ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <MaterialIcon name="error" className="text-white text-3xl" />
          </div>
          <h3 className="font-serif text-headline-sm text-luxe-black mb-2">Something Went Wrong</h3>
          <p className="font-sans text-body-md text-luxe-grey mb-4">
            Please try again or contact us directly via WhatsApp.
          </p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="px-6 py-3 bg-luxe-gold text-luxe-black font-sans font-semibold rounded-lg hover:bg-luxe-gold-dark transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-2xl p-8 border border-luxe-gold/30 shadow-luxury-lg ${className}`}>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  step >= stepNum
                    ? 'bg-luxe-gold text-luxe-black'
                    : 'bg-luxe-light text-luxe-grey'
                }`}
              >
                {stepNum}
              </div>
              {stepNum < 3 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all ${
                    step > stepNum ? 'bg-luxe-gold' : 'bg-luxe-light'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <p className="font-sans text-sm text-luxe-grey text-center">
          Step {step} of 3
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Honeypot Field (hidden from users, bots will fill it) */}
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
          value={formData.website}
          onChange={(e) => handleChange('website', e.target.value)}
        />

        {/* Step 1: Name + Country */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="font-serif text-headline-sm text-luxe-black mb-4">
              Let's start with your details
            </h3>

            <div>
              <label className="block font-sans text-sm font-semibold text-luxe-black mb-2">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-luxe-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxe-gold font-sans"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-semibold text-luxe-black mb-2">
                Country of Residence *
              </label>
              <Select
                required
                value={formData.country}
                onChange={(value) => handleChange('country', value)}
                options={COUNTRIES}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select your country"
                styles={{
                  control: (base) => ({
                    ...base,
                    padding: '6px',
                    borderColor: '#C9A84C',
                    '&:hover': { borderColor: '#C9A84C' },
                  }),
                }}
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={!isStep1Valid}
              className="w-full px-6 py-4 bg-luxe-gold text-luxe-black font-sans font-semibold rounded-lg hover:bg-luxe-gold-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Next
              <MaterialIcon name="arrow_forward" />
            </button>
          </div>
        )}

        {/* Step 2: Phone + Case Category */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="font-serif text-headline-sm text-luxe-black mb-4">
              Contact & Case Type
            </h3>

            <div>
              <label className="block font-sans text-sm font-semibold text-luxe-black mb-2">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-luxe-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxe-gold font-sans"
                placeholder="+1 (555) 123-4567"
              />
              <p className="mt-1 text-xs text-luxe-grey">Include country code</p>
            </div>

            <div>
              <label className="block font-sans text-sm font-semibold text-luxe-black mb-2">
                Case Category *
              </label>
              <Select
                required
                value={formData.caseCategory}
                onChange={(value) => handleChange('caseCategory', value)}
                options={CASE_CATEGORIES}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select case type"
                styles={{
                  control: (base) => ({
                    ...base,
                    padding: '6px',
                    borderColor: '#C9A84C',
                    '&:hover': { borderColor: '#C9A84C' },
                  }),
                }}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 px-6 py-4 border-2 border-luxe-gold text-luxe-gold font-sans font-semibold rounded-lg hover:bg-luxe-gold/10 transition-all flex items-center justify-center gap-2"
              >
                <MaterialIcon name="arrow_back" />
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStep2Valid}
                className="flex-1 px-6 py-4 bg-luxe-gold text-luxe-black font-sans font-semibold rounded-lg hover:bg-luxe-gold-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Next
                <MaterialIcon name="arrow_forward" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Case Description + Callback Time */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="font-serif text-headline-sm text-luxe-black mb-4">
              Case Details & Preferred Contact Time
            </h3>

            <div>
              <label className="block font-sans text-sm font-semibold text-luxe-black mb-2">
                Brief Case Description *
              </label>
              <textarea
                required
                value={formData.caseDescription}
                onChange={(e) => handleChange('caseDescription', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-luxe-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxe-gold font-sans resize-none"
                placeholder="Please briefly describe your legal matter..."
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-semibold text-luxe-black mb-2">
                Preferred Callback Time *
              </label>
              <input
                type="text"
                required
                value={formData.preferredTime}
                onChange={(e) => handleChange('preferredTime', e.target.value)}
                className="w-full px-4 py-3 border border-luxe-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxe-gold font-sans"
                placeholder="e.g., Weekdays 9am-5pm, Weekend evenings"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-semibold text-luxe-black mb-2">
                Your Timezone *
              </label>
              <Select
                required
                value={formData.timezone}
                onChange={(value) => handleChange('timezone', value)}
                options={TIMEZONES}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select your timezone"
                styles={{
                  control: (base) => ({
                    ...base,
                    padding: '6px',
                    borderColor: '#C9A84C',
                    '&:hover': { borderColor: '#C9A84C' },
                  }),
                }}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 px-6 py-4 border-2 border-luxe-gold text-luxe-gold font-sans font-semibold rounded-lg hover:bg-luxe-gold/10 transition-all flex items-center justify-center gap-2"
              >
                <MaterialIcon name="arrow_back" />
                Back
              </button>
              <button
                type="submit"
                disabled={!isStep3Valid || isSubmitting}
                className="flex-1 px-6 py-4 bg-luxe-gold text-luxe-black font-sans font-semibold rounded-lg hover:bg-luxe-gold-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <MaterialIcon name="hourglass_empty" className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <MaterialIcon name="send" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Footer Note */}
      <p className="mt-6 text-xs text-luxe-grey text-center">
        By submitting this form, you agree to be contacted regarding your legal matter.
      </p>
    </div>
  )
}

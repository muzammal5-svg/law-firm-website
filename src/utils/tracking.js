import TagManager from 'react-gtm-module'

// Initialize Google Tag Manager
export function initializeTracking() {
  const gtmId = import.meta.env.VITE_GTM_ID

  if (gtmId && gtmId !== 'GTM-XXXXXXX') {
    TagManager.initialize({
      gtmId: gtmId,
    })
    console.log('GTM initialized:', gtmId)
  } else {
    console.warn('GTM ID not configured. Add VITE_GTM_ID to .env file.')
  }
}

// Track conversion events
export function trackEvent(eventName, eventData = {}) {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    })
    console.log('Event tracked:', eventName, eventData)
  }
}

// Predefined conversion events
export const ConversionEvents = {
  // Form submission success
  FORM_SUBMIT: (formData) =>
    trackEvent('form_submit_success', {
      form_name: formData.form_name || 'lead_form',
      case_category: formData.case_category,
      country: formData.country,
    }),

  // WhatsApp button click
  WHATSAPP_CLICK: (location = 'unknown') =>
    trackEvent('whatsapp_click', {
      button_location: location,
    }),

  // Phone number click
  PHONE_CLICK: (location = 'unknown') =>
    trackEvent('phone_click', {
      button_location: location,
    }),

  // Page view (for SPAs)
  PAGE_VIEW: (pagePath, pageTitle) =>
    trackEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    }),

  // Consultation booking
  CONSULTATION_BOOKED: (method = 'form') =>
    trackEvent('consultation_booked', {
      booking_method: method,
    }),
}

// Cookie consent management
export function checkTrackingConsent() {
  return localStorage.getItem('cookieConsent') === 'accepted'
}

export function setTrackingConsent(consent) {
  localStorage.setItem('cookieConsent', consent ? 'accepted' : 'declined')
  
  if (consent) {
    // Initialize tracking after consent
    initializeTracking()
  }
}

// Block tracking until consent given
export function shouldLoadTracking() {
  const consent = localStorage.getItem('cookieConsent')
  // If no consent decision yet, or if declined, don't load
  return consent === 'accepted'
}

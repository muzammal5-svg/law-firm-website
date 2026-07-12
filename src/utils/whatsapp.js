import { SITE } from '../data/site'

const PAGE_MESSAGES = {
  '/': 'Hello, I would like to inquire about your legal services.',
  '/about': 'Hello, I would like to learn more about Advocate Julian Thorne.',
  '/practice-areas': 'Hello, I need guidance on which practice area applies to my situation.',
  '/consultation': 'Hello, I would like to book a consultation.',
  '/faq': 'Hello, I have a question that was not covered in your FAQ.',
  '/blog': 'Hello, I read your blog and would like to discuss a related legal matter.',
  '/contact': 'Hello, I would like to get in touch regarding a legal matter.',
}

const PRACTICE_AREA_MESSAGES = {
  property: 'Hello, I need assistance with a property law matter.',
  family: 'Hello, I need assistance with a family law matter.',
  criminal: 'Hello, I need assistance with a criminal defense matter.',
  business: 'Hello, I need assistance with a business or contract matter.',
  'cyber-crime': 'Hello, I need assistance with a cyber crime or data protection matter.',
}

export function buildWhatsAppUrl({ pathname = '/', practiceArea = null, customMessage = null } = {}) {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || SITE.whatsapp
  let message = customMessage

  if (!message) {
    if (practiceArea && PRACTICE_AREA_MESSAGES[practiceArea]) {
      message = PRACTICE_AREA_MESSAGES[practiceArea]
    } else {
      const basePath = pathname.split('/').slice(0, 2).join('/') || '/'
      message = PAGE_MESSAGES[basePath] || PAGE_MESSAGES[pathname] || PAGE_MESSAGES['/']
    }
  }

  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}

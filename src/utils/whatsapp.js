import { SITE } from '../data/site'

const PAGE_MESSAGES = {
  '/': 'Hello, I would like to inquire about your tax and financial advisory services.',
  '/about': 'Hello, I would like to learn more about Syed Muhammad Adnan Aamir and his advisory services.',
  '/practice-areas': 'Hello, I need guidance on which advisory service applies to my situation.',
  '/consultation': 'Hello, I would like to book a consultation with Adnan Aamir Advisory.',
  '/testimonials': 'Hello, I came across your client testimonials and would like to discuss my requirements.',
  '/faq': 'Hello, I have a question that was not covered in your FAQ.',
  '/blog': 'Hello, I read your blog and would like to discuss a related matter.',
  '/contact': 'Hello, I would like to get in touch regarding a financial or tax advisory matter.',
}

const SERVICE_MESSAGES = {
  'tax-advisory': 'Hello, I need assistance with tax advisory and filing services.',
  'financial-analysis': 'Hello, I need assistance with financial analysis and reporting.',
  'corporate-legal': 'Hello, I need assistance with corporate and business law consultancy.',
  'accounting-auditing': 'Hello, I need assistance with accounting, auditing or management accounting.',
  'erp-consulting': 'Hello, I need assistance with ERP/SAP financial consulting.',
  'cross-border-advisory': 'Hello, I need cross-border advisory services for Pakistan and Saudi Arabia.',
}

export function buildWhatsAppUrl({ pathname = '/', practiceArea = null, customMessage = null } = {}) {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || SITE.whatsapp
  let message = customMessage

  if (!message) {
    if (practiceArea && SERVICE_MESSAGES[practiceArea]) {
      message = SERVICE_MESSAGES[practiceArea]
    } else {
      const basePath = pathname.split('/').slice(0, 2).join('/') || '/'
      message = PAGE_MESSAGES[basePath] || PAGE_MESSAGES[pathname] || PAGE_MESSAGES['/']
    }
  }

  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}

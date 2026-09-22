/**
 * SITE CONFIGURATION
 * Pulls from firmConfig.js for centralised management.
 */

import firmConfig from './firmConfig'

export const SITE = {
  name: firmConfig.firmName,
  advocate: firmConfig.attorney.name,
  phone: firmConfig.contact.phone,
  phoneRaw: firmConfig.contact.phoneRaw,
  whatsapp: firmConfig.contact.whatsapp,
  email: firmConfig.contact.email,
  address: firmConfig.contact.address.full,
}

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/practice-areas' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Blog', path: '/blog' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
]

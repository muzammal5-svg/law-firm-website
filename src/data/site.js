/**
 * SITE CONFIGURATION (Legacy)
 * This file now pulls from firmConfig.js for centralized management
 * Kept for backward compatibility - prefer using useFirmConfig() hook
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
  { label: 'Practice Areas', path: '/practice-areas' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

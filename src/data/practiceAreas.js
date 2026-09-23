/**
 * PRACTICE AREAS
 * Pulls from firmConfig.js — single source of truth.
 */

import firmConfig from './firmConfig'

const serviceImages = {
  'civil-rights-litigation':         'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop',
  'disability-benefits-litigation':  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
  'eviction-litigation':             'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
  'landlord-tenant-litigation':      'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop',
  'traffic-ticket-litigation':       'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
  'will-writing':                    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
  'workers-compensation-litigation': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
}

const serviceImageAlts = {
  'civil-rights-litigation':         'Constitution and legal books representing civil rights litigation',
  'disability-benefits-litigation':  'Medical records representing disability benefits litigation',
  'eviction-litigation':             'House keys representing eviction litigation',
  'landlord-tenant-litigation':      'Residential building representing landlord and tenant litigation',
  'traffic-ticket-litigation':       'Car representing traffic ticket litigation',
  'will-writing':                    'Legal documents and pen representing will writing',
  'workers-compensation-litigation': 'Workplace team representing workers compensation litigation',
}

export const practiceAreas = firmConfig.practiceAreas.map((area) => ({
  id: area.id,
  slug: area.slug,
  title: area.title,
  shortTitle: area.title,
  icon: area.icon,
  description: area.description,
  longDescription: area.fullDescription,
  image:
    serviceImages[area.id] ||
    'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=800&h=600&fit=crop',
  imageAlt: serviceImageAlts[area.id] || `${area.title} legal services`,
  services: area.subAreas || [],
  timeline: {
    'Initial Consultation': '24–48 Hours',
    'Case Assessment':      '2–5 Days',
    'Court Representation': 'As Scheduled',
  },
  featured: area.id === firmConfig.practiceAreas[0]?.id,
}))

export function getPracticeAreaBySlug(slug) {
  return practiceAreas.find((area) => area.slug === slug)
}

/**
 * PRACTICE AREAS
 * Pulls from firmConfig.js — single source of truth.
 */

import firmConfig from './firmConfig'

const serviceImages = {
  'criminal-law':           'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=800&h=600&fit=crop',
  'family-law':             'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
  'legal-advisory':         'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
  'property-law':           'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
  'civil-litigation':       'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
  'constitutional-matters': 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop',
}

const serviceImageAlts = {
  'criminal-law':           'Courtroom gavel representing criminal law defence',
  'family-law':             'Family representing family law services',
  'legal-advisory':         'Legal documents and pen representing advisory services',
  'property-law':           'Property keys and documents representing real estate law',
  'civil-litigation':       'Scales of justice representing civil litigation',
  'constitutional-matters': 'Constitution book representing constitutional law',
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

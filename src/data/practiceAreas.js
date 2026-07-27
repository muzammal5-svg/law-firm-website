/**
 * PRACTICE AREAS (Legacy)
 * This file now pulls from firmConfig.js
 * Kept for backward compatibility
 */

import firmConfig from './firmConfig'

// Map firmConfig practice areas to legacy format
export const practiceAreas = firmConfig.practiceAreas.map((area) => ({
  id: area.id,
  slug: area.slug,
  title: area.title,
  shortTitle: area.title,
  icon: area.icon,
  description: area.description,
  longDescription: area.fullDescription,
  image: area.image || `https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop`, // Default placeholder
  imageAlt: `${area.title} legal services`,
  services: area.subAreas || [],
  timeline: { consultation: '24-48 Hours', discovery: '1-3 Weeks', resolution: 'Case Dependent' },
  featured: area.id === firmConfig.practiceAreas[0]?.id, // First area is featured
}))

export function getPracticeAreaBySlug(slug) {
  return practiceAreas.find((area) => area.slug === slug)
}

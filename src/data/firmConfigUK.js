/**
 * UK DEMO CONFIGURATION
 * Pre-configured for UK market demo (Solicitor terminology, UK practice areas)
 */

import { firmConfig } from './firmConfig'

export const firmConfigUK = {
  ...firmConfig,
  
  region: 'uk',
  firmName: 'Chambers & Partners',
  tagline: 'Trusted Solicitors Serving London',
  logoText: 'C&P',
  
  attorney: {
    ...firmConfig.attorney,
    name: 'Oliver Chambers',
    fullTitle: 'Solicitor',
    barNumber: 'SRA #654321',
    credentials: ['LLB', 'LLM'],
    bio: {
      ...firmConfig.attorney.bio,
      intro: 'With over 15 years serving clients across London and the Home Counties, our firm offers expert legal advice with a personal touch. We handle complex matters with proven results.',
    }
  },
  
  contact: {
    phone: '+44 20 7946 0123',
    phoneRaw: '+442079460123',
    whatsapp: '447700900123',
    email: 'contact@chamberspartners.co.uk',
    address: {
      street: 'Chancery Lane',
      city: 'London',
      state: '', // UK doesn't use state
      zip: 'WC2A 1LS',
      country: 'United Kingdom',
      full: 'Chancery Lane, London, WC2A 1LS, United Kingdom'
    },
    officeHours: firmConfig.contact.officeHours
  },
  
  // UK-focused practice areas
  practiceAreas: [
    {
      id: 'property-law',
      title: 'Property Law',
      slug: 'property-law',
      icon: 'home',
      description: 'Expert conveyancing and property dispute resolution.',
      fullDescription: 'From residential conveyancing to complex property disputes, we guide you through UK property law with clarity.',
      subAreas: ['Conveyancing', 'Leasehold Issues', 'Landlord & Tenant', 'Property Disputes']
    },
    {
      id: 'family-law',
      title: 'Family Law',
      slug: 'family-law',
      icon: 'people',
      description: 'Sensitive guidance through divorce and child arrangements.',
      fullDescription: 'Navigate UK family law with a solicitor who understands both the legal process and the emotional impact.',
      subAreas: ['Divorce', 'Child Arrangements', 'Financial Settlements', 'Domestic Abuse']
    },
    {
      id: 'criminal-defence',
      title: 'Criminal Defence',
      slug: 'criminal-defence',
      icon: 'gavel',
      description: 'Robust defence in magistrates and crown courts.',
      fullDescription: 'When facing criminal charges, you need expert representation that knows UK criminal procedure inside out.',
      subAreas: ['Magistrates Court', 'Crown Court', 'Road Traffic Offences', 'Fraud']
    },
    {
      id: 'business-law',
      title: 'Business & Commercial',
      slug: 'business-law',
      icon: 'business_center',
      description: 'Strategic advice for businesses and entrepreneurs.',
      fullDescription: 'From company formation to commercial disputes, we provide practical legal solutions for UK businesses.',
      subAreas: ['Company Formation', 'Commercial Contracts', 'Business Disputes', 'Employment Law']
    },
    {
      id: 'immigration',
      title: 'Immigration',
      slug: 'immigration',
      icon: 'flight',
      description: 'Expert guidance through UK visa and settlement applications.',
      fullDescription: 'Navigate complex UK immigration rules with specialist solicitors who stay current with Home Office policy.',
      subAreas: ['Work Visas', 'Family Visas', 'Settlement', 'Appeals']
    }
  ],
  
  isDemo: true, // Demo mode enabled
}

export default firmConfigUK

/**
 * US DEMO CONFIGURATION
 * Pre-configured for US market demo (Attorney terminology, US practice areas)
 */

import { firmConfig } from './firmConfig'

export const firmConfigUS = {
  ...firmConfig,
  
  region: 'us',
  firmName: 'Madison & Associates',
  tagline: 'Trusted Legal Advocacy Across New York',
  logoText: 'M&A',
  
  attorney: {
    ...firmConfig.attorney,
    name: 'James Madison',
    fullTitle: 'Attorney at Law',
    barNumber: 'NY Bar #123456',
    bio: {
      ...firmConfig.attorney.bio,
      intro: 'With over 15 years serving clients across New York, our firm combines big-firm expertise with personalized attention. We handle complex litigation with a track record of favorable outcomes.',
    }
  },
  
  contact: {
    phone: '+1 (212) 555-0123',
    phoneRaw: '+12125550123',
    whatsapp: '12125550123',
    email: 'contact@madisonlegal.com',
    address: {
      street: '350 Fifth Avenue, Suite 4800',
      city: 'New York',
      state: 'NY',
      zip: '10118',
      country: 'United States',
      full: '350 Fifth Avenue, Suite 4800, New York, NY 10118'
    },
    officeHours: firmConfig.contact.officeHours
  },
  
  // US-focused practice areas
  practiceAreas: [
    {
      id: 'personal-injury',
      title: 'Personal Injury',
      slug: 'personal-injury',
      icon: 'local_hospital',
      description: 'Maximum compensation for accident victims across New York.',
      fullDescription: 'From auto accidents to premises liability, we fight insurance companies to get you the settlement you deserve.',
      subAreas: ['Car Accidents', 'Slip & Fall', 'Medical Malpractice', 'Wrongful Death']
    },
    {
      id: 'family-law',
      title: 'Family Law',
      slug: 'family-law',
      icon: 'people',
      description: 'Compassionate guidance through divorce and custody matters.',
      fullDescription: 'New York family law requires both legal precision and emotional intelligence. We provide both.',
      subAreas: ['Divorce', 'Child Custody', 'Alimony', 'Prenuptial Agreements']
    },
    {
      id: 'criminal-defense',
      title: 'Criminal Defense',
      slug: 'criminal-defense',
      icon: 'gavel',
      description: 'Aggressive defense of your constitutional rights.',
      fullDescription: 'When facing criminal charges, you need an attorney who knows New York courts and how to win.',
      subAreas: ['DUI/DWI', 'White Collar Crime', 'Drug Charges', 'Assault']
    },
    {
      id: 'business-law',
      title: 'Business Law',
      slug: 'business-law',
      icon: 'business_center',
      description: 'Strategic counsel for NYC businesses and entrepreneurs.',
      fullDescription: 'From startups to established companies, we handle contracts, disputes, and transactions.',
      subAreas: ['Contract Law', 'LLC Formation', 'Commercial Litigation', 'Employment Law']
    },
    {
      id: 'estate-planning',
      title: 'Estate Planning',
      slug: 'estate-planning',
      icon: 'account_balance',
      description: 'Protect your legacy with comprehensive estate plans.',
      fullDescription: 'Navigate New York estate tax and probate law to secure your family\'s future.',
      subAreas: ['Wills & Trusts', 'Probate', 'Asset Protection', 'Elder Law']
    }
  ],
  
  isDemo: true, // Demo mode enabled
}

export default firmConfigUS

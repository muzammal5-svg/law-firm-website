/**
 * MASTER FIRM CONFIGURATION
 * 
 * This is the SINGLE SOURCE OF TRUTH for all firm identity and content.
 * To re-skin this template for a new client, edit ONLY this file.
 * 
 * Region: 'us' | 'uk' - Controls terminology (Attorney/Solicitor, State Bar/SRA, etc.)
 */

export const firmConfig = {
  // ============================================================================
  // REGION & IDENTITY
  // ============================================================================
  region: 'us', // 'us' | 'uk'
  firmName: 'Counsel & Clarity',
  tagline: 'Expert Legal Representation When It Matters Most',
  logoText: 'C&C',
  
  // ============================================================================
  // ATTORNEY/SOLICITOR INFORMATION
  // ============================================================================
  attorney: {
    name: '[ATTORNEY_NAME]', // Replace with real name
    fullTitle: 'Attorney at Law', // Auto-generated based on region in component
    credentials: ['JD', 'LLM'],
    barNumber: '[STATE_BAR_NO]', // US: State Bar No. | UK: SRA No.
    yearsExperience: 15,
    
    // Bio sections
    bio: {
      headline: 'Empathetic Representation, Elite Expertise',
      intro: 'With over 15 years of dedicated legal practice, our firm stands as a trusted guide through life\'s most challenging legal moments. Our approach combines unwavering legal expertise with genuine empathy for every client\'s unique situation.',
      philosophy: 'Whether resolving intricate disputes or sensitive personal litigation, we focus on distilling complexity into actionable clarity. Our philosophy is simple: every client deserves representation that understands the human stakes as well as the legal ones.',
      expertise: 'Our track record spans high-stakes negotiations, regulatory matters, and contentious litigation. Each case receives personal attention and strategic insight.',
    },
    
    // Career milestones for About page timeline
    milestones: [
      { year: '2008', title: 'Academic Foundation', desc: 'Graduated with honors, specializing in litigation and dispute resolution.' },
      { year: '2012', title: 'Senior Associate', desc: 'Appointed Senior Associate at a leading firm, handling complex civil matters.' },
      { year: '2018', title: 'Independent Practice', desc: 'Founded practice to provide personalized, high-stakes legal counsel.' },
      { year: '2023', title: 'Award for Excellence', desc: 'Recognized for outstanding commitment to client advocacy and results.' },
    ],
    
    // Profile image
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC5dvvrYM5-uPdEnlqAZbEu5Qm_LB06qp1TlTrFKbkWZM8Rf4dNzuGZOiqbMTgfmBGDNFW4LTAm5UJDQPZrXPwzpAkUMtGTu8aCOWBcCzgxXDvtqvyE5djx9z76WxIxTXom-zn8ygmoaCXYLOrxlpbEFWMonc9r8nxAa3Vv4-fvHoU-aj9kUvUkRpQv7IBCO5A3suWL6Yr-anYxlyjdqCAJ737eP2vCgR8C7IPkFJjGAOra_hSkeiUd-8rA9xuaqIuwwXdXZSrrt0', // Replace per client
  },
  
  // ============================================================================
  // CONTACT INFORMATION
  // ============================================================================
  contact: {
    phone: '+1 (555) 123-4567',
    phoneRaw: '+15551234567',
    whatsapp: '15551234567',
    email: 'contact@counselclarity.com',
    
    address: {
      street: '123 Main Street, Suite 400',
      city: 'New York',
      state: 'NY', // or 'London' for UK
      zip: '10001',
      country: 'United States', // 'United Kingdom' for UK
      full: '123 Main Street, Suite 400, New York, NY 10001, United States'
    },
    
    officeHours: {
      weekday: { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
      weekend: { days: 'Saturday', hours: 'By Appointment Only' }
    }
  },
  
  // ============================================================================
  // STATISTICS (for trust metrics)
  // ============================================================================
  stats: {
    yearsExperience: '15+',
    clientsServed: '500+',
    successRate: '98%',
    casesResolved: '1000+'
  },
  
  // ============================================================================
  // PRACTICE AREAS (Flexible array - edit per client)
  // ============================================================================
  practiceAreas: [
    {
      id: 'personal-injury',
      title: 'Personal Injury',
      slug: 'personal-injury',
      icon: 'local_hospital',
      description: 'Comprehensive representation for accident victims seeking fair compensation.',
      fullDescription: 'From car accidents to slip-and-fall cases, we fight for maximum compensation for your injuries, medical expenses, and lost wages.',
      subAreas: ['Motor Vehicle Accidents', 'Slip and Fall', 'Medical Malpractice', 'Workplace Injuries']
    },
    {
      id: 'family-law',
      title: 'Family Law',
      slug: 'family-law',
      icon: 'people',
      description: 'Compassionate guidance through divorce, custody, and family disputes.',
      fullDescription: 'Navigate complex family matters with an advocate who understands both the legal intricacies and the emotional toll.',
      subAreas: ['Divorce & Separation', 'Child Custody', 'Spousal Support', 'Adoption']
    },
    {
      id: 'criminal-defense',
      title: 'Criminal Defense',
      slug: 'criminal-defense',
      icon: 'gavel',
      description: 'Aggressive defense protecting your rights and freedom.',
      fullDescription: 'When your freedom is on the line, you need experienced representation that knows how to build a strong defense.',
      subAreas: ['DUI/DWI', 'White Collar Crime', 'Assault', 'Drug Offenses']
    },
    {
      id: 'business-law',
      title: 'Business Law',
      slug: 'business-law',
      icon: 'business_center',
      description: 'Strategic counsel for contracts, disputes, and business formation.',
      fullDescription: 'Protect your business interests with practical legal advice from formation through complex commercial transactions.',
      subAreas: ['Contract Disputes', 'Business Formation', 'Mergers & Acquisitions', 'Employment Law']
    },
    {
      id: 'estate-planning',
      title: 'Estate Planning',
      slug: 'estate-planning',
      icon: 'account_balance',
      description: 'Secure your legacy with comprehensive wills, trusts, and estate plans.',
      fullDescription: 'Plan for the future and protect your loved ones with thoughtfully crafted estate documents.',
      subAreas: ['Wills & Trusts', 'Probate', 'Asset Protection', 'Power of Attorney']
    }
  ],
  
  // ============================================================================
  // TESTIMONIALS (Generic DEMO data - replace per client)
  // ============================================================================
  testimonials: [
    {
      id: 1,
      name: 'Sarah M.',
      title: 'Business Owner',
      hasVideo: true,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with real client video
      text: 'Professional, responsive, and got results when it mattered most. I felt supported through every step of a difficult legal process.',
      rating: 5,
      isDemo: true, // Marks as demo/placeholder content
    },
    {
      id: 2,
      name: 'Michael R.',
      title: 'Family Law Client',
      hasVideo: true,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
      text: 'Exceptional guidance during a complex custody case. Their expertise and compassion made all the difference for my family.',
      rating: 5,
      isDemo: true,
    },
    {
      id: 3,
      name: 'Jennifer K.',
      title: 'Personal Injury Client',
      hasVideo: true,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      text: 'They fought tirelessly for my rights and secured a settlement that exceeded my expectations. Highly recommend their services.',
      rating: 5,
      isDemo: true,
    }
  ],
  
  // ============================================================================
  // AWARDS & RECOGNITION (Placeholder - customize per client)
  // ============================================================================
  awards: [
    { title: 'Client Choice Award', year: 2023, icon: 'workspace_premium', isDemo: true },
    { title: 'Top Rated Law Firm', year: 2023, icon: 'star', isDemo: true },
    { title: 'Excellence in Advocacy', year: 2022, icon: 'military_tech', isDemo: true },
    { title: 'Community Service Recognition', year: 2022, icon: 'volunteer_activism', isDemo: true },
  ],
  
  // ============================================================================
  // THEME COLORS (CSS Variables - customize per client brand)
  // ============================================================================
  theme: {
    primary: '#D4AF37', // Gold accent
    secondary: '#000000', // Black
    background: '#FAF9F6', // Cream
    darkBg: '#1a1a1a',
    lightBg: '#f5f5f5',
  },
  
  // ============================================================================
  // FORM SUBMISSION (Web3Forms integration)
  // ============================================================================
  forms: {
    web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
    gtmId: import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX',
  },
  
  // ============================================================================
  // SEO & META
  // ============================================================================
  seo: {
    defaultTitle: 'Counsel & Clarity - Expert Legal Representation',
    defaultDescription: 'Trusted legal advocacy for life\'s most challenging moments. Expert representation in personal injury, family law, criminal defense, and more.',
    defaultImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=630&fit=crop', // Replace with firm-specific OG image
  },
  
  // ============================================================================
  // DEMO MODE FLAGS
  // ============================================================================
  isDemo: false, // Set to true for /demo routes to show disclaimers
}

export default firmConfig

/**
 * TERMINOLOGY HELPER
 * Automatically adjusts legal terminology based on region (US vs UK)
 */

/**
 * Get region-appropriate legal term
 * @param {string} key - The term key to look up
 * @param {string} region - 'us' or 'uk'
 * @returns {string} - The appropriate term for the region
 */
export function getTerm(key, region = 'us') {
  const terms = {
    // Legal professional titles
    attorney: region === 'us' ? 'Attorney' : 'Solicitor',
    attorneys: region === 'us' ? 'Attorneys' : 'Solicitors',
    attorneyAtLaw: region === 'us' ? 'Attorney at Law' : 'Solicitor',
    lawFirm: region === 'us' ? 'Law Firm' : 'Law Firm', // Same in both
    
    // Credentials & licensing
    barLabel: region === 'us' ? 'State Bar No.' : 'SRA No.',
    barShort: region === 'us' ? 'Bar' : 'SRA',
    licensed: region === 'us' ? 'Licensed Attorney' : 'Qualified Solicitor',
    
    // Currency
    currency: region === 'us' ? '$' : '£',
    currencySymbol: region === 'us' ? '$' : '£',
    
    // Court terminology
    court: region === 'us' ? 'Court' : 'Court',
    trial: region === 'us' ? 'Trial' : 'Trial',
    lawsuit: region === 'us' ? 'Lawsuit' : 'Legal Action',
    plaintiff: region === 'us' ? 'Plaintiff' : 'Claimant',
    defendant: region === 'us' ? 'Defendant' : 'Defendant',
    
    // Practice area variations
    realEstate: region === 'us' ? 'Real Estate' : 'Property',
    dui: region === 'us' ? 'DUI/DWI' : 'Drink Driving',
    
    // Spelling variations (optional - minor)
    specialize: region === 'us' ? 'specialize' : 'specialise',
    specializing: region === 'us' ? 'specializing' : 'specialising',
    defense: region === 'us' ? 'defense' : 'defence',
    
    // Location terms
    office: region === 'us' ? 'Office' : 'Office',
    firm: region === 'us' ? 'Firm' : 'Firm',
  }
  
  return terms[key] || key
}

/**
 * Get full attorney/solicitor title with credentials
 * @param {object} attorney - Attorney object from config
 * @param {string} region - 'us' or 'uk'
 * @returns {string} - Full professional title
 */
export function getFullTitle(attorney, region = 'us') {
  const title = getTerm('attorneyAtLaw', region)
  if (attorney.credentials && attorney.credentials.length > 0) {
    return `${title}, ${attorney.credentials.join(', ')}`
  }
  return title
}

/**
 * Format bar/SRA number with appropriate label
 * @param {string} barNumber - The bar/SRA number
 * @param {string} region - 'us' or 'uk'
 * @returns {string} - Formatted string like "State Bar No. 123456"
 */
export function formatBarNumber(barNumber, region = 'us') {
  const label = getTerm('barLabel', region)
  return `${label} ${barNumber}`
}

/**
 * Get region-appropriate practice area icon mapping
 * Some practice areas have different names in US vs UK
 */
export function getPracticeAreaTitle(slug, region = 'us') {
  const mappings = {
    'property-law': region === 'us' ? 'Real Estate Law' : 'Property Law',
    'criminal-defense': region === 'us' ? 'Criminal Defense' : 'Criminal Defence',
    'dui-dwi': region === 'us' ? 'DUI/DWI Defense' : 'Drink Driving Defence',
  }
  
  return mappings[slug] || null
}

export default {
  getTerm,
  getFullTitle,
  formatBarNumber,
  getPracticeAreaTitle
}

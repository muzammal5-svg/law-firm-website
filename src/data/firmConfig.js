/**
 * MASTER FIRM CONFIGURATION
 *
 * Single source of truth for all firm identity and content.
 * Client: Rana Muhammad Zahid Muneer
 * Advocate High Court Islamabad
 */

export const firmConfig = {
  // ============================================================================
  // REGION & IDENTITY
  // ============================================================================
  region: 'pk',
  firmName: 'Rana M. Zahid Muneer Advocate',
  tagline: 'Trusted Legal Advocacy — Civil Rights | Benefits | Eviction | Tenant Matters',
  logoText: 'RZM',

  // ============================================================================
  // ADVOCATE INFORMATION
  // ============================================================================
  attorney: {
    name: 'Rana Muhammad Zahid Muneer',
    fullTitle: 'Advocate | Civil Rights Litigation | Disability Benefits | Eviction | Will Writing',
    credentials: ['Advocate High Court', 'Islamabad Bar Council'],
    barNumber: 'Islamabad High Court Bar – Permanent Member',
    yearsExperience: 15,

    bio: {
      headline: 'Trusted Advocacy, Proven Results — Islamabad High Court',
      intro:
        'Rana Muhammad Zahid Muneer helps clients navigate complex civil rights claims, disability benefit disputes, eviction challenges, landlord and tenant litigation, traffic ticket matters, will drafting, and workers\' compensation claims with practical, result-focused advocacy.',
      philosophy:
        'Rana Zahid believes that every client deserves clear, honest, and determined representation. Whether protecting constitutional rights, challenging a denied benefit, or resolving a tenancy dispute, his approach is rooted in careful preparation, strategic action, and a commitment to protecting the client\'s interests.',
      expertise:
        'With a strong litigation practice and a client-first approach, Rana Zahid serves individuals and families who need skilled guidance in high-stakes disputes, procedural challenges, and entitlement claims across civil and administrative matters.',
    },

    milestones: [
      {
        year: '2005',
        title: 'Enrolled as Advocate',
        desc: 'Enrolled as an Advocate with the Islamabad Bar Council, initiating a litigation practice focused on civil rights, administrative disputes, and entitlement claims.',
      },
      {
        year: '2009',
        title: 'Advocate High Court',
        desc: 'Elevated to Advocate High Court, gaining the right of audience before the Islamabad High Court and all subordinate courts — a recognition of demonstrated legal competence and courtroom excellence.',
      },
      {
        year: '2012',
        title: 'Litigation Practice Expansion',
        desc: 'Expanded the practice to include civil rights claims, disability benefit challenges, eviction defence, landlord-tenant disputes, and workers’ compensation matters.',
      },
      {
        year: '2015',
        title: 'Client Advocacy & Advisory',
        desc: 'Developed a client-focused litigation and advisory approach covering tenant disputes, traffic ticket defence, estate planning through wills, and strategic legal guidance.',
      },
      {
        year: '2018',
        title: 'F-8 Markaz Chamber Established',
        desc: 'Established a permanent chamber at Haroon Ur Rasheed Block, F-8 Markaz, Islamabad — one of the capital\'s most accessible legal hubs — providing walk-in and appointment-based consultations.',
      },
      {
        year: '2023',
        title: '5-Star Rated Practice',
        desc: 'Achieved a 5.0 Google rating based on 34 verified client reviews, reflecting consistent excellence in client service, case outcomes, and professional conduct.',
      },
    ],

    image: '/Rana Muhammad Zahid Muneer.jpg',
  },

  // ============================================================================
  // CONTACT INFORMATION
  // ============================================================================
  contact: {
    phone: '0300-5421753',
    phoneRaw: '+923005421753',
    whatsapp: '923005421753',
    email: 'muhammad.zahidmuneer@gmail.com',
    linkedin: 'https://share.google/2xiMvBpv9eBo3RoHG',

    address: {
      street: 'Chamber No. 27, Haroon Ur Rasheed Block',
      city: 'Islamabad',
      state: 'Federal Capital',
      zip: '44800',
      country: 'Pakistan',
      full: 'Chamber No. 27, Haroon Ur Rasheed Block, F-8 Markaz Near PSO Pump, Islamabad 44800, Pakistan',
    },

    officeHours: {
      weekday: { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
      weekend: { days: 'Saturday', hours: 'By Appointment Only' },
    },
  },

  // ============================================================================
  // STATISTICS
  // ============================================================================
  stats: {
    yearsExperience: '15+',
    clientsServed: '500+',
    successRate: '98%',
    casesResolved: '1,000+',
  },

  // ============================================================================
  // SERVICES / PRACTICE AREAS
  // ============================================================================
  practiceAreas: [
    {
      id: 'civil-rights-litigation',
      title: 'Civil Rights Litigation',
      slug: 'civil-rights-litigation',
      icon: 'balance',
      description:
        'Vigorous representation for clients whose fundamental rights and civil liberties have been violated — enforcing constitutional protections through the courts.',
      fullDescription:
        'Civil rights litigation addresses violations of fundamental rights guaranteed under the Constitution of Pakistan. Rana Muhammad Zahid Muneer represents individuals who have suffered unlawful discrimination, abuse of authority, wrongful detention, or denial of constitutional protections. Cases are argued before the Islamabad High Court and subordinate courts, seeking injunctive relief, damages, and enforceable remedies to protect clients\' rights.',
      subAreas: [
        'Fundamental Rights Petitions',
        'Discrimination & Harassment Claims',
        'Unlawful Detention Challenges',
        'Police Misconduct Cases',
        'Writ of Mandamus & Certiorari',
        'Constitutional Remedy Applications',
      ],
    },
    {
      id: 'disability-benefits-litigation',
      title: 'Disability Benefits Litigation',
      slug: 'disability-benefits-litigation',
      icon: 'accessible',
      description:
        'Legal representation for individuals denied or underpaid disability benefits — challenging unlawful decisions by employers, insurers, and government bodies.',
      fullDescription:
        'When disability benefits are wrongfully denied, delayed, or reduced, affected individuals need skilled legal advocacy to recover what they are entitled to. The practice handles disputes against employers, insurance companies, and relevant government departments. Services cover initial claims support, appeals against adverse decisions, and litigation before tribunals and civil courts to secure the benefits clients rightfully deserve.',
      subAreas: [
        'Disability Benefit Claim Disputes',
        'Appeals Against Denial Decisions',
        'Employer Disability Obligation Claims',
        'Insurance Dispute Litigation',
        'Tribunal & Court Representation',
        'Settlement Negotiation',
      ],
    },
    {
      id: 'eviction-litigation',
      title: 'Eviction Litigation',
      slug: 'eviction-litigation',
      icon: 'home_work',
      description:
        'Expert legal representation in eviction proceedings — protecting tenants from unlawful eviction and assisting landlords in lawful possession recovery.',
      fullDescription:
        'Eviction disputes require fast and precise legal action. The practice represents both landlords seeking lawful recovery of possession and tenants facing unlawful or improper eviction proceedings. Services include filing and defending eviction suits, obtaining urgent stay orders to prevent illegal dispossession, and navigating the Rent Restriction Ordinance and civil court procedures to achieve a lawful and expedient resolution.',
      subAreas: [
        'Tenant Eviction Defence',
        'Landlord Possession Recovery',
        'Urgent Stay Order Applications',
        'Unlawful Eviction Challenges',
        'Rent Controller Proceedings',
        'Settlement & Mediation',
      ],
    },
    {
      id: 'landlord-tenant-litigation',
      title: 'Landlord & Tenant Litigation',
      slug: 'landlord-tenant-litigation',
      icon: 'apartment',
      description:
        'Comprehensive legal services for all landlord and tenant disputes — rent recovery, lease breaches, deposit disputes, and tenancy agreement enforcement.',
      fullDescription:
        'Landlord and tenant disputes can escalate quickly without prompt legal intervention. The practice handles the full range of tenancy matters including rent recovery suits, enforcement of tenancy agreement terms, breach of lease disputes, security deposit claims, illegal subletting, and property damage claims. Both landlords and tenants are represented across Islamabad\'s civil courts and Rent Controller tribunals.',
      subAreas: [
        'Rent Recovery Suits',
        'Lease Agreement Enforcement',
        'Breach of Tenancy Claims',
        'Security Deposit Disputes',
        'Illegal Subletting Cases',
        'Rent Controller Tribunal Hearings',
      ],
    },
    {
      id: 'traffic-ticket-litigation',
      title: 'Traffic Ticket Litigation',
      slug: 'traffic-ticket-litigation',
      icon: 'directions_car',
      description:
        'Professional legal defence against traffic citations, licence suspensions, and road offence charges — protecting your driving record and licence.',
      fullDescription:
        'Traffic violations and citations can have serious consequences including fines, licence suspension, and even criminal liability in serious road offence cases. The practice provides legal representation to challenge traffic tickets, contest licence suspension orders, defend against reckless or dangerous driving charges, and handle accident-related road offence proceedings. Each case is reviewed for procedural defects and substantive legal defences.',
      subAreas: [
        'Traffic Citation Challenges',
        'Licence Suspension Appeals',
        'Reckless Driving Defence',
        'Accident-Related Offence Cases',
        'Road Traffic Tribunal Hearings',
        'Fine Reduction Applications',
      ],
    },
    {
      id: 'will-writing',
      title: 'Will Writing',
      slug: 'will-writing',
      icon: 'edit_document',
      description:
        'Professional drafting of legally valid wills and testamentary documents — ensuring your estate is distributed according to your wishes under Pakistani law.',
      fullDescription:
        'A properly drafted will is one of the most important legal documents you will ever sign. The practice prepares wills that are legally valid under Pakistani law and Islamic inheritance principles, clearly setting out the distribution of assets, appointment of executors, guardianship of minor children, and any specific bequests. Services also include will registration, review of existing wills, and estate planning advisory to minimise future disputes among heirs.',
      subAreas: [
        'Drafting Legally Valid Wills',
        'Islamic Inheritance Compliance',
        'Executor Appointment & Guidance',
        'Minor Guardianship Provisions',
        'Will Registration',
        'Estate & Succession Planning',
      ],
    },
    {
      id: 'workers-compensation-litigation',
      title: "Workers' Compensation Litigation",
      slug: 'workers-compensation-litigation',
      icon: 'engineering',
      description:
        'Strong legal advocacy for workers injured on the job or denied lawful compensation — pursuing claims against employers and insurers to full resolution.',
      fullDescription:
        "Workers injured in the course of employment are entitled to compensation under Pakistan's Workmen's Compensation Act and related labour laws. The practice represents workers in claiming compensation for workplace injuries, occupational diseases, and fatalities. Services include filing compensation claims, negotiating with employers and insurers, and litigating before Labour Courts and civil courts when fair settlement is refused.",
      subAreas: [
        'Workplace Injury Compensation Claims',
        'Occupational Disease Claims',
        'Fatal Accident Compensation',
        'Employer Liability Disputes',
        'Labour Court Representation',
        'Insurance Settlement Negotiation',
      ],
    },
  ],

  // ============================================================================
  // TESTIMONIALS
  // ============================================================================
  testimonials: [
    {
      id: 1,
      name: 'Muhammad Asif',
      title: 'Client – Civil Rights Matter',
      hasVideo: false,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      videoUrl: null,
      text: 'Rana Sahib handled my civil rights matter with calm confidence and strong legal preparation. He explained every step clearly and fought for a fair outcome without unnecessary delays. Highly recommended for serious disputes.',
      rating: 5,
      isDemo: true,
    },
    {
      id: 2,
      name: 'Sadia Noor',
      title: 'Client – Disability Benefits Appeal',
      hasVideo: false,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      videoUrl: null,
      text: 'My disability claim was denied and the process felt overwhelming. Rana Zahid reviewed the case carefully, built a solid argument, and stood by me through the appeal with professionalism and genuine support.',
      rating: 5,
      isDemo: true,
    },
    {
      id: 3,
      name: 'Tariq Hussain',
      title: 'Client – Eviction Defence',
      hasVideo: false,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      videoUrl: null,
      text: 'I was facing a difficult eviction issue and needed urgent legal clarity. Rana Sahib gave practical advice, protected my rights, and handled the case with the confidence and attention it deserved.',
      rating: 5,
      isDemo: true,
    },
    {
      id: 4,
      name: 'Usman Tashkia',
      title: 'Client – Will Writing',
      hasVideo: false,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      videoUrl: null,
      text: 'The will drafting process was handled with care and precision. Rana Zahid explained everything clearly and made sure the document reflected my wishes and family circumstances correctly.',
      rating: 5,
      isDemo: true,
    },
  ],

  // ============================================================================
  // AWARDS & RECOGNITION
  // ============================================================================
  awards: [
    { title: 'Advocate High Court', year: 2009, icon: 'gavel', isDemo: false },
    { title: 'Islamabad Bar Council', year: 2005, icon: 'workspace_premium', isDemo: false },
    { title: '5.0 Google Rating', year: 2023, icon: 'star', isDemo: false },
    { title: 'Haroon Ur Rasheed Block Chamber', year: 2018, icon: 'verified', isDemo: false },
  ],

  // ============================================================================
  // THEME
  // ============================================================================
  theme: {
    primary: '#C9A84C',    // Deep gold
    secondary: '#0F1B2D',  // Deep navy
    background: '#FAFAF8',
    darkBg: '#0F1B2D',
    lightBg: '#F5F3EE',
  },

  // ============================================================================
  // FORM SUBMISSION
  // ============================================================================
  forms: {
    web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
    gtmId: import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX',
  },

  // ============================================================================
  // SEO & META
  // ============================================================================
  seo: {
    defaultTitle: 'Rana M. Zahid Muneer Advocate | Civil Rights, Disability Benefits, Eviction & Litigation',
    defaultDescription:
      'Rana Muhammad Zahid Muneer – Advocate handling civil rights litigation, disability benefits claims, eviction and landlord-tenant matters, traffic ticket litigation, will writing, and workers’ compensation disputes in Islamabad.',
    defaultKeywords:
      'Civil rights litigation, disability benefits litigation, eviction litigation, landlord and tenant litigation, traffic ticket litigation, will writing, workers compensation litigation, tailored legal services Islamabad',
    defaultImage: '/Rana Muhammad Zahid Muneer.jpg',
  },

  // ============================================================================
  // DEMO MODE
  // ============================================================================
  isDemo: false,
}

export default firmConfig

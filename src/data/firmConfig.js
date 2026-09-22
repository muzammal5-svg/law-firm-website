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
  tagline: 'Trusted Legal Advocacy — Criminal | Family | Corporate — Islamabad High Court',
  logoText: 'RZM',

  // ============================================================================
  // ADVOCATE INFORMATION
  // ============================================================================
  attorney: {
    name: 'Rana Muhammad Zahid Muneer',
    fullTitle: 'Advocate High Court | Criminal | Family | Legal Advisor',
    credentials: ['Advocate High Court', 'Islamabad Bar Council'],
    barNumber: 'Islamabad High Court Bar – Permanent Member',
    yearsExperience: 15,

    bio: {
      headline: 'Trusted Advocacy, Proven Results — Islamabad High Court',
      intro:
        'Rana Muhammad Zahid Muneer is a distinguished Advocate of the High Court of Islamabad with extensive experience in criminal law, family law, and general legal advisory. Practising from Chamber No. 27, F-8 Markaz, Islamabad, he is known for his commitment to clients, sharp legal acumen, and calm, strategic approach in court.',
      philosophy:
        'Rana Zahid believes that every client deserves clear, honest, and fearless legal representation. Whether defending a criminal matter, navigating a complex family dispute, or advising a business on legal risk, his approach is rooted in thorough preparation, procedural precision, and unwavering dedication to the client\'s cause.',
      expertise:
        'With a 5.0 Google rating and a loyal client base built entirely on referrals and results, Rana Zahid has established one of Islamabad\'s most respected individual legal practices. He regularly appears before the Islamabad High Court and subordinate courts, handling matters with the professionalism and tenacity that the bar demands.',
    },

    milestones: [
      {
        year: '2005',
        title: 'Enrolled as Advocate',
        desc: 'Enrolled as an Advocate with the Islamabad Bar Council, beginning a legal career dedicated to criminal defence, family law, and corporate advisory.',
      },
      {
        year: '2009',
        title: 'Advocate High Court',
        desc: 'Elevated to Advocate High Court, gaining the right of audience before the Islamabad High Court and all subordinate courts — a recognition of demonstrated legal competence and courtroom excellence.',
      },
      {
        year: '2012',
        title: 'Criminal Law Specialisation',
        desc: 'Developed a focused criminal law practice spanning FIR registration, bail applications, trials, and appellate matters — representing both accused and complainant parties with equal vigour.',
      },
      {
        year: '2015',
        title: 'Family Law Practice Expansion',
        desc: 'Expanded the practice to include a full suite of family law services — divorce, khula, custody, maintenance, and inheritance matters — serving clients across Islamabad and Rawalpindi.',
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
      id: 'criminal-law',
      title: 'Criminal Law',
      slug: 'criminal-law',
      icon: 'gavel',
      description:
        'Expert criminal defence and prosecution advisory covering FIR registration, bail applications, trials, and appeals before Islamabad High Court and subordinate courts.',
      fullDescription:
        'Rana Muhammad Zahid Muneer provides comprehensive criminal law services — from the moment an FIR is lodged through to acquittal or appeal. Services include pre-arrest bail, post-arrest bail, trial defence, prosecution support, and appellate representation. Criminal matters handled include murder, theft, fraud, cybercrime, PECA offences, drug-related charges, and white-collar crime.',
      subAreas: [
        'FIR Registration & Quashing',
        'Pre-Arrest & Post-Arrest Bail',
        'Criminal Trial Defence',
        'Prosecution Advisory',
        'Appeals & Revisions',
        'Cybercrime & PECA Offences',
      ],
    },
    {
      id: 'family-law',
      title: 'Family Law',
      slug: 'family-law',
      icon: 'family_restroom',
      description:
        'Compassionate and professional handling of divorce, khula, child custody, maintenance, and inheritance matters under Pakistani family law.',
      fullDescription:
        'Family disputes require both legal precision and human sensitivity. The practice handles all aspects of family law including divorce, khula (judicial divorce), child custody and guardianship, maintenance claims, dower recovery, and inheritance/succession matters. Cases are handled with strict confidentiality and a focus on achieving resolution efficiently while protecting the client\'s rights.',
      subAreas: [
        'Divorce & Khula',
        'Child Custody & Guardianship',
        'Maintenance & Dower Recovery',
        'Inheritance & Succession',
        'Marriage Registration',
        'Domestic Violence Protection',
      ],
    },
    {
      id: 'legal-advisory',
      title: 'Legal Advisory',
      slug: 'legal-advisory',
      icon: 'balance',
      description:
        'Practical legal advisory for individuals and businesses — contract review, property disputes, civil litigation, and general legal guidance.',
      fullDescription:
        'Beyond court representation, the practice offers proactive legal advisory services designed to prevent disputes before they arise. Services include contract drafting and review, property verification and dispute resolution, civil litigation, tenancy matters, and ongoing legal retainers for businesses requiring regular counsel. Clients receive clear, jargon-free legal advice tailored to their specific situation.',
      subAreas: [
        'Contract Drafting & Review',
        'Property & Title Disputes',
        'Civil Litigation',
        'Tenancy & Rent Matters',
        'Business Legal Advisory',
        'Document Attestation & Notary',
      ],
    },
    {
      id: 'property-law',
      title: 'Property & Land Law',
      slug: 'property-law',
      icon: 'home_work',
      description:
        'Property purchase verification, title disputes, possession matters, and real estate litigation before civil courts of Islamabad.',
      fullDescription:
        'Property disputes are among the most stressful legal matters a person can face. The practice handles title deed verification, property purchase and transfer advisory, possession and eviction cases, fraudulent transfer disputes, and co-ownership disagreements. With Islamabad\'s growing real estate market, having expert legal counsel before signing any property document is essential.',
      subAreas: [
        'Title Deed Verification',
        'Property Purchase Advisory',
        'Possession & Eviction Cases',
        'Fraudulent Transfer Disputes',
        'Co-Ownership Disagreements',
        'Mortgage & Lien Matters',
      ],
    },
    {
      id: 'civil-litigation',
      title: 'Civil Litigation',
      slug: 'civil-litigation',
      icon: 'account_balance',
      description:
        'Representation in civil suits, recovery of money, injunctions, and declaratory suits before civil courts and the Islamabad High Court.',
      fullDescription:
        'Civil litigation requires strategic thinking as much as legal knowledge. The practice represents clients in money recovery suits, declaratory suits, injunction applications, specific performance claims, and breach of contract matters. Each civil case is approached with a clear litigation strategy designed to achieve the fastest, most cost-effective resolution — whether through negotiation, mediation, or trial.',
      subAreas: [
        'Money Recovery Suits',
        'Declaratory Suits',
        'Injunction Applications',
        'Specific Performance Claims',
        'Breach of Contract',
        'Consumer Protection Matters',
      ],
    },
    {
      id: 'constitutional-matters',
      title: 'Constitutional & Writ Matters',
      slug: 'constitutional-matters',
      icon: 'menu_book',
      description:
        'Filing and arguing writ petitions, constitutional petitions, and fundamental rights applications before the Islamabad High Court.',
      fullDescription:
        'As an Advocate High Court, Rana Muhammad Zahid Muneer has standing to file and argue constitutional petitions directly before the Islamabad High Court. Services include writ petitions for enforcement of fundamental rights, service matters, departmental appeals, and challenges to illegal orders or actions by public authorities. Constitutional litigation requires both procedural expertise and persuasive advocacy — qualities that define this practice.',
      subAreas: [
        'Writ of Mandamus & Certiorari',
        'Fundamental Rights Petitions',
        'Service & Employment Matters',
        'Departmental Appeals',
        'Challenges to Public Authority Orders',
        'Habeas Corpus Applications',
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
      title: 'Client – Criminal Defence Matter',
      hasVideo: false,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      videoUrl: null,
      text: 'Rana Sahib handled my case with complete professionalism. He got my pre-arrest bail approved when I was told it was impossible. His knowledge of criminal procedure and his confidence in court gave our family tremendous peace of mind. Highly recommended.',
      rating: 5,
      isDemo: true,
    },
    {
      id: 2,
      name: 'Sadia Noor',
      title: 'Client – Family Law (Khula)',
      hasVideo: false,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      videoUrl: null,
      text: 'Going through a khula is incredibly difficult, but Rana Zahid handled my case with both legal expertise and human empathy. He kept me informed at every step, resolved the matter in under three months, and made sure my rights were fully protected.',
      rating: 5,
      isDemo: true,
    },
    {
      id: 3,
      name: 'Tariq Hussain',
      title: 'Client – Property Dispute',
      hasVideo: false,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      videoUrl: null,
      text: 'I had been dealing with a property dispute for two years with no resolution. Rana Sahib reviewed the case, identified a key procedural weakness in the opposing claim, and we won the injunction within weeks. Honest, hardworking, and truly expert.',
      rating: 5,
      isDemo: true,
    },
    {
      id: 4,
      name: 'Usman Tashkia',
      title: 'Client – PMC Case',
      hasVideo: false,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      videoUrl: null,
      text: 'Committed man. What a great experience with you in my PMC case. Thorough preparation and excellent advocacy throughout the entire process.',
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
    defaultTitle: 'Rana M. Zahid Muneer Advocate | High Court Islamabad – Criminal, Family & Legal Advisory',
    defaultDescription:
      'Rana Muhammad Zahid Muneer – Advocate High Court Islamabad. Expert in criminal law, family law, property disputes, and civil litigation. Chamber No. 27, F-8 Markaz, Islamabad. 5.0 ★ rated.',
    defaultKeywords:
      'Advocate High Court Islamabad, Criminal Lawyer Islamabad, Family Lawyer Islamabad, Divorce Lawyer Islamabad, Property Dispute Lawyer, Bail Application Islamabad, Rana Zahid Muneer Advocate, F-8 Markaz Lawyer',
    defaultImage: '/Rana Muhammad Zahid Muneer.jpg',
  },

  // ============================================================================
  // DEMO MODE
  // ============================================================================
  isDemo: false,
}

export default firmConfig

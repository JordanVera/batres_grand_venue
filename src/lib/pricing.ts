export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  href: string;
};

export type PackageSection = {
  title: string;
  items: string[];
};

export type VenuePackageDetail = {
  id: string;
  slug: string;
  name: string;
  price: string;
  tagline: string;
  description: string;
  capacity: string;
  heroImage: string;
  highlighted?: boolean;
  sections: PackageSection[];
  footnote?: string;
};

export type SpecialOffer = {
  id: string;
  name: string;
  price: string;
  description: string;
};

export const PACKAGE_NAV = [
  { label: 'Silver Package', shortLabel: 'Silver', href: '/packages/silver' },
  { label: 'Gold Package', shortLabel: 'Gold', href: '/packages/gold' },
  { label: 'Platinum Package', shortLabel: 'Platinum', href: '/packages/platinum' },
  { label: 'Special Packages', shortLabel: 'Special', href: '/packages/special' },
] as const;

export const VENUE_PACKAGES: PricingPackage[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    price: 'From $9,515',
    description:
      'Venue rental with essentials for an elegant Humble reception — buffet catering, décor, and on-site staff.',
    features: [
      '6½ hrs reception + 1 hr practice',
      'VIP Room with personal access code',
      'Buffet chef-style menu',
      'Chiavari chairs & 15 uplights',
      'Up to 250 guests seated',
    ],
    href: '/packages/silver',
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: 'From $10,550',
    highlighted: true,
    description:
      'Elevated celebration with plated dinner, custom cake, DJ, waitstaff, and upgraded décor.',
    features: [
      'Plated chef-style menu',
      'Custom buttercream cake & tasting',
      'Professional DJ with lights',
      'Waitstaff & in-house centerpieces',
      'Backdrop & day-of timeline',
    ],
    href: '/packages/gold',
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    price: 'From $13,050',
    description:
      'All-inclusive wedding or quinceañera — photography, video, glassware, and full night-of team.',
    features: [
      'Photography & video package',
      'Glass dinnerware service',
      'Professional DJ with lights',
      'Waitstaff & full décor suite',
      'Cake & food tasting included',
    ],
    href: '/packages/platinum',
  },
];

export const PACKAGE_DETAILS: VenuePackageDetail[] = [
  {
    id: 'silver',
    slug: 'silver',
    name: 'Silver Package',
    price: 'From $9,515',
    tagline: 'Elegant essentials',
    description:
      'Personalized and customized services to fit every budget. Ideal for couples who want a beautiful Humble reception with venue, décor, buffet catering, and essential Batres staff.',
    capacity: 'Up to 250 guests seated',
    heroImage: '/gallery/gallery-04.jpg',
    sections: [
      {
        title: 'Rental Includes',
        items: [
          '6½ hrs of reception time & 1 hr practice session',
          'Lobby area',
          'Full-size dance floor',
          'VIP Room (with personal access code)',
          'Grand staircase',
          'Bar / beverage area (BYOB)',
          'Clean-up included',
        ],
      },
      {
        title: 'Reception Decor',
        items: [
          'Choice of specialty linen for main table, cake, gift, and lobby table',
          'Photo easel to display your choice of photography',
          'Round and rectangle banquet tables with black, white, or ivory linens',
          'Chiavari chairs',
          '15 uplights throughout the venue with choice of color',
        ],
      },
      {
        title: 'Gourmet Catering',
        items: [
          'Buffet chef-style menu selection',
          'Beverage choice of iced tea or lemonade',
          'Disposable plates and utensils',
        ],
      },
      {
        title: 'Batres Staff',
        items: [
          'Venue manager',
          'Constables for security',
          'TABC-certified bartender',
          'Event staff during entire event (not wait staff)',
          'Parking attendant',
          'Cleaning crew',
        ],
      },
    ],
    footnote: 'Prices are subject to change.',
  },
  {
    id: 'gold',
    slug: 'gold',
    name: 'Gold Package',
    price: 'From $10,550',
    tagline: 'Most popular',
    description:
      'An elevated celebration with plated dinner, custom cake, professional DJ, waitstaff, and upgraded reception décor — personalized to fit your vision and budget.',
    capacity: 'Up to 250 guests comfortably seated',
    heroImage: '/gallery/gallery-08.jpg',
    highlighted: true,
    sections: [
      {
        title: 'Rental Includes',
        items: [
          '6½ hrs reception time & 1 hr practice session',
          'Full-size dance floor',
          'Elegant staircase',
          'V.I.P. Room',
          'Bar area / prep space',
          'Lobby area',
          'Clean-up included',
        ],
      },
      {
        title: 'Reception Decor',
        items: [
          'Choice of specialty upgraded linen for cake, gift, and lobby table',
          'Photo easel',
          'Customized table layout',
          'Day-of timeline',
          'Round or rectangular banquet tables with available linens, runners, and sashes',
          'Main table with specialty linen and centerpiece',
          'Backdrop with options of elegant displays',
          'Elegant money box and cake stand in gold or silver',
          'In-house centerpieces',
          'Silver Chiavari chairs',
          'Uplights throughout the venue with choice of color',
        ],
      },
      {
        title: 'Gourmet Catering',
        items: [
          'Plated chef-style menu selection with iced tea or lemonade',
          'Disposable plates and utensils',
          '1 hour pre-reception beverage service (client provides beverages)',
          'Custom-design buttercream cake',
          'Cake cutting service',
          'Disposable cake plates and forks',
          'Cake and food tasting included',
        ],
      },
      {
        title: 'Batres Staff',
        items: [
          'Venue manager',
          'Constable officers',
          'Professional DJ with lights',
          'TABC-certified bartender',
          'Waitstaff',
          'Parking attendant',
          'Cleaning crew',
        ],
      },
    ],
    footnote: 'Prices are subject to change.',
  },
  {
    id: 'platinum',
    slug: 'platinum',
    name: 'Platinum Package',
    price: 'From $13,050',
    tagline: 'All-inclusive',
    description:
      'Our most complete package — plated dinner with glassware, photography and video, custom cake, DJ, waitstaff, and full décor so your wedding or quinceañera feels effortless.',
    capacity: 'Up to 250 guests comfortably seated',
    heroImage: '/gallery/gallery-12.jpg',
    sections: [
      {
        title: 'Rental Includes',
        items: [
          '6½ hrs reception time & 1 hr practice session',
          'Full-size dance floor',
          'Elegant staircase',
          'V.I.P. Room',
          'Bar area / prep space',
          'Lobby area',
          'Clean-up included',
        ],
      },
      {
        title: 'Reception Decor',
        items: [
          'Choice of specialty upgraded linen for cake, gift, and lobby table',
          'Photo easel',
          'Customized table layout',
          'Day-of timeline',
          'Round or rectangular banquet tables with available linens, runners, and sashes',
          'Main table with specialty linen and centerpiece',
          'Backdrop with options of elegant displays',
          'Elegant money box and cake stand in gold or silver',
          'In-house centerpieces',
          'Silver Chiavari chairs',
          'Uplights throughout the venue with choice of color',
        ],
      },
      {
        title: 'Photography and Video',
        items: [
          'Photoshoot (1–2 months before event)',
          'One 20×28 photo and frame',
          '2 locations day of event',
          '400 high-resolution edited photos',
          'Video 2–3 hours (high resolution)',
          '1 USB',
          'Coverage until 11pm',
        ],
      },
      {
        title: 'Gourmet Catering',
        items: [
          'Plated chef-style menu selection with iced tea or lemonade',
          'Glass dinner plate, tea glass, fork, and knife',
          'Pre-reception beverage service (client provides beverages)',
          'Custom-design buttercream cake',
          'Cake cutting service',
          'Disposable cake plates and forks',
          'Cake and food tasting included',
        ],
      },
      {
        title: 'Staff',
        items: [
          'Venue manager',
          'Constable officers',
          'Professional DJ with lights',
          'TABC-certified bartender',
          'Waitstaff',
          'Parking attendant',
          'Cleaning crew',
        ],
      },
    ],
    footnote: 'Prices are subject to change.',
  },
];

export const SPECIAL_PACKAGES_INTRO =
  'Micro weddings, Christmas corporate events, and more — customizable options for intimate celebrations and seasonal gatherings at Batres Grand Venue.';

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'christmas-corporate',
    name: 'Christmas Corporate Packages',
    price: 'From $4,350',
    description:
      'Strengthen team connections and celebrate the holiday season with our customizable Christmas Corporate Packages. Perfect for corporate holiday parties, employee appreciation events, client gatherings, church events, and festive celebrations. Our elegant venue provides the ideal setting for bringing colleagues together during the most wonderful time of the year.',
  },
  {
    id: 'micro-weddings',
    name: 'Micro Weddings',
    price: 'From $4,500',
    description:
      'Celebrate your special day with an intimate wedding designed just for you. Our customizable Micro Wedding Packages are perfect for smaller guest counts, offering the same elegant venue, personalized service, and attention to detail that make every Batres Grand Venue celebration unforgettable.',
  },
];

export const ADD_ONS: PricingPackage[] = [];

export const PRICING_NOTES = [
  'Peak weekend dates book well in advance.',
  'Package details and pricing are subject to change — contact us for the current menu.',
  'Schedule a private tour of Batres Grand Venue to walk the hall and VIP suite.',
  'We offer personalized and customized services to fit every budget.',
];

export function getPackageBySlug(slug: string): VenuePackageDetail | undefined {
  return PACKAGE_DETAILS.find((pkg) => pkg.slug === slug);
}

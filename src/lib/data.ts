export const COMPANY = {
  name: 'Batres Grand Venue',
  shortName: 'Batres Grand Venue',
  tagline: 'Premier Event Venue in Humble, TX',
  phone: '(832) 777-6639',
  phoneHref: '+18327776639',
  email: 'info@batresgrandvenue.com',
  address: '14803 Vera Dr',
  city: 'Humble, TX 77396',
  serviceArea: 'Humble · North Houston · Kingwood',
  maxGuests: 250,
  instagram: 'https://www.instagram.com/batresgrandvenue/',
  instagramHandle: '@batresgrandvenue',
  facebook: 'https://www.facebook.com/batresgrandvenue/',
  website: 'https://www.batresgrandvenue.com/',
  googleUrl:
    'https://www.google.com/maps/search/?api=1&query=Batres+Grand+Venue+14803+Vera+Dr+Humble+TX+77396',
  googleReviewsUrl:
    'https://www.google.com/maps/search/Batres+Grand+Venue+14803+Vera+Dr+Humble+TX+77396+reviews',
  googleRating: 4.6,
  reviewCount: 48,
};

export const ACCENT = '#C4A35A';
export const ACCENT_HOVER = '#A6863F';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Packages', href: '/packages' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Reception Hall' },
  { id: 'events', label: 'Weddings & Quinceañeras' },
  { id: 'exterior', label: 'VIP Suite & Details' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export { GALLERY_IMAGES, type GalleryImage } from './gallery-images';

export const ABOUT_CONTENT = {
  intro:
    'Batres Grand Venue is a family-owned premier event space in Humble, TX — dedicated to unforgettable weddings, quinceañeras, and celebrations with elegance, personalized service, and attention to every detail.',
  body: 'Our 4,500 sq ft reception hall welcomes guests with sparkling crystal chandeliers, a custom grand staircase with iron railing, a glamorous full-service bar, stained concrete floors, 24-foot ceilings, and expansive windows that flood the room with natural light.',
  evolution:
    'From intimate gatherings to grand events for up to 250 guests, our Silver, Gold, and Platinum packages plus a private VIP bridal suite with balcony access make planning stress-free — with an on-site team that treats every celebration like family.',
};

export const VENUE_HIGHLIGHTS = [
  {
    title: '4,500 Sq Ft Reception Hall',
    description:
      'Soaring 24-foot ceilings, four crystal chandeliers, stained concrete floors, and a custom grand staircase with iron railing for unforgettable grand entrances.',
  },
  {
    title: 'Private VIP Bridal Suite',
    description:
      'An exclusive getting-ready suite with balcony access — glamorous, private, and designed for portraits before you walk the staircase.',
  },
  {
    title: 'All-Inclusive Packages',
    description:
      'Silver, Gold, and Platinum packages cover vendors, floor plans, linens, and coordination so your wedding or quinceañera feels effortless.',
  },
  {
    title: 'Humble · North Houston',
    description:
      '14803 Vera Dr — easy highway access from Houston, Kingwood, and Atascocita, with parking attendants available on event day.',
  },
];

export const AMENITIES = [
  '250 Guest Capacity',
  '4,500 Sq Ft Banquet Hall',
  'Grand Staircase & Iron Railing',
  'Crystal Chandeliers',
  'VIP Suite with Balcony',
  'Full-Service Bar',
  '24-Foot Ceilings',
  'Onsite Event Team',
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Marina R.',
    event: 'Wedding · Platinum Package',
    rating: 5,
    text: 'I chose the platinum package and felt like I checked into a 5-star resort. Dinner for 250, cake, bar, photo booth, DJ, waiters, parking attendants — Maggie was on top of every detail and I was a stress-free bride.',
  },
  {
    id: 2,
    name: 'Kanetrica',
    event: 'Wedding · Guest Review',
    rating: 5,
    text: "Completely speechless. The staff, caterer, and DJ paid close attention to every detail. Marisol kept the timeline running smoothly, Chef Mark's food was superb, and the dance floor never emptied.",
  },
  {
    id: 3,
    name: 'Wedding Client',
    event: 'Wedding · Google Review',
    rating: 5,
    text: "Such a beautiful place. Food was great, staff was awesome, and the owners are a pleasure to work with. A top-of-the-line Humble venue with prices that can't be beat.",
  },
  {
    id: 4,
    name: 'Quinceañera Family',
    event: 'Quinceañera · Google Review',
    rating: 5,
    text: "Batres made our daughter's quinceañera feel grand — the staircase entrance, chandeliers, and VIP suite photos were everything we dreamed of. The team treated us like family.",
  },
  {
    id: 5,
    name: 'Google Reviewer',
    event: 'Wedding · Google Review',
    rating: 5,
    text: 'A hidden gem in Humble. Customizable floor plans, beautiful lighting, and a dedicated on-site team. Our guests could not stop talking about the space.',
  },
  {
    id: 6,
    name: 'Google Reviewer',
    event: 'Celebration · Google Review',
    rating: 5,
    text: 'Planning was easy and they were attentive to every last detail. The grand staircase and crystal chandeliers made our celebration look like a magazine.',
  },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: 'What are your rental rates?',
    answer:
      'Silver packages start at $9,515, Gold at $10,550, and Platinum at $13,050. Micro weddings start at $4,500 and Christmas corporate packages at $4,350. Pricing is subject to change.',
    link: { href: '/pricing', label: 'Compare Packages' },
  },
  {
    question: 'How many guests can you accommodate?',
    answer:
      'Our 4,500 sq ft reception hall hosts up to 250 guests with customizable floor plans for weddings, quinceañeras, and private events.',
  },
  {
    question: 'Where is Batres Grand Venue located?',
    answer:
      'We are at 14803 Vera Dr, Humble, TX 77396 — a North Houston banquet hall with easy highway access from Kingwood, Atascocita, and downtown Houston.',
  },
  {
    question: 'How do I schedule a tour?',
    answer:
      'Book a private tour to walk the reception hall, grand staircase, and VIP bridal suite. Peak weekend dates book well in advance.',
    link: { href: '/tour', label: 'Schedule a Tour' },
  },
  {
    question: 'What is included in the VIP suite?',
    answer:
      'Our private bridal suite includes balcony access for getting-ready moments and portraits before your grand staircase entrance.',
  },
  {
    question: 'Do you host quinceañeras?',
    answer:
      'Yes. Quinceañeras are one of our specialties — packages can include dinner, DJ, décor, and coordination for a celebration that feels truly grand.',
  },
  {
    question: 'Is parking available?',
    answer:
      'Yes. On-site parking is available, and parking attendants can be included with select packages.',
  },
  {
    question: 'What types of events do you host?',
    answer:
      'Weddings, quinceañeras, corporate events, receptions, and private celebrations of all kinds in our Humble banquet hall.',
  },
];

export { VIDEOS_DATA as VIDEOS, EMBEDS_DATA as EMBEDS } from './videos';

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const VENUE_PACKAGES: PricingPackage[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    price: 'Contact Us',
    description: 'Venue rental with essentials for an elegant Humble reception.',
    features: ['Reception hall access', 'Grand staircase', 'Tables & chairs', 'Up to 250 guests'],
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: 'Contact Us',
    highlighted: true,
    description: 'Elevated celebration with décor, coordination, and VIP suite access.',
    features: ['VIP bridal suite', 'Linens & décor options', 'Onsite coordination', 'Parking attendant'],
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    price: 'Contact Us',
    description: 'All-inclusive wedding or quinceañera — vendors, dinner, and night-of team.',
    features: ['Dinner service', 'DJ & bar service', 'Photo booth options', 'Full event staff'],
  },
];

export const ADD_ONS: PricingPackage[] = [];

export const PRICING_NOTES = [
  'Peak weekend dates book well in advance.',
  'Package details and pricing are subject to change — contact us for the current menu.',
  'Schedule a private tour of Batres Grand Venue to walk the hall and VIP suite.',
];
